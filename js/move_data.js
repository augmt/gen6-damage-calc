var MOVES_RBY = {
    '(No Move)': {
        bp: 0,
        category: 'Physical',
        type: 'Normal'
    },
    'Acid': {
        bp: 40,
        type: 'Poison'
    },
    'Amnesia': {
        bp: 0,
        category: 'Status',
        type: 'Psychic'
    },
    'Bind': {
        bp: 15,
        type: 'Normal'
    },
    'Blizzard': {
        bp: 120,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Ice'
    },
    'Body Slam': {
        bp: 85,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Normal'
    },
    'BubbleBeam': {
        bp: 65,
        type: 'Water'
    },
    'Clamp': {
        bp: 35,
        type: 'Water'
    },
    'Crabhammer': {
        alwaysCrit: true,
        bp: 90,
        category: 'Physical',
        makesContact: true,
        type: 'Water'
    },
    'Dig': {
        bp: 100,
        type: 'Ground'
    },
    'Double Kick': {
        bp: 30,
        category: 'Physical',
        isTwoHit: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Double-Edge': {
        bp: 100,
        category: 'Physical',
        hasRecoil: true,
        makesContact: true,
        type: 'Normal'
    },
    'Drill Peck': {
        bp: 80,
        category: 'Physical',
        makesContact: true,
        type: 'Flying'
    },
    'Earthquake': {
        bp: 100,
        category: 'Physical',
        isSpread: true,
        type: 'Ground'
    },
    'Explosion': {
        bp: 170,
        category: 'Physical',
        isSpread: true,
        type: 'Normal'
    },
    'Fire Blast': {
        bp: 120,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Fire'
    },
    'Fire Punch': {
        bp: 75,
        category: 'Physical',
        hasSecondaryEffect: true,
        isPunch: true,
        makesContact: true,
        type: 'Fire'
    },
    'Fire Spin': {
        bp: 15,
        type: 'Fire'
    },
    'Flamethrower': {
        bp: 95,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Fire'
    },
    'Hi Jump Kick': {
        bp: 85,
        category: 'Physical',
        hasRecoil: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Hydro Pump': {
        bp: 120,
        category: 'Special',
        type: 'Water'
    },
    'Hyper Beam': {
        bp: 150,
        category: 'Special',
        type: 'Normal'
    },
    'Ice Beam': {
        bp: 95,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Ice'
    },
    'Ice Punch': {
        bp: 75,
        category: 'Physical',
        hasSecondaryEffect: true,
        isPunch: true,
        makesContact: true,
        type: 'Ice'
    },
    'Mega Drain': {
        bp: 40,
        type: 'Grass'
    },
    'Night Shade': {
        bp: 100,
        category: 'Special',
        type: 'Ghost'
    },
    'Pin Missile': {
        bp: 14,
        category: 'Physical',
        isMultiHit: true,
        type: 'Bug'
    },
    'Psychic': {
        bp: 90,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Psychic'
    },
    'Quick Attack': {
        bp: 40,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Razor Leaf': {
        alwaysCrit: true,
        bp: 55,
        category: 'Special',
        type: 'Grass'
    },
    'Rock Slide': {
        bp: 75,
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Rock'
    },
    'Seismic Toss': {
        bp: 100,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Selfdestruct': {
        bp: 130,
        category: 'Physical',
        isSpread: true,
        type: 'Normal'
    },
    'Sky Attack': {
        bp: 140,
        category: 'Physical',
        hasSecondaryEffect: true,
        type: 'Flying'
    },
    'Slash': {
        alwaysCrit: true,
        bp: 70,
        type: 'Normal'
    },
    'Sludge': {
        bp: 65,
        type: 'Poison'
    },
    'Submission': {
        bp: 80,
        type: 'Fighting'
    },
    'Surf': {
        bp: 95,
        category: 'Special',
        isSpread: true,
        type: 'Water'
    },
    'Tackle': {
        bp: 35,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Thunder': {
        bp: 120,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Electric'
    },
    'ThunderPunch': {
        bp: 75,
        category: 'Physical',
        hasSecondaryEffect: true,
        isPunch: true,
        makesContact: true,
        type: 'Electric'
    },
    'Thunderbolt': {
        bp: 95,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Electric'
    },
    'Twineedle': {
        bp: 25,
        isTwoHit: true,
        type: 'Bug'
    },
    'Wrap': {
        bp: 15,
        type: 'Normal'
    }
};

var MOVES_GSC = $.extend(true, {}, MOVES_RBY, {
    'Aeroblast': {
        bp: 100,
        category: 'Special',
        type: 'Flying'
    },
    'AncientPower': {
        bp: 60,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Rock'
    },
    'Belly Drum': {
        bp: 0,
        category: 'Status',
        type: 'Normal'
    },
    'Bite': {
        bp: 60,
        category: 'Physical',
        hasSecondaryEffect: true,
        isBite: true,
        makesContact: true,
        type: 'Dark'
    },
    'Crabhammer': { alwaysCrit: false },
    'Cross Chop': {
        bp: 100,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Crunch': {
        bp: 80,
        category: 'Physical',
        hasSecondaryEffect: true,
        isBite: true,
        makesContact: true,
        type: 'Dark'
    },
    'Double-Edge': { bp: 120 },
    'DynamicPunch': {
        bp: 100,
        category: 'Physical',
        hasSecondaryEffect: true,
        isPunch: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Explosion': { bp: 250 },
    'ExtremeSpeed': {
        bp: 80,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Faint Attack': {
        bp: 60,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Flail': {
        bp: 1,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Flame Wheel': {
        bp: 60,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Fire'
    },
    'Frustration': {
        bp: 102,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Giga Drain': {
        bp: 60,
        category: 'Special',
        type: 'Grass'
    },
    'Headbutt': {
        bp: 70,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Normal'
    },
    'Hidden Power Bug': {
        bp: 70,
        category: 'Special',
        type: 'Bug'
    },
    'Hidden Power Dark': {
        bp: 70,
        category: 'Special',
        type: 'Dark'
    },
    'Hidden Power Dragon': {
        bp: 70,
        category: 'Special',
        type: 'Dragon'
    },
    'Hidden Power Electric': {
        bp: 70,
        category: 'Special',
        type: 'Electric'
    },
    'Hidden Power Fighting': {
        bp: 70,
        category: 'Special',
        type: 'Fighting'
    },
    'Hidden Power Fire': {
        bp: 70,
        category: 'Special',
        type: 'Fire'
    },
    'Hidden Power Flying': {
        bp: 70,
        category: 'Special',
        type: 'Flying'
    },
    'Hidden Power Ghost': {
        bp: 70,
        category: 'Special',
        type: 'Ghost'
    },
    'Hidden Power Grass': {
        bp: 70,
        category: 'Special',
        type: 'Grass'
    },
    'Hidden Power Ground': {
        bp: 70,
        category: 'Special',
        type: 'Ground'
    },
    'Hidden Power Ice': {
        bp: 70,
        category: 'Special',
        type: 'Ice'
    },
    'Hidden Power Poison': {
        bp: 70,
        category: 'Special',
        type: 'Poison'
    },
    'Hidden Power Psychic': {
        bp: 70,
        category: 'Special',
        type: 'Psychic'
    },
    'Hidden Power Rock': {
        bp: 70,
        category: 'Special',
        type: 'Rock'
    },
    'Hidden Power Steel': {
        bp: 70,
        category: 'Special',
        type: 'Steel'
    },
    'Hidden Power Water': {
        bp: 70,
        category: 'Special',
        type: 'Water'
    },
    'Icy Wind': {
        bp: 55,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Ice'
    },
    'Iron Tail': {
        bp: 100,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Steel'
    },
    'Mach Punch': {
        bp: 40,
        category: 'Physical',
        isPunch: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Megahorn': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Bug'
    },
    'Pursuit': {
        bp: 40,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Rapid Spin': {
        bp: 20,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Razor Leaf': { alwaysCrit: false },
    'Return': {
        bp: 102,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Reversal': {
        bp: 1,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Sacred Fire': {
        bp: 100,
        category: 'Physical',
        hasSecondaryEffect: true,
        type: 'Fire'
    },
    'Selfdestruct': { bp: 200 },
    'Shadow Ball': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        type: 'Ghost'
    },
    'Sludge Bomb': {
        bp: 90,
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        type: 'Poison'
    },
    'SolarBeam': {
        bp: 120,
        category: 'Special',
        type: 'Grass'
    },
    'Steel Wing': {
        bp: 70,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Steel'
    },
    'Thief': {
        bp: 40,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Zap Cannon': {
        bp: 100,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Electric'
    }
});

delete MOVES_GSC['Acid'];
delete MOVES_GSC['Bind'];
delete MOVES_GSC['Clamp'];
delete MOVES_GSC['Dig'];
delete MOVES_GSC['Fire Spin'];
delete MOVES_GSC['Mega Drain'];
delete MOVES_GSC['Slash'];
delete MOVES_GSC['Sludge'];
delete MOVES_GSC['Wrap'];

var MOVES_ADV = $.extend(true, {}, MOVES_GSC, {
    'Aerial Ace': {
        bp: 60,
        category: 'Physical',
        makesContact: true,
        type: 'Flying'
    },
    'Air Cutter': {
        bp: 55,
        category: 'Special',
        isSpread: true,
        type: 'Flying'
    },
    'Blaze Kick': {
        bp: 85,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Fire'
    },
    'Bonemerang': {
        bp: 50,
        category: 'Physical',
        isTwoHit: true,
        type: 'Ground'
    },
    'Bounce': {
        bp: 85,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Flying'
    },
    'Brick Break': {
        bp: 75,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Doom Desire': {
        bp: 120,
        category: 'Special',
        type: 'Steel'
    },
    'Dragon Claw': {
        bp: 80,
        category: 'Physical',
        makesContact: true,
        type: 'Dragon'
    },
    'Eruption': {
        bp: 150,
        category: 'Special',
        isSpread: true,
        type: 'Fire'
    },
    'Extrasensory': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Psychic'
    },
    'Facade': {
        bp: 70,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Fake Out': {
        bp: 40,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Normal'
    },
    'Focus Punch': {
        bp: 150,
        category: 'Physical',
        isPunch: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Heat Wave': {
        bp: 100,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Fire'
    },
    'Knock Off': {
        bp: 20,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Leaf Blade': {
        bp: 70,
        category: 'Physical',
        makesContact: true,
        type: 'Grass'
    },
    'Low Kick': {
        bp: 1,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Meteor Mash': {
        bp: 100,
        category: 'Physical',
        hasSecondaryEffect: true,
        isPunch: true,
        makesContact: true,
        type: 'Steel'
    },
    'Muddy Water': {
        bp: 95,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Water'
    },
    'Overheat': {
        bp: 140,
        category: 'Special',
        type: 'Fire',
        modifies: 'sa'
    },
    'Poison Fang': {
        bp: 50,
        category: 'Physical',
        hasSecondaryEffect: true,
        isBite: true,
        makesContact: true,
        type: 'Poison'
    },
    'Psycho Boost': {
        bp: 140,
        category: 'Special',
        type: 'Psychic',
        modifies: 'sa'
    },
    'Revenge': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Rock Blast': {
        bp: 25,
        category: 'Physical',
        isMultiHit: true,
        type: 'Rock'
    },
    'Rock Tomb': {
        bp: 50,
        category: 'Physical',
        hasSecondaryEffect: true,
        type: 'Rock'
    },
    'Shadow Punch': {
        bp: 60,
        category: 'Physical',
        isPunch: true,
        makesContact: true,
        type: 'Ghost'
    },
    'Shock Wave': {
        bp: 60,
        category: 'Special',
        type: 'Electric'
    },
    'Signal Beam': {
        bp: 75,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Bug'
    },
    'Sky Uppercut': {
        bp: 85,
        category: 'Physical',
        isPunch: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Spark': {
        bp: 65,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Electric'
    },
    'Superpower': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting',
        modifies: 'at'
    },
    'Volt Tackle': {
        bp: 120,
        category: 'Physical',
        hasRecoil: true,
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Electric'
    },
    'Water Pulse': {
        bp: 60,
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true,
        type: 'Water'
    },
    'Water Spout': {
        bp: 150,
        category: 'Special',
        isSpread: true,
        type: 'Water'
    },
    'Weather Ball': {
        bp: 50,
        category: 'Special',
        isBullet: true,
        type: 'Normal'
    }
});

delete MOVES_ADV['BubbleBeam'];
delete MOVES_ADV['Submission'];

var MOVES_DPP = $.extend(true, {}, MOVES_ADV, {
    'Air Slash': {
        bp: 75,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Flying'
    },
    'Aqua Jet': {
        bp: 40,
        category: 'Physical',
        makesContact: true,
        type: 'Water'
    },
    'Aqua Tail': {
        bp: 90,
        category: 'Physical',
        makesContact: true,
        type: 'Water'
    },
    'Assurance': {
        bp: 50,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Aura Sphere': {
        bp: 90,
        category: 'Special',
        isBullet: true,
        isPulse: true,
        type: 'Fighting'
    },
    'Avalanche': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Ice'
    },
    'Brave Bird': {
        bp: 120,
        category: 'Physical',
        hasRecoil: true,
        makesContact: true,
        type: 'Flying'
    },
    'Bug Bite': {
        bp: 60,
        category: 'Physical',
        makesContact: true,
        type: 'Bug'
    },
    'Bug Buzz': {
        bp: 90,
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        type: 'Bug'
    },
    'Bullet Punch': {
        bp: 40,
        category: 'Physical',
        isPunch: true,
        makesContact: true,
        type: 'Steel'
    },
    'Charge Beam': {
        bp: 50,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Electric'
    },
    'Chatter': {
        bp: 60,
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        type: 'Flying'
    },
    'Close Combat': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Cross Poison': {
        bp: 70,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Poison'
    },
    'Dark Pulse': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        isPulse: true,
        type: 'Dark'
    },
    'Discharge': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Electric'
    },
    'Double Hit': {
        bp: 35,
        category: 'Physical',
        isTwoHit: true,
        makesContact: true,
        type: 'Normal'
    },
    'Draco Meteor': {
        bp: 140,
        category: 'Special',
        type: 'Dragon',
        modifies: 'sa'
    },
    'Dragon Pulse': {
        bp: 90,
        category: 'Special',
        isPulse: true,
        type: 'Dragon'
    },
    'Dragon Rush': {
        bp: 100,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Dragon'
    },
    'Drain Punch': {
        bp: 60,
        category: 'Physical',
        isPunch: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Earth Power': {
        bp: 90,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Ground'
    },
    'Energy Ball': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        type: 'Grass'
    },
    'Fire Fang': {
        bp: 65,
        category: 'Physical',
        hasSecondaryEffect: true,
        isBite: true,
        makesContact: true,
        type: 'Fire'
    },
    'Flare Blitz': {
        bp: 120,
        category: 'Physical',
        hasRecoil: true,
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Fire'
    },
    'Flash Cannon': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Steel'
    },
    'Fling': {
        bp: 1,
        category: 'Physical',
        type: 'Dark'
    },
    'Focus Blast': {
        bp: 120,
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        type: 'Fighting'
    },
    'Force Palm': {
        bp: 60,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Giga Impact': {
        bp: 150,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Grass Knot': {
        bp: 1,
        category: 'Special',
        makesContact: true,
        type: 'Grass'
    },
    'Gunk Shot': {
        bp: 120,
        category: 'Physical',
        hasSecondaryEffect: true,
        type: 'Poison'
    },
    'Gyro Ball': {
        bp: 1,
        category: 'Physical',
        isBullet: true,
        makesContact: true,
        type: 'Steel'
    },
    'Hammer Arm': {
        bp: 100,
        category: 'Physical',
        isPunch: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Head Smash': {
        bp: 150,
        category: 'Physical',
        hasRecoil: true,
        makesContact: true,
        type: 'Rock'
    },
    'Hi Jump Kick': { bp: 100 },
    'Hyper Voice': {
        bp: 90,
        category: 'Special',
        isSound: true,
        isSpread: true,
        type: 'Normal'
    },
    'Ice Fang': {
        bp: 65,
        category: 'Physical',
        hasSecondaryEffect: true,
        isBite: true,
        makesContact: true,
        type: 'Ice'
    },
    'Ice Shard': {
        bp: 40,
        category: 'Physical',
        type: 'Ice'
    },
    'Iron Head': {
        bp: 80,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Steel'
    },
    'Judgment': {
        bp: 100,
        category: 'Special',
        type: 'Normal'
    },
    'Jump Kick': {
        bp: 85,
        category: 'Physical',
        hasRecoil: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Last Resort': {
        bp: 130,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Lava Plume': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Fire'
    },
    'Leaf Blade': { bp: 90 },
    'Leaf Storm': {
        bp: 140,
        category: 'Special',
        type: 'Grass',
        modifies: 'sa'
    },
    'Magma Storm': {
        bp: 120,
        category: 'Special',
        type: 'Fire'
    },
    'Natural Gift': {
        bp: 1,
        category: 'Physical',
        type: 'Normal'
    },
    'Nature Power': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Normal'
    },
    'Night Slash': {
        bp: 70,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Outrage': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Dragon'
    },
    'Payback': {
        bp: 50,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Pluck': {
        bp: 60,
        category: 'Physical',
        makesContact: true,
        type: 'Flying'
    },
    'Poison Jab': {
        bp: 80,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Poison'
    },
    'Power Gem': {
        bp: 70,
        category: 'Special',
        type: 'Rock'
    },
    'Power Whip': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Grass'
    },
    'Psycho Cut': {
        bp: 70,
        category: 'Physical',
        type: 'Psychic'
    },
    'Punishment': {
        bp: 60,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Rock Climb': {
        bp: 90,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Normal'
    },
    'Rock Smash': {
        bp: 40,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Seed Bomb': {
        bp: 80,
        category: 'Physical',
        isBullet: true,
        type: 'Grass'
    },
    'Seed Flare': {
        bp: 120,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Grass'
    },
    'Shadow Claw': {
        bp: 70,
        category: 'Physical',
        makesContact: true,
        type: 'Ghost'
    },
    'Shadow Force': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Ghost'
    },
    'Shadow Sneak': {
        bp: 40,
        category: 'Physical',
        makesContact: true,
        type: 'Ghost'
    },
    'Spacial Rend': {
        bp: 100,
        category: 'Special',
        type: 'Dragon'
    },
    'Stone Edge': {
        bp: 100,
        category: 'Physical',
        type: 'Rock'
    },
    'Sucker Punch': {
        bp: 80,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Swift': {
        bp: 60,
        category: 'Special',
        isSpread: true,
        type: 'Normal'
    },
    'Thunder Fang': {
        bp: 65,
        category: 'Physical',
        hasSecondaryEffect: true,
        isBite: true,
        makesContact: true,
        type: 'Electric'
    },
    'Tri Attack': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Normal'
    },
    'Trick Room': {
        bp: 0,
        category: 'Status',
        type: 'Psychic'
    },
    'U-turn': {
        bp: 70,
        category: 'Physical',
        makesContact: true,
        type: 'Bug'
    },
    'Vacuum Wave': {
        bp: 40,
        category: 'Special',
        type: 'Fighting'
    },
    'Wake-Up Slap': {
        bp: 60,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Waterfall': {
        bp: 80,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Water'
    },
    'Wood Hammer': {
        bp: 120,
        category: 'Physical',
        hasRecoil: true,
        makesContact: true,
        type: 'Grass'
    },
    'X-Scissor': {
        bp: 80,
        category: 'Physical',
        makesContact: true,
        type: 'Bug'
    },
    'Zen Headbutt': {
        bp: 80,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Psychic'
    }
});

delete MOVES_DPP['Razor Leaf'];
delete MOVES_DPP['Twineedle'];
delete MOVES_DPP['Zap Cannon'];

var MOVES_BW = $.extend(true, {}, MOVES_DPP, {
    'Acid Spray': {
        bp: 40,
        category: 'Special',
        hasSecondaryEffect: true,
        isBullet: true,
        type: 'Poison',
        modifies: 'sd'
    },
    'Acrobatics': {
        bp: 55,
        category: 'Physical',
        makesContact: true,
        type: 'Flying'
    },
    'Attack Order': {
        bp: 90,
        category: 'Physical',
        type: 'Bug'
    },
    'Blue Flare': {
        bp: 130,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Fire'
    },
    'Bolt Strike': {
        bp: 130,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Electric'
    },
    'Bulldoze': {
        bp: 60,
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Ground'
    },
    'Bullet Seed': {
        bp: 25,
        category: 'Physical',
        isBullet: true,
        isMultiHit: true,
        type: 'Grass'
    },
    'Circle Throw': {
        bp: 60,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Clear Smog': {
        bp: 50,
        category: 'Special',
        type: 'Poison'
    },
    'Doom Desire': { bp: 140 },
    'Dragon Tail': {
        bp: 60,
        category: 'Physical',
        makesContact: true,
        type: 'Dragon'
    },
    'Drain Punch': { bp: 75 },
    'Drill Run': {
        bp: 80,
        category: 'Physical',
        makesContact: true,
        type: 'Ground'
    },
    'Dual Chop': {
        bp: 40,
        category: 'Physical',
        isTwoHit: true,
        makesContact: true,
        type: 'Dragon'
    },
    'Electro Ball': {
        bp: 1,
        category: 'Special',
        isBullet: true,
        type: 'Electric'
    },
    'Feint': {
        bp: 30,
        category: 'Physical',
        type: 'Normal'
    },
    'Fiery Dance': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Fire'
    },
    'Flame Charge': {
        bp: 50,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Fire'
    },
    'Foul Play': {
        bp: 95,
        category: 'Physical',
        makesContact: true,
        type: 'Dark'
    },
    'Freeze Shock': {
        bp: 140,
        category: 'Physical',
        hasSecondaryEffect: true,
        type: 'Ice'
    },
    'Frost Breath': {
        alwaysCrit: true,
        bp: 40,
        category: 'Special',
        type: 'Ice'
    },
    'Fusion Bolt': {
        bp: 100,
        category: 'Physical',
        type: 'Electric'
    },
    'Fusion Flare': {
        bp: 100,
        category: 'Special',
        type: 'Fire'
    },
    'Gear Grind': {
        bp: 50,
        category: 'Physical',
        isTwoHit: true,
        type: 'Steel'
    },
    'Giga Drain': { bp: 75 },
    'Glaciate': {
        bp: 65,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Ice'
    },
    'Head Charge': {
        bp: 120,
        category: 'Physical',
        hasRecoil: true,
        makesContact: true,
        type: 'Normal'
    },
    'Heavy Slam': {
        bp: 1,
        category: 'Physical',
        makesContact: true,
        type: 'Steel'
    },
    'Hex': {
        bp: 50,
        category: 'Special',
        type: 'Ghost'
    },
    'Hi Jump Kick': { bp: 130 },
    'Horn Leech': {
        bp: 75,
        category: 'Physical',
        makesContact: true,
        type: 'Grass'
    },
    'Hurricane': {
        bp: 120,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Flying'
    },
    'Icicle Crash': {
        bp: 85,
        category: 'Physical',
        hasSecondaryEffect: true,
        type: 'Ice'
    },
    'Icicle Spear': {
        bp: 25,
        category: 'Physical',
        isMultiHit: true,
        type: 'Ice'
    },
    'Incinerate': {
        bp: 30,
        category: 'Special',
        isSpread: true,
        type: 'Fire'
    },
    'Jump Kick': { bp: 100 },
    'Last Resort': { bp: 140 },
    'Low Sweep': {
        bp: 60,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Nature Power': {
        bp: 100,
        category: 'Physical',
        hasSecondaryEffect: false,
        isSpread: true,
        type: 'Ground'
    },
    'Night Daze': {
        bp: 85,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Dark'
    },
    'Petal Dance': {
        bp: 120,
        category: 'Special',
        makesContact: true,
        type: 'Grass'
    },
    'Psyshock': {
        bp: 80,
        category: 'Special',
        dealsPhysicalDamage: true,
        type: 'Psychic'
    },
    'Psystrike': {
        bp: 100,
        category: 'Special',
        dealsPhysicalDamage: true,
        type: 'Psychic'
    },
    'Razor Shell': {
        bp: 75,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Water'
    },
    'Relic Song': {
        bp: 75,
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true,
        type: 'Normal'
    },
    'Retaliate': {
        bp: 70,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'Sacred Sword': {
        bp: 90,
        category: 'Physical',
        ignoresDefenseBoosts: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Scald': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Water'
    },
    'Searing Shot': {
        bp: 100,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Fire'
    },
    'Secret Sword': {
        bp: 85,
        category: 'Special',
        dealsPhysicalDamage: true,
        type: 'Fighting'
    },
    'Sludge Wave': {
        bp: 95,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Poison'
    },
    'Smack Down': {
        bp: 50,
        category: 'Physical',
        type: 'Rock'
    },
    'Snarl': {
        bp: 55,
        category: 'Special',
        hasSecondaryEffect: true,
        isSound: true,
        isSpread: true,
        type: 'Dark'
    },
    'Stored Power': {
        bp: 20,
        category: 'Special',
        type: 'Psychic'
    },
    'Storm Throw': {
        alwaysCrit: true,
        bp: 40,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Tackle': { bp: 50 },
    'Tail Slap': {
        bp: 25,
        category: 'Physical',
        isMultiHit: true,
        makesContact: true,
        type: 'Normal'
    },
    'Thrash': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Normal'
    },
    'V-create': {
        bp: 180,
        category: 'Physical',
        makesContact: true,
        type: 'Fire'
    },
    'Volt Switch': {
        bp: 70,
        category: 'Special',
        type: 'Electric'
    },
    'Wild Charge': {
        bp: 90,
        category: 'Physical',
        hasRecoil: true,
        makesContact: true,
        type: 'Electric'
    }
});

var MOVES_XY = $.extend(true, {}, MOVES_BW, {
    'Air Cutter': { bp: 60 },
    'Arm Thrust': {
        bp: 15,
        category: 'Physical',
        isMultiHit: true,
        makesContact: true,
        type: 'Fighting'
    },
    'Assurance': { bp: 60 },
    'Aura Sphere': { bp: 80 },
    'Blizzard': { bp: 110 },
    'Boomburst': {
        bp: 140,
        category: 'Special',
        isSound: true,
        isSpread: true,
        type: 'Normal'
    },
    'Chatter': { bp: 65 },
    'Crabhammer': { bp: 100 },
    'Dazzling Gleam': {
        bp: 80,
        category: 'Special',
        isSpread: true,
        type: 'Fairy'
    },
    'Diamond Storm': {
        bp: 100,
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true,
        type: 'Rock'
    },
    'Draco Meteor': { bp: 130 },
    'Dragon Ascent': {
        bp: 120,
        category: 'Physical',
        makesContact: true,
        type: 'Flying'
    },
    'Dragon Pulse': { bp: 85 },
    'Energy Ball': { bp: 90 },
    'Facade': { ignoresBurn: true },
    'Fire Blast': { bp: 110 },
    'Flamethrower': { bp: 90 },
    'Flying Press': {
        bp: 80,
        category: 'Physical',
        makesContact: true,
        type: 'Fighting'
    },
    'Freeze-Dry': {
        bp: 70,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Ice'
    },
    'Frost Breath': { bp: 60 },
    'Geomancy': {
        bp: 0,
        category: 'Status',
        type: 'Fairy'
    },
    'Heat Wave': { bp: 95 },
    'Hex': { bp: 65 },
    'Hidden Power Bug': { bp: 60 },
    'Hidden Power Dark': { bp: 60 },
    'Hidden Power Dragon': { bp: 60 },
    'Hidden Power Electric': { bp: 60 },
    'Hidden Power Fighting': { bp: 60 },
    'Hidden Power Fire': { bp: 60 },
    'Hidden Power Flying': { bp: 60 },
    'Hidden Power Ghost': { bp: 60 },
    'Hidden Power Grass': { bp: 60 },
    'Hidden Power Ground': { bp: 60 },
    'Hidden Power Ice': { bp: 60 },
    'Hidden Power Poison': { bp: 60 },
    'Hidden Power Psychic': { bp: 60 },
    'Hidden Power Rock': { bp: 60 },
    'Hidden Power Steel': { bp: 60 },
    'Hidden Power Water': { bp: 60 },
    'Hurricane': { bp: 110 },
    'Hydro Pump': { bp: 110 },
    'Hyperspace Fury': {
        bp: 100,
        category: 'Physical',
        type: 'Dark'
    },
    'Hyperspace Hole': {
        bp: 80,
        category: 'Special',
        type: 'Psychic'
    },
    'Ice Beam': { bp: 90 },
    'Incinerate': { bp: 60 },
    'Knock Off': { bp: 65 },
    'Land\'s Wrath': {
        bp: 90,
        category: 'Physical',
        isSpread: true,
        type: 'Ground'
    },
    'Leaf Storm': { bp: 130 },
    'Light of Ruin': {
        bp: 140,
        category: 'Special',
        hasRecoil: true,
        type: 'Fairy'
    },
    'Low Sweep': { bp: 65 },
    'Magma Storm': { bp: 100 },
    'Meteor Mash': { bp: 90 },
    'Moonblast': {
        bp: 95,
        category: 'Special',
        hasSecondaryEffect: true,
        type: 'Fairy'
    },
    'Muddy Water': { bp: 90 },
    'Nature Power': {
        bp: 80,
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: false,
        type: 'Normal'
    },
    'Oblivion Wing': {
        bp: 80,
        category: 'Special',
        type: 'Flying'
    },
    'Origin Pulse': {
        bp: 110,
        category: 'Special',
        isSpread: true,
        type: 'Water'
    },
    'Overheat': { bp: 130 },
    'Phantom Force': {
        bp: 90,
        category: 'Physical',
        makesContact: true,
        type: 'Ghost'
    },
    'Pin Missile': { bp: 25 },
    'Play Rough': {
        bp: 90,
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        type: 'Fairy'
    },
    'Power Gem': { bp: 80 },
    'Power-Up Punch': {
        bp: 40,
        category: 'Physical',
        hasSecondaryEffect: true,
        isPunch: true,
        makesContact: true,
        type: 'Fighting',
        modifies: 'at'
    },
    'Precipice Blades': {
        bp: 120,
        category: 'Physical',
        isSpread: 'true',
        type: 'Ground'
    },
    'Rock Tomb': { bp: 60 },
    'Storm Throw': { bp: 60 },
    'Surf': { bp: 90 },
    'Thief': { bp: 60 },
    'Thunder': { bp: 110 },
    'Thunderbolt': { bp: 90 },
    'Wake-Up Slap': { bp: 70 },
    'Water Shuriken': {
        bp: 15,
        category: 'Physical',
        isMultiHit: true,
        type: 'Water'
    }
});

MOVES_XY['Ancient Power'] = MOVES_XY['AncientPower'];
MOVES_XY['Dynamic Punch'] = MOVES_XY['DynamicPunch'];
MOVES_XY['Extreme Speed'] = MOVES_XY['ExtremeSpeed'];
MOVES_XY['Feint Attack'] = MOVES_XY['Faint Attack'];
MOVES_XY['High Jump Kick'] = MOVES_XY['Hi Jump Kick'];
MOVES_XY['Self-Destruct'] = MOVES_XY['Selfdestruct'];
MOVES_XY['Solar Beam'] = MOVES_XY['SolarBeam'];
MOVES_XY['Thunder Punch'] = MOVES_XY['ThunderPunch'];
delete MOVES_XY['AncientPower'];
delete MOVES_XY['DynamicPunch'];
delete MOVES_XY['ExtremeSpeed'];
delete MOVES_XY['Faint Attack'];
delete MOVES_XY['Hi Jump Kick'];
delete MOVES_XY['Selfdestruct'];
delete MOVES_XY['SolarBeam'];
delete MOVES_XY['ThunderPunch'];
