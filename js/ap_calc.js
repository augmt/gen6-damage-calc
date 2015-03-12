function validate(obj, min, max) {
    // use the double tilde (~~) to convert obj.val() to an integer or return 0 if obj.val() is non-numeric
    obj.val(Math.max(min, Math.min(max, ~~obj.val())));
}

// input field validation
var bounds = {
    "level": [0, 100],
    "base": [1, 255],
    "evs": [0, 252],
    "ivs": [0, 31],
    "dvs": [0, 15],
    "move-bp": [0, 999]
};
function attachValidation(clazz, min, max) {
    $("." + clazz).keyup(function () {
        validate($(this), min, max);
    });
}
for (var bounded in bounds) {
    if (bounds.hasOwnProperty(bounded)) {
        attachValidation(bounded, bounds[bounded][0], bounds[bounded][1]);
    }
}

$(".current-hp").keyup(function () {
    var max = $(this).parent().children(".max-hp").text();
    validate($(this), 0, max);
    var current = $(this).val();
    var percent = Math.floor(100 * current / max);
    $(this).parent().find(".percent-hp").val(percent);
});
$(".percent-hp").keyup(function () {
    var max = $(this).parent().children(".max-hp").text();
    validate($(this), 0, 100);
    var percent = $(this).val();
    var current = Math.ceil(percent * max / 100);
    $(this).parent().find(".current-hp").val(current);
});

var gen, pokedex, setdex, typeChart, moves, abilities, items, STATS, calculateAllMoves, calcHP, calcStat;

function calcStats(poke) {
    for (var i = 0; i < STATS.length; i++) {
        calcStat(poke, STATS[i]);
    }
}

// auto-calc stats and current HP on change
$(".level").keyup(function () {
    var poke = $(this).closest(".poke-info");
    calcHP(poke);
    calcStats(poke);
});
$(".nature").bind("keyup change", function () {
    calcStats($(this).closest(".poke-info"));
});
$(".hp .base, .hp .evs, .hp .ivs").bind("keyup change", function () {
    calcHP($(this).closest(".poke-info"));
});
$(".at .base, .at .evs, .at .ivs").bind("keyup change", function () {
    calcStat($(this).closest(".poke-info"), 'at');
});
$(".df .base, .df .evs, .df .ivs").bind("keyup change", function () {
    calcStat($(this).closest(".poke-info"), 'df');
});
$(".sa .base, .sa .evs, .sa .ivs").bind("keyup change", function () {
    calcStat($(this).closest(".poke-info"), 'sa');
});
$(".sd .base, .sd .evs, .sd .ivs").bind("keyup change", function () {
    calcStat($(this).closest(".poke-info"), 'sd');
});
$(".sp .base, .sp .evs, .sp .ivs").bind("keyup change", function () {
    calcStat($(this).closest(".poke-info"), 'sp');
});
$(".sl .base").keyup(function () {
    calcStat($(this).closest(".poke-info"), 'sl');
});

function getHPDVs(poke) {
    return (parseInt(poke.find(".at .dvs").val(), 10) % 2) * 8 +
            (parseInt(poke.find(".df .dvs").val(), 10) % 2) * 4 +
            (parseInt(poke.find(gen === 1 ? ".sl .dvs" : ".sa .dvs").val(), 10) % 2) * 2 +
            (parseInt(poke.find(".sp .dvs").val(), 10) % 2);
}

$(".at .dvs").keyup(function () {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'at');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});
$(".df .dvs").keyup(function () {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'df');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});
$(".sa .dvs").keyup(function () {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'sa');
    poke.find(".sd .dvs").val($(this).val());
    calcStat(poke, 'sd');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});
$(".sp .dvs").keyup(function () {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'sp');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});
$(".sl .dvs").keyup(function () {
    var poke = $(this).closest(".poke-info");
    calcStat(poke, 'sl');
    poke.find(".hp .dvs").val(getHPDVs(poke));
    calcHP(poke);
});

$(".status").bind("keyup change", function () {
    if ($(this).val() === 'Badly Poisoned') {
        $(this).parent().children(".toxic-counter").show();
    } else {
        $(this).parent().children(".toxic-counter").hide();
    }
});

function setHiddenPowerIVs(type, pokeObj) {
    var iv;
    var HPIVs = typeChart[type].HPivs;
    for (iv in HPIVs) {
        if (HPIVs.hasOwnProperty(iv)) {
            pokeObj.find('.' + iv + ' .ivs').val(HPIVs[iv]);
        }
    }
    calcHP(pokeObj);
    calcStats(pokeObj);
}

function setHiddenPowerDVs(type, pokeObj) {
    var dv;
    var HPDVs = typeChart[type].HPivs; // HPivs is not a typo
    for (dv in HPDVs) {
        if (HPDVs.hasOwnProperty(dv)) {
            pokeObj.find('.' + dv + ' .dvs').val(HPDVs[dv] / 2);
        }
    }
    calcHP(pokeObj);
    calcStats(pokeObj);
}

// auto-update move details on select
$(".move-selector").change(function () {
    var moveName = $(this).val();
    var move = moves[moveName] || moves['(No Move)'];
    var moveGroupObj = $(this).parent();
    var pokeObj, selectedMoves, previousMoveName, index, HPType;
    if (gen > 1) {
        pokeObj = $(this).closest('.poke-info');
        selectedMoves = pokeObj.find('.move-selector .select2-chosen')
                        .map(function () { return $(this).text(); })
                        .toArray().join(',');
        previousMoveName = $(this).data('move-name');
        if (moveName.indexOf('Hidden Power') > -1) {
            if (gen !== 2) {
                setHiddenPowerIVs(move.type, pokeObj);
            } else {
                setHiddenPowerDVs(move.type, pokeObj);
            }
        } else if (previousMoveName.indexOf('Hidden Power') > -1) {
            if (selectedMoves.indexOf('Hidden Power') > -1) {
                index = selectedMoves.indexOf('Hidden Power') + 13;
                HPType = selectedMoves.substr(index, selectedMoves.length - index).split(',')[0];
                if (gen !== 2) {
                    setHiddenPowerIVs(HPType, pokeObj);
                } else {
                    setHiddenPowerDVs(HPType, pokeObj);
                }
            } else {
                if (gen !== 2) {
                    setHiddenPowerIVs('Dark', pokeObj);
                } else {
                    setHiddenPowerDVs('Dark', pokeObj);
                }
            }
        }
        $(this).data('move-name', $(this).val());
    }
    moveGroupObj.children(".move-bp").val(move.bp);
    moveGroupObj.children(".move-type").val(move.type);
    moveGroupObj.children(".move-cat").val(move.category);
    moveGroupObj.children(".move-crit").prop("checked", move.alwaysCrit === true);
    if (move.isMultiHit) {
        moveGroupObj.children(".move-hits").show();
        moveGroupObj.children(".move-hits").val($(this).closest(".poke-info").find(".ability").val() === 'Skill Link' ? 5 : 3);
    } else {
        moveGroupObj.children(".move-hits").hide();
    }
});

$(".ability").bind("keyup change", function () {
    $(this).closest(".poke-info").find(".move-hits").val($(this).val() === 'Skill Link' ? 5 : 3);
});

var lastManualWeather = "";
var lastAutoWeather = ["", ""];
function autosetWeather(ability, i) {
    var currentWeather = $("input:radio[name='weather']:checked").val();
    var val, k;
    if (lastAutoWeather.indexOf(currentWeather) === -1) {
        lastManualWeather = currentWeather;
        lastAutoWeather[1 - i] = "";
    }
    var primalWeather = ["Harsh Sun", "Heavy Rain"];
    var autoWeatherAbilities = {
            "Drought": "Sun",
            "Drizzle": "Rain",
            "Sand Stream": "Sand",
            "Snow Warning": "Hail",
            "Desolate Land": "Harsh Sun",
            "Primordial Sea": "Heavy Rain",
            "Delta Stream": "Strong Winds"
        };
    var newWeather;
    if (autoWeatherAbilities[ability]) {
        lastAutoWeather[i] = autoWeatherAbilities[ability];
        if (currentWeather === "Strong Winds") {
            if (lastAutoWeather.indexOf("Strong Winds") === -1) {
                newWeather = lastAutoWeather[i];
            }
        } else if (primalWeather.indexOf(currentWeather) > -1) {
            if (lastAutoWeather[i] === "Strong Winds" || primalWeather.indexOf(lastAutoWeather[i]) > -1) {
                newWeather = lastAutoWeather[i];
            } else if (primalWeather.indexOf(lastAutoWeather[1 - i]) > -1) {
                newWeather = lastAutoWeather[1 - i];
            } else {
                newWeather = lastAutoWeather[i];
            }
        } else {
            newWeather = lastAutoWeather[i];
        }
    } else {
        lastAutoWeather[i] = "";
        newWeather = lastAutoWeather[1 - i] !== "" ? lastAutoWeather[1 - i] : lastManualWeather;
    }
    if (newWeather === "Strong Winds" || primalWeather.indexOf(newWeather) > -1) {
        $("input:radio[name='weather']").prop("disabled", true);
        $("input:radio[name='weather'][value='" + newWeather + "']").prop("disabled", false);
    } else {
        for (k = 0; k < $("input:radio[name='weather']").length; k++) {
            val = $("input:radio[name='weather']")[k].value;
            if (primalWeather.indexOf(val) === -1 && val !== "Strong Winds") {
                $("input:radio[name='weather']")[k].disabled = false;
            } else {
                $("input:radio[name='weather']")[k].disabled = true;
            }
        }
    }
    $("input:radio[name='weather'][value='" + newWeather + "']").prop("checked", true);
}

$("#p1 .ability").bind("keyup change", function () {
    autosetWeather($(this).val(), 0);
});
$("#p2 .ability").bind("keyup change", function () {
    autosetWeather($(this).val(), 1);
});

var lastManualStatus = {"#p1":"Healthy", "#p2":"Healthy"};
var lastAutoStatus = {"#p1":"Healthy", "#p2":"Healthy"};
function autosetStatus(p, item) {
    var currentStatus = $(p + " .status").val();
    if (currentStatus !== lastAutoStatus[p]) {
        lastManualStatus[p] = currentStatus;
    }
    if (item === "Flame Orb") {
        lastAutoStatus[p] = "Burned";
        $(p + " .status").val("Burned");
        $(p + " .status").change();
    } else if (item === "Toxic Orb") {
        lastAutoStatus[p] = "Badly Poisoned";
        $(p + " .status").val("Badly Poisoned");
        $(p + " .status").change();
    } else {
        lastAutoStatus[p] = "Healthy";
        if (currentStatus !== lastManualStatus[p]) {
            $(p + " .status").val(lastManualStatus[p]);
            $(p + " .status").change();
        }
    }
}

$("#p1 .item").bind("keyup change", function () {
    autosetStatus("#p1", $(this).val());
});
$("#p2 .item").bind("keyup change", function () {
    autosetStatus("#p2", $(this).val());
});

$(".forme").change(function () {
    var pokeObj = $(this).closest(".poke-info");
    var altFormeName = $(this).val();
    var altForme = pokedex[altFormeName];
    var fullSetName = $(this).closest('.poke-info').find('.set-selector .select2-chosen').text();
    var pokemonName = fullSetName.substring(0, fullSetName.indexOf(" ("));
    var setName = fullSetName.substring(fullSetName.indexOf("(") + 1, fullSetName.lastIndexOf(")"));
    pokeObj.find(".type1").val(altForme.t1);
    pokeObj.find(".type2").val(altForme.t2);
    pokeObj.find(".weight").val(altForme.w);
    for (var i = 0; i < STATS.length; i++) {
        pokeObj.find("." + STATS[i] + " .base").val(altForme.bs[STATS[i]]);
    }
    calcStats(pokeObj);
    if (abilities.indexOf(altForme.ab) > -1) {
        pokeObj.find(".ability").val(altForme.ab).change();
    } else if (setName !== "Blank Set" && abilities.indexOf(setdex[pokemonName][setName].ability) > -1) {
        pokeObj.find(".ability").val(setdex[pokemonName][setName].ability).change();
    } else {
        pokeObj.find(".ability").val("").change();
    }
    if (altFormeName.indexOf("Mega") === 0 && altFormeName !== "Mega Rayquaza") {
        pokeObj.find(".item").val("").change().prop("disabled", true);
    } else {
        pokeObj.find(".item").prop("disabled", false);
    }
    if (pokemonName === "Darmanitan") {
        pokeObj.find(".percent-hp").val(altFormeName === "Darmanitan-Z" ? "50" : "100").keyup();
    }
});

function getSelectOptions(arr, sort) {
    if (sort) {
        arr.sort();
    }
    var r = '';
    for (var i = 0; i < arr.length; i++) {
        r += '<option value="' + arr[i] + '">' + arr[i] + '</option>';
    }
    return r;
}

function showFormes(formeObj, setName, pokemonName, pokemon) {
    var formeOptions = getSelectOptions(pokemon.formes);
    var set = setdex[pokemonName][setName];
    if (set) {
        if (set.item.indexOf("ite") === -1 && pokemonName !== "Aegislash" &&
                (pokemonName !== "Meloetta" || set.moves.indexOf("Relic Song") === -1) &&
                (pokemonName !== "Rayquaza" || set.moves.indexOf("Dragon Ascent") === -1)) {
            formeOptions = getSelectOptions([pokemon.formes[0]]);
        } else if (set.item.indexOf("X") > -1) {
            formeOptions = getSelectOptions([pokemon.formes[0], pokemon.formes[1]]);
        } else if (set.item.indexOf("Y") > -1) {
            formeOptions = getSelectOptions([pokemon.formes[0], pokemon.formes[2]]);
        }
    }
    formeObj.children("select").find("option").remove().end().append(formeOptions);
    formeObj.show();
}

function setSelectValueIfValid(select, value, fallback) {
    select.val(select.children("option[value='" + value + "']").length !== 0 ? value : fallback);
}

// auto-update set details on select
$(".set-selector").change(function () {
    var fullSetName = $(this).val();
    var pokemonName = fullSetName.substring(0, fullSetName.indexOf(" ("));
    var setName = fullSetName.substring(fullSetName.indexOf("(") + 1, fullSetName.lastIndexOf(")"));
    var pokemon = pokedex[pokemonName];
    var pokeObj, i;
    if (pokemon) {
        pokeObj = $(this).closest(".poke-info");
        var formeObj = pokeObj.find(".forme").parent();
        if (pokemon.formes) {
            showFormes(formeObj, setName, pokemonName, pokemon);
        } else {
            formeObj.hide();
        }
        pokeObj.find(".type1").val(pokemon.t1);
        pokeObj.find(".type2").val(pokemon.t2);
        pokeObj.find(".hp .base").val(pokemon.bs.hp);
        for (i = 0; i < STATS.length; i++) {
            pokeObj.find("." + STATS[i] + " .base").val(pokemon.bs[STATS[i]]);
        }
        pokeObj.find(".weight").val(pokemon.w);
        pokeObj.find(".boost").val(0);
        pokeObj.find(".percent-hp").val(100);
        pokeObj.find(".status").val("Healthy").change();
        var moveObj;
        var abilityObj = pokeObj.find(".ability");
        var itemObj = pokeObj.find(".item");
        if (setdex[pokemonName] && setdex[pokemonName][setName]) {
            var set = setdex[pokemonName][setName];
            pokeObj.find(".level").val(set.level);
            pokeObj.find(".hp .evs").val((set.evs && set.evs.hp) ? set.evs.hp : 0);
            pokeObj.find(".hp .ivs").val((set.ivs && set.ivs.hp) ? set.ivs.hp : 31);
            pokeObj.find(".hp .dvs").val((set.dvs && set.dvs.hp) ? set.dvs.hp : 15);
            for (i = 0; i < STATS.length; i++) {
                pokeObj.find("." + STATS[i] + " .evs").val((set.evs && set.evs[STATS[i]]) ? set.evs[STATS[i]] : 0);
                pokeObj.find("." + STATS[i] + " .ivs").val((set.ivs && set.ivs[STATS[i]]) ? set.ivs[STATS[i]] : 31);
                pokeObj.find("." + STATS[i] + " .dvs").val((set.dvs && set.dvs[STATS[i]]) ? set.dvs[STATS[i]] : 15);
            }
            setSelectValueIfValid(pokeObj.find(".nature"), set.nature, "Hardy");
            setSelectValueIfValid(abilityObj, (pokemon.ab || set.ability), "");
            setSelectValueIfValid(itemObj, set.item, "");
            for (i = 0; i < 4; i++) {
                moveObj = pokeObj.find(".move" + (i + 1) + " select.move-selector");
                setSelectValueIfValid(moveObj, set.moves[i], "(No Move)");
                moveObj.change();
            }
        } else {
            pokeObj.find(".level").val(100);
            pokeObj.find(".hp .evs").val(0);
            pokeObj.find(".hp .ivs").val(31);
            pokeObj.find(".hp .dvs").val(15);
            for (i = 0; i < STATS.length; i++) {
                pokeObj.find("." + STATS[i] + " .evs").val(0);
                pokeObj.find("." + STATS[i] + " .ivs").val(31);
                pokeObj.find("." + STATS[i] + " .dvs").val(15);
            }
            pokeObj.find(".nature").val("Hardy");
            setSelectValueIfValid(abilityObj, pokemon.ab, "");
            itemObj.val("");
            for (i = 0; i < 4; i++) {
                moveObj = pokeObj.find(".move" + (i + 1) + " select.move-selector");
                moveObj.val("(No Move)");
                moveObj.change();
            }
        }
        calcHP(pokeObj);
        calcStats(pokeObj);
        abilityObj.change();
        itemObj.change().prop("disabled", false);
    }
});

function clearField() {
    $("#singles").prop("checked", true);
    $("[name='terrain']").prop("checked", false);
    $("#clear").prop("checked", true);
    $("#gscClear").prop("checked", true);
    $("#gravity").prop("checked", false);
    $("#srL").prop("checked", false);
    $("#srR").prop("checked", false);
    $("#spikesL0").prop("checked", true);
    $("#spikesR0").prop("checked", true);
    $("#gscSpikesL").prop("checked", false);
    $("#gscSpikesR").prop("checked", false);
    $("#reflectL").prop("checked", false);
    $("#reflectR").prop("checked", false);
    $("#lightScreenL").prop("checked", false);
    $("#lightScreenR").prop("checked", false);
    $("#foresightL").prop("checked", false);
    $("#foresightR").prop("checked", false);
    $("#helpingHandL").prop("checked", false);
    $("#helpingHandR").prop("checked", false);
}

function getSetOptions() {
    var pokeNames, index;
    pokeNames = Object.keys(pokedex);
    index = pokeNames.length;
    while (index--) {
        if (pokedex[pokeNames[index]].isAlternateForme) {
            pokeNames.splice(index, 1);
        }
    }
    pokeNames.sort();
    var setOptions = [];
    var pokeName, setNames, setName, j;
    for (var i = 0; i < pokeNames.length; i++) {
        pokeName = pokeNames[i];
        setOptions.push({
            pokemon: pokeName,
            text: pokeName
        });
        if (setdex[pokeName]) {
            setNames = Object.keys(setdex[pokeName]);
            for (j = 0; j < setNames.length; j++) {
                setName = setNames[j];
                setOptions.push({
                    pokemon: pokeName,
                    set: setName,
                    text: pokeName + " (" + setName + ")",
                    id: pokeName + " (" + setName + ")"
                });
            }
        }
        setOptions.push({
            pokemon: pokeName,
            set: "Blank Set",
            text: pokeName + " (Blank Set)",
            id: pokeName + " (Blank Set)"
        });
    }
    return setOptions;
}

$(".gen").change(function () {
    gen = parseInt($(this).val(), 10);
    switch (gen) {
    case 1:
        pokedex = POKEDEX_RBY;
        setdex = SETDEX_RBY;
        typeChart = TYPE_CHART_RBY;
        moves = MOVES_RBY;
        items = [];
        abilities = [];
        STATS = STATS_RBY;
        calculateAllMoves = CALCULATE_ALL_MOVES_RBY;
        calcHP = CALC_HP_RBY;
        calcStat = CALC_STAT_RBY;
        break;
    case 2:
        pokedex = POKEDEX_GSC;
        setdex = SETDEX_GSC;
        typeChart = TYPE_CHART_GSC;
        moves = MOVES_GSC;
        items = ITEMS_GSC;
        abilities = [];
        STATS = STATS_GSC;
        calculateAllMoves = CALCULATE_ALL_MOVES_GSC;
        calcHP = CALC_HP_RBY;
        calcStat = CALC_STAT_RBY;
        break;
    case 3:
        pokedex = POKEDEX_ADV;
        setdex = SETDEX_ADV;
        typeChart = TYPE_CHART_GSC;
        moves = MOVES_ADV;
        items = ITEMS_ADV;
        abilities = ABILITIES_ADV;
        STATS = STATS_GSC;
        calculateAllMoves = CALCULATE_ALL_MOVES_ADV;
        calcHP = CALC_HP_ADV;
        calcStat = CALC_STAT_ADV;
        break;
    case 4:
        pokedex = POKEDEX_DPP;
        setdex = SETDEX_DPP;
        typeChart = TYPE_CHART_GSC;
        moves = MOVES_DPP;
        items = ITEMS_DPP;
        abilities = ABILITIES_DPP;
        STATS = STATS_GSC;
        calculateAllMoves = CALCULATE_ALL_MOVES_DPP;
        calcHP = CALC_HP_ADV;
        calcStat = CALC_STAT_ADV;
        break;
    case 5:
        pokedex = POKEDEX_BW;
        setdex = SETDEX_BW;
        typeChart = TYPE_CHART_GSC;
        moves = MOVES_BW;
        items = ITEMS_BW;
        abilities = ABILITIES_BW;
        STATS = STATS_GSC;
        calculateAllMoves = CALCULATE_ALL_MOVES_BW;
        calcHP = CALC_HP_ADV;
        calcStat = CALC_STAT_ADV;
        break;
    default:
        pokedex = POKEDEX_XY;
        setdex = SETDEX_XY;
        typeChart = TYPE_CHART_XY;
        moves = MOVES_XY;
        items = ITEMS_XY;
        abilities = ABILITIES_XY;
        STATS = STATS_GSC;
        calculateAllMoves = CALCULATE_ALL_MOVES_BW;
        calcHP = CALC_HP_ADV;
        calcStat = CALC_STAT_ADV;
        break;
    }
    clearField();
    $(".gen-specific.g" + gen).show();
    $(".gen-specific").not(".g" + gen).hide();
    var typeOptions = getSelectOptions(Object.keys(typeChart));
    var moveOptions = getSelectOptions(Object.keys(moves), true);
    var abilityOptions = getSelectOptions(abilities, true);
    var itemOptions = getSelectOptions(items, true);
    $("select.type1, select.move-type").find("option").remove().end().append(typeOptions);
    $("select.type2").find("option").remove().end().append("<option value=\"\">(none)</option>" + typeOptions);
    $("select.move-selector").find("option").remove().end().append(moveOptions);
    $("select.ability").find("option").remove().end().append("<option value=\"\">(other)</option>" + abilityOptions);
    $("select.item").find("option").remove().end().append("<option value=\"\">(none)</option>" + itemOptions);
    $(".set-selector").val(getSetOptions()[gen > 3 ? 1 : gen === 1 ? 5 : 3].id);
    $('.move-selector').data('move-name', $('.move-selector').val());
    $(".set-selector").change();
});

function isGrounded(pokeInfo) {
    return $("#gravity").prop("checked") || (pokeInfo.find(".type1").val() !== "Flying" && pokeInfo.find(".type2").val() !== "Flying" &&
            pokeInfo.find(".ability").val() !== "Levitate" && pokeInfo.find(".item").val() !== "Air Balloon");
}

function getTerrainEffects() {
    var className = $(this).prop("className");
    className = className.substring(0, className.indexOf(" "));
    switch (className) {
        case "type1":
        case "type2":
        case "ability":
        case "item":
            var id = $(this).closest(".poke-info").prop("id");
            var terrainValue = $("input:checkbox[name='terrain']:checked").val();
            if (terrainValue === "Electric") {
                $("#" + id).find("[value='Asleep']").prop("disabled", isGrounded($("#" + id)));
            } else if (terrainValue === "Misty") {
                $("#" + id).find(".status").prop("disabled", isGrounded($("#" + id)));
            }
            break;
        default:
            $("input:checkbox[name='terrain']").not(this).prop("checked", false);
            if ($(this).prop("checked") && $(this).val() === "Electric") {
                $("#p1").find("[value='Asleep']").prop("disabled", isGrounded($("#p1")));
                $("#p2").find("[value='Asleep']").prop("disabled", isGrounded($("#p2")));
            } else if ($(this).prop("checked") && $(this).val() === "Misty") {
                $("#p1").find(".status").prop("disabled", isGrounded($("#p1")));
                $("#p2").find(".status").prop("disabled", isGrounded($("#p2")));
            } else {
                $("#p1").find("[value='Asleep']").prop("disabled", false);
                $("#p1").find(".status").prop("disabled", false);
                $("#p2").find("[value='Asleep']").prop("disabled", false);
                $("#p2").find(".status").prop("disabled", false);
            }
            break;
    }
}

var resultLocations = [[], []];
for (var i = 0; i < 4; i++) {
    resultLocations[0].push({
        "move": "#resultMoveL" + (i + 1),
        "damage": "#resultDamageL" + (i + 1)
    });
    resultLocations[1].push({
        "move": "#resultMoveR" + (i + 1),
        "damage": "#resultDamageR" + (i + 1)
    });
}

var damageResults;
function findDamageResult(resultMoveObj) {
    var selector = "#" + resultMoveObj.attr("id");
    var j;
    for (var i = 0; i < resultLocations.length; i++) {
        for (j = 0; j < resultLocations[i].length; j++) {
            if (resultLocations[i][j].move === selector) {
                return damageResults[i][j];
            }
        }
    }
}

$(".result-move").change(function () {
    if (damageResults) {
        var result = findDamageResult($(this));
        if (result) {
            $("#mainResult").text(result.description + ": " + result.damageText + " -- " + result.koChanceText);
            $("#damageValues").text("(" + result.damage.join(", ") + ")");
        }
    }
});

function getMoveDetails(moveInfo) {
    var moveName = moveInfo.find("select.move-selector").val();
    var defaultDetails = moves[moveName];
    return $.extend({}, defaultDetails, {
        name: moveName,
        bp: parseInt(moveInfo.find(".move-bp").val(), 10),
        type: moveInfo.find(".move-type").val(),
        category: moveInfo.find(".move-cat").val(),
        isCrit: moveInfo.find(".move-crit").prop("checked"),
        hits: defaultDetails.isMultiHit ? parseInt(moveInfo.find(".move-hits").val(), 10) : defaultDetails.isTwoHit ? 2 : 1
    });
}

function Pokemon(pokeInfo) {
    var fullSetName = pokeInfo.find("input.set-selector").val();
    var pokemonName = fullSetName.substring(0, fullSetName.indexOf(" ("));
    this.name = !pokedex[pokemonName].formes ? pokemonName : pokeInfo.find(".forme").val();
    this.type1 = pokeInfo.find(".type1").val();
    this.type2 = pokeInfo.find(".type2").val();
    this.level = parseInt(pokeInfo.find(".level").val(), 10);
    this.maxHP = parseInt(pokeInfo.find(".hp .total").text(), 10);
    this.curHP = parseInt(pokeInfo.find(".current-hp").val(), 10);
    this.HPEVs = parseInt(pokeInfo.find(".hp .evs").val(), 10);
    this.rawStats = {};
    this.boosts = {};
    this.stats = {};
    this.evs = {};
    for (var i = 0; i < STATS.length; i++) {
        this.rawStats[STATS[i]] = parseInt(pokeInfo.find("." + STATS[i] + " .total").text(), 10);
        this.boosts[STATS[i]] = parseInt(pokeInfo.find("." + STATS[i] + " .boost").val(), 10);
        this.evs[STATS[i]] = parseInt(pokeInfo.find("." + STATS[i] + " .evs").val(), 10);
    }
    this.nature = pokeInfo.find(".nature").val();
    this.ability = pokeInfo.find(".ability").val();
    this.item = pokeInfo.find(".item").val();
    this.status = pokeInfo.find(".status").val();
    this.toxicCounter = this.status === 'Badly Poisoned' ? parseInt(pokeInfo.find(".toxic-counter").val(), 10) : 0;
    this.moves = [
        getMoveDetails(pokeInfo.find(".move1")),
        getMoveDetails(pokeInfo.find(".move2")),
        getMoveDetails(pokeInfo.find(".move3")),
        getMoveDetails(pokeInfo.find(".move4"))
    ];
    this.weight = +pokeInfo.find(".weight").val();
}

function Side(format, terrain, weather, isGravity, isSR, spikes, isReflect, isLightScreen, isForesight, isHelpingHand) {
    this.format = format;
    this.terrain = terrain;
    this.weather = weather;
    this.isGravity = isGravity;
    this.isSR = isSR;
    this.spikes = spikes;
    this.isReflect = isReflect;
    this.isLightScreen = isLightScreen;
    this.isForesight = isForesight;
    this.isHelpingHand = isHelpingHand;
}

function Field() {
    var format = $("input:radio[name='format']:checked").val();
    var isGravity = $("#gravity").prop("checked");
    var isSR = [$("#srL").prop("checked"), $("#srR").prop("checked")];
    var weather;
    var spikes;
    if (gen === 2) {
        spikes = [$("#gscSpikesL").prop("checked") ? 1 : 0, $("#gscSpikesR").prop("checked") ? 1 : 0];
        weather = $("input:radio[name='gscWeather']:checked").val();
    } else {
        weather = $("input:radio[name='weather']:checked").val();
        spikes = [parseInt($("input:radio[name='spikesL']:checked").val(), 10), parseInt($("input:radio[name='spikesR']:checked").val(), 10)];
    }
    var terrain = $("input:checkbox[name='terrain']:checked").val() || "";
    var isReflect = [$("#reflectL").prop("checked"), $("#reflectR").prop("checked")];
    var isLightScreen = [$("#lightScreenL").prop("checked"), $("#lightScreenR").prop("checked")];
    var isForesight = [$("#foresightL").prop("checked"), $("#foresightR").prop("checked")];
    var isHelpingHand = [$("#helpingHandR").prop("checked"), $("#helpingHandL").prop("checked")]; // affects attacks against opposite side
    this.getWeather = function () {
        return weather;
    };
    this.clearWeather = function () {
        weather = "";
    };
    this.getSide = function (i) {
        return new Side(format, terrain, weather, isGravity, isSR[i], spikes[i], isReflect[i], isLightScreen[i], isForesight[i], isHelpingHand[i]);
    };
}

function calculate() {
    var p1 = new Pokemon($("#p1"));
    var p2 = new Pokemon($("#p2"));
    var field = new Field();
    damageResults = calculateAllMoves(p1, p2, field);
    var result, minDamage, maxDamage, minPercent, maxPercent;
    var highestMaxPercent = -1;
    var bestResult;
    for (var i = 0; i < 4; i++) {
        result = damageResults[0][i];
        minDamage = result.damage[0] * p1.moves[i].hits;
        maxDamage = result.damage[result.damage.length - 1] * p1.moves[i].hits;
        minPercent = Math.floor(minDamage * 1000 / p2.maxHP) / 10;
        maxPercent = Math.floor(maxDamage * 1000 / p2.maxHP) / 10;
        result.damageText = minDamage + "-" + maxDamage + " (" + minPercent + " - " + maxPercent + "%)";
        result.koChanceText = p1.moves[i].bp === 0 ? 'nice move'
                : getKOChanceText(result.damage, p1.moves[i], p2, field.getSide(1), p1.ability === 'Bad Dreams');
        $(resultLocations[0][i].move + " + label").text(p1.moves[i].name.replace("Hidden Power", "HP"));
        $(resultLocations[0][i].damage).text(minPercent + " - " + maxPercent + "%");
        if (maxPercent > highestMaxPercent) {
            highestMaxPercent = maxPercent;
            bestResult = $(resultLocations[0][i].move);
        }
        result = damageResults[1][i];
        minDamage = result.damage[0] * p2.moves[i].hits;
        maxDamage = result.damage[result.damage.length - 1] * p2.moves[i].hits;
        minPercent = Math.floor(minDamage * 1000 / p1.maxHP) / 10;
        maxPercent = Math.floor(maxDamage * 1000 / p1.maxHP) / 10;
        result.damageText = minDamage + "-" + maxDamage + " (" + minPercent + " - " + maxPercent + "%)";
        result.koChanceText = p2.moves[i].bp === 0 ? 'nice move'
                : getKOChanceText(result.damage, p2.moves[i], p1, field.getSide(0), p2.ability === 'Bad Dreams');
        $(resultLocations[1][i].move + " + label").text(p2.moves[i].name.replace("Hidden Power", "HP"));
        $(resultLocations[1][i].damage).text(minPercent + " - " + maxPercent + "%");
        if (maxPercent > highestMaxPercent) {
            highestMaxPercent = maxPercent;
            bestResult = $(resultLocations[1][i].move);
        }
    }
    bestResult.prop("checked", true);
    bestResult.change();
    $("#resultHeaderL").text(p1.name + "'s Moves (select one to show detailed results)");
    $("#resultHeaderR").text(p2.name + "'s Moves (select one to show detailed results)");
}

$(document).ready(function () {
    $("#gen6").prop("checked", true);
    $("#gen6").change();
    $(".terrain-trigger").bind("change keyup", getTerrainEffects);
    $(".calc-trigger").bind("change keyup", calculate);
    $(".set-selector").select2({
        formatResult: function (object) {
            return object.set ? ("&nbsp;&nbsp;&nbsp;" + object.set) : ("<b>" + object.text + "</b>");
        },
        query: function (query) {
            var setOptions = getSetOptions();
            var pageSize = 30;
            var results = [];
            var pokeName;
            for (var i = 0; i < setOptions.length; i++) {
                pokeName = setOptions[i].pokemon.toUpperCase();
                if (!query.term || pokeName.indexOf(query.term.toUpperCase()) === 0) {
                    results.push(setOptions[i]);
                }
            }
            query.callback({
                results: results.slice((query.page - 1) * pageSize, query.page * pageSize),
                more: results.length >= query.page * pageSize
            });
        },
        initSelection: function (element, callback) {
            var data = getSetOptions()[gen > 3 ? 1 : gen === 1 ? 5 : 3];
            callback(data);
        }
    });
    $(".move-selector").select2({
        dropdownAutoWidth: true,
        matcher: function (term, text) {
            // 2nd condition is for Hidden Power
            return text.toUpperCase().indexOf(term.toUpperCase()) === 0 || text.toUpperCase().indexOf(" " + term.toUpperCase()) >= 0;
        }
    });
    $(".set-selector").val(getSetOptions()[gen > 3 ? 1 : gen === 1 ? 5 : 3].id);
    $(".set-selector").change();
});
