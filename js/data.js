// Verano Nights — game data.
// Verano, its regions, characters, vehicles, radio and missions are all original
// fiction written for this game.
'use strict';

const VERANO = {
  info: {
    title: 'Verano Nights',
    state: 'Verano — a Gulf state of neon, swamp and sugar money',
    capital: 'Costa Mira',
    population: '11.4 million, give or take the season',
    motto: 'Fortune Favors the Reckless',
    history: [
      '1923 — Costa Mira is dredged out of the mangroves with railroad money.',
      '1961 — The ocean highway finally reaches the last of the Mira Cays.',
      '1978 — Sugar builds Cane Hollow. The refineries have not closed since.',
      '1994 — Port Calloway\'s resorts go bust and the docks take the town over.',
      'Today — Everyone in Verano is running something.',
    ],
    supporting: [
      ['Teddy Vance', 'Dean\'s friend. Spends his time listening in on Coast Guard radio chatter.'],
      ['Ray Mondego', 'A Costa Mira local who runs a strip club and a recording studio.'],
      ['Marcus Vale', 'A music manager who signs talent to Ray\'s label.'],
      ['Twin Fates', 'A rap duo making a name for themselves.'],
      ['Hector Salas', 'A veteran bank robber who is always planning the next score.'],
      ['Denny Kroll', 'An old-school smuggler who rents Dean a place in the Cays.'],
    ],
  },

  characters: {
    marisol: {
      id: 'marisol', name: 'Marisol Reyes', short: 'Marisol', color: '#e8457a', skin: '#c68a5e', hair: '#1b1210',
      bio: 'Just out of the Verano State Penitentiary. Her father taught her to fight from the moment she could walk, and she wants the good life her mother dreamed of.',
    },
    dean: {
      id: 'dean', name: 'Dean Walker', short: 'Dean', color: '#2fa3d6', skin: '#e0b48f', hair: '#5b3b22',
      bio: 'Grew up around grifters and crooks. After a stint in the Army he ended up in the Cays doing jobs for local drug runners. Maybe Marisol is his way out.',
    },
  },

  // Region rectangles in tiles: [x0, y0, x1, y1]
  regions: [
    { id: 'mira', name: 'Costa Mira', rect: [168, 0, 256, 200], desc: 'Miami-inspired city of neon, beaches, nightlife and new money.', color: '#ff4fa3' },
    { id: 'cays', name: 'Mira Cays', rect: [100, 204, 256, 256], desc: 'A chain of islands linked by a long ocean highway. Boats, bars and smugglers.', color: '#39d0c8' },
    { id: 'sawgrass', name: 'Sawgrass Basin', rect: [84, 96, 168, 204], desc: 'Swampland wilderness of airboats, alligators and back-road dealers.', color: '#7bb84a' },
    { id: 'calloway', name: 'Port Calloway', rect: [0, 0, 84, 90], desc: 'A faded resort town on the Gulf coast, now a port full of dockworkers.', color: '#f0a040' },
    { id: 'cane', name: 'Cane Hollow', rect: [84, 0, 168, 96], desc: 'Industrial heartland built on sugar refineries and farmland. Home of the Verano State Penitentiary.', color: '#d6c04a' },
    { id: 'tamarind', name: 'Tamarind Ridge National Park', rect: [0, 90, 84, 204], desc: 'Forest trails, rivers and campgrounds in the rural north.', color: '#3e9a5a' },
  ],

  vehicles: {
    sedan:   { name: 'Corbin',      maxSpeed: 330, accel: 260, brake: 520, turn: 2.6, grip: 7,  w: 18, l: 38, hp: 900,  colors: ['#c9c9c9', '#3a5fa0', '#7a2a2a', '#2d2d2d', '#e3e0d4'] },
    compact: { name: 'Pico',       maxSpeed: 300, accel: 280, brake: 520, turn: 3.0, grip: 8,  w: 16, l: 30, hp: 700,  colors: ['#f2c94c', '#56ccf2', '#eb5757', '#6fcf97'] },
    sports:  { name: 'Vextra',      maxSpeed: 470, accel: 380, brake: 640, turn: 2.8, grip: 6,  w: 18, l: 38, hp: 800,  colors: ['#ff2e88', '#00c2c7', '#ffb300', '#ffffff'] },
    super:   { name: 'Aurelio',     maxSpeed: 540, accel: 460, brake: 700, turn: 2.9, grip: 6.5, w: 19, l: 40, hp: 800, colors: ['#ff5a1f', '#f5f5f5'] },
    muscle:  { name: 'Caldera',    maxSpeed: 430, accel: 360, brake: 520, turn: 2.4, grip: 4.5, w: 19, l: 40, hp: 1000, colors: ['#111111', '#8b1e1e', '#e8a33d'] },
    suv:     { name: 'Vantor',       maxSpeed: 340, accel: 270, brake: 520, turn: 2.3, grip: 7,  w: 21, l: 42, hp: 1300, colors: ['#1d1d1d', '#e6e6e6', '#2b3a55'] },
    pickup:  { name: 'Palomino',        maxSpeed: 320, accel: 250, brake: 480, turn: 2.3, grip: 6,  w: 21, l: 44, hp: 1300, colors: ['#8d6e4a', '#4a6b3a', '#a33', '#ddd'] },
    truck:   { name: 'Burro',         maxSpeed: 250, accel: 160, brake: 400, turn: 1.8, grip: 7,  w: 24, l: 60, hp: 2000, colors: ['#e0e0e0', '#3a6ea5'] },
    police:  { name: 'Police Cruiser', maxSpeed: 430, accel: 380, brake: 640, turn: 2.8, grip: 7.5, w: 19, l: 40, hp: 1100, colors: ['#f4f4f4'] },
  },

  trafficMix: ['sedan', 'sedan', 'compact', 'compact', 'suv', 'pickup', 'sports', 'muscle', 'truck', 'sedan', 'suv'],

  weapons: [
    { id: 'fist',    name: 'Fists',   dmg: 15, rate: 0.4, speed: 0,   spread: 0,    range: 28,  pellets: 0 },
    { id: 'pistol',  name: 'Pistol',  dmg: 25, rate: 0.28, speed: 1100, spread: 0.04, range: 520, pellets: 1 },
    { id: 'smg',     name: 'SMG',     dmg: 16, rate: 0.08, speed: 1200, spread: 0.09, range: 480, pellets: 1 },
    { id: 'shotgun', name: 'Shotgun', dmg: 18, rate: 0.85, speed: 1000, spread: 0.22, range: 300, pellets: 6 },
    { id: 'rifle',   name: 'Carbine', dmg: 30, rate: 0.12, speed: 1500, spread: 0.035, range: 700, pellets: 1 },
  ],

  radio: [
    'Radio Off',
    'Costa Mira FM — 80s & 2020s Hits',
    'Verano Bass Radio',
    'Cays Island Rhythms',
    'Sawgrass Country',
    'KVRO Talk — Verano Today',
    'Radio Fuego',
  ],

  newsFeed: [
    ['@VeranoToday', 'Florida Man... sorry, VERANO Man arrested for walking an alligator through a Costa Mira mall.'],
    ['@MiraBeachBabe', 'Sunset at Harbor Drive hits different 🌴🌅 #CostaMira'],
    ['@TwinFates', 'New track droppin tonight. Pull up to the studio. 🔥'],
    ['@CaysFishing', 'Caught a 40lb snapper off the Long Reef. Coast guard said nothing about the bales.'],
    ['@CMPD', 'Reminder: robbing convenience stores is a crime. Even if you film it.'],
    ['@SawgrassGator', 'Saw two folks on an airboat doing 60 through the reeds. Wild.'],
    ['@PortCallowayNews', 'Dockworkers union announces strike. Cargo piles up at the port.'],
    ['@CaneHollowSugar', 'Refinery tours resume this weekend. Free samples!'],
    ['@TeddyVance', 'Coast Guard scanner says big shipment coming thru the Cays tonight. Not that I care.'],
  ],

  // Mission coordinates use road-grid nodes: node [i, j] = tile (12i+1, 12j+1)
  missions: [
    {
      id: 'm1', title: 'Out on Good Behavior', char: 'marisol', start: [9, 4], reward: 1500,
      intro: [
        ['Marisol', 'Six years. Six years in that place.'],
        ['Marisol', 'Dean said he\'d be waiting in Costa Mira. First, I need wheels.'],
      ],
      steps: [
        { type: 'getcar', text: 'Steal a car. Walk up to one and press F.' },
        { type: 'goto', at: [17, 7], inVehicle: true, text: 'Drive to Dean\'s safehouse in Costa Mira.' },
      ],
      outro: [['Dean', 'You look good, Marisol. Real good. Welcome back.']],
    },
    {
      id: 'm2', title: 'Cays to Paradise', char: 'dean', start: [17, 7], reward: 6000,
      intro: [
        ['Dean', 'Denny wants an Aurelio down in the Cays. Some rich kid parked one at a Mira Beach valet.'],
        ['Dean', 'Grab it and get it to Denny\'s garage before the owner calls it in.'],
      ],
      steps: [
        { type: 'getcar', spawn: 'super', at: [19, 3], text: 'Steal the Aurelio from the Mira Beach valet.' },
        { type: 'goto', at: [17, 19], inVehicle: true, keepVehicle: true, time: 95, text: 'Deliver the Aurelio to Denny\'s garage in the Cays.' },
      ],
      outro: [['Denny', 'Not a scratch. Well... a few scratches. Here\'s your cut.']],
    },
    {
      id: 'm3', title: 'Quick Stop', char: 'marisol', start: [15, 10], reward: 3000,
      intro: [
        ['Marisol', 'Rent\'s due and Dean\'s cut won\'t last.'],
        ['Marisol', 'There\'s a store around here. In and out. Nobody gets hurt.'],
      ],
      steps: [
        { type: 'rob', text: 'Rob any store (green $ on the map). Hold E at the door.' },
        { type: 'lose', text: 'Lose the cops.' },
        { type: 'goto', at: [17, 7], text: 'Lay low at the safehouse.' },
      ],
      outro: [['Marisol', 'Easy money. Never gets old.']],
    },
    {
      id: 'm4', title: 'Swamp Business', char: 'dean', start: [10, 13], reward: 9000,
      intro: [
        ['Dean', 'Some swamp boys ripped off Denny\'s people out by the bait shop.'],
        ['Teddy', 'Scanner says they\'re armed. Don\'t get eaten by a gator, man.'],
      ],
      steps: [
        { type: 'goto', at: [10, 15], text: 'Head to the bait shop in Sawgrass Basin.' },
        { type: 'kill', at: [10, 15], count: 5, text: 'Take out the swamp dealers.' },
        { type: 'goto', at: [10, 15], onFoot: true, text: 'Grab the package.', icon: 'package' },
        { type: 'goto', at: [17, 19], text: 'Bring the package to Denny in the Cays.' },
      ],
      outro: [['Denny', 'That\'s what I like to see. Professional.']],
    },
    {
      id: 'm5', title: 'Port Authority', char: 'marisol', start: [3, 3], reward: 12000,
      intro: [
        ['Marisol', 'A rival crew is moving product out of Port Calloway in a delivery truck.'],
        ['Marisol', 'Hector pays good money to make that truck disappear.'],
      ],
      steps: [
        { type: 'destroy', spawn: 'truck', at: [2, 5], text: 'Destroy the rival\'s truck.' },
        { type: 'lose', text: 'Lose your wanted level.' },
      ],
      outro: [['Hector', 'Burned. Beautiful. You have talent, Marisol.']],
    },
    {
      id: 'm6', title: 'Bonnie & Clyde', char: 'any', start: [16, 9], reward: 250000,
      intro: [
        ['Hector', 'The Meridian Trust on Mira Boulevard. Vault\'s loaded on Fridays.'],
        ['Marisol', 'Only way we survive this is if we got each other\'s backs.'],
        ['Dean', 'Ride or die.'],
      ],
      steps: [
        { type: 'goto', at: [18, 9], onFoot: true, text: 'Go to the bank entrance on foot.' },
        { type: 'rob', at: [18, 9], hold: 5, stars: 4, cash: 0, text: 'Hold E to crack the vault.' },
        { type: 'lose', text: 'Lose the cops!' },
        { type: 'goto', at: [17, 19], text: 'Get to Denny\'s place in the Cays.' },
      ],
      outro: [['Dean', 'We did it. We actually did it.'], ['Marisol', 'This is just the beginning.']],
    },
  ],

  // Pickups: [type, tileX, tileY]
  pickups: [
    ['pistol', 202, 86], ['smg', 186, 40], ['shotgun', 230, 150], ['rifle', 199, 120], ['armor', 214, 62],
    ['health', 226, 98], ['health', 190, 170], ['smg', 40, 40], ['health', 30, 64], ['armor', 50, 28],
    ['shotgun', 112, 60], ['health', 130, 49], ['rifle', 122, 150], ['armor', 158, 228], ['health', 210, 227],
    ['cash', 230, 30], ['cash', 175, 180], ['cash', 60, 130], ['cash', 145, 228], ['cash', 100, 97],
  ],
};
