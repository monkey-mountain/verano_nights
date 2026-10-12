# Verano Nights — a 3D open-world browser game

An original **3D first-person** open-world game that runs in the browser (rendered with Three.js), set in **Verano**, an invented Gulf state of neon, swamp and sugar money. It needs no build step and no installs (Three.js is bundled in `js/vendor/`), and it installs as a Progressive Web App (PWA) that works offline.

> Everything in this repository is original: the state of Verano, its regions, characters, vehicles, radio stations, missions and dialogue were all written for this game, and every graphic and sound is generated in code at runtime.

## Play

Serve the folder with any static web server and open `index.html`:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

The page asks search engines not to index it (`<meta name="robots" content="noindex">` in `index.html`); remove that line if you want it to show up in search results.

To publish it, enable **GitHub Pages → Source: GitHub Actions** in the repository settings. The workflow in `.github/workflows/pages.yml` deploys on every push to `main`.

## Features

- **3D first-person shooter view:** mouse-look aiming with a crosshair, a weapon in hand with recoil and muzzle flash, and real 3D buildings (lit windows at night), palm and pine trees, street lamps, cars and people.
- **Driving cameras:** cockpit view or chase view (V or right click), with speed-based field of view and headlights at night.

- **A procedurally built Verano (256×256 tiles):** Costa Mira, the Mira Cays, Sawgrass Basin, Port Calloway, Cane Hollow and Tamarind Ridge National Park, connected by highways and bridges.
- **Two protagonists:** switch between Marisol Reyes and Dean Walker with Tab. Each one keeps their own position, health and weapons.
- **Driving:** arcade physics with drifting, handbrake, off-road slowdown, crash damage, skid marks, fires and explosions. There are 9 vehicle types.
- **Living city:** traffic follows the road network, and pedestrians walk around and panic.
- **Wanted system (1–5 stars):** police drive along the road graph to chase you, get out of their cars, arrest or shoot you, and send a helicopter at 4+ stars. You lose them by staying out of sight.
- **Six-mission story:** prison release, a car theft against the clock, a store robbery, a swamp shootout, a truck takedown, and a bank heist finale.
- **Robbable stores,** pickups (weapons, health, armor, cash), and safehouses where you save and sleep.
- **World and HUD:** day/night cycle with street lights and headlights, rain, a minimap with GPS routing, and a full map where you set waypoints.
- **Radio:** six stations that play anywhere (R / Shift+R, or the phone's radio app): synthwave, trap, reggae, country and reggaeton songs composed live in Web Audio, plus KVRO talk radio read aloud by the browser's speech synthesizer. Volume is in Settings.
- **Sound effects:** synthesized weapon, engine and siren sounds.
- **Phone feed, keyboard and mouse controls, and touch controls on mobile.**
- **Verano Guide** with the state's regions, cast and history.

## Controls

| Action | Keys |
|---|---|
| Move / drive | WASD (arrow keys turn the view) |
| Look around | Mouse (click the game to capture the pointer) |
| Shoot | Left click or Space (J also works; in a car: click or J) |
| Driving camera | V or right click |
| Enter / exit vehicle | F / Enter |
| Sprint / handbrake | Shift on foot / Space in a vehicle |
| Interact (rob, save) | Hold E |
| Weapons | Q, mouse wheel, 1–5 |
| Switch character | Tab |
| Radio / horn | R (Shift+R back) / H |
| Map / pause / phone | M / Esc / T |

## The setting

Verano is a fictional Gulf state. Its six regions are:

| Region | What it is |
|---|---|
| **Costa Mira** | A city of neon, beaches, nightlife and new money. |
| **Mira Cays** | A chain of islands linked by a long ocean highway. Boats, bars and smugglers. |
| **Sawgrass Basin** | Swampland wilderness of airboats, alligators and back-road dealers. |
| **Port Calloway** | A faded resort town on the Gulf coast, now a port full of dockworkers. |
| **Cane Hollow** | Industrial heartland built on sugar refineries and farmland. |
| **Tamarind Ridge National Park** | Forest trails, rivers and campgrounds in the rural north. |

**Protagonists:** Marisol Reyes, just out of the Verano State Penitentiary, and Dean Walker, a drifter doing jobs for smugglers down in the Cays. Switch between them with Tab.

**Supporting cast:** Teddy Vance, Ray Mondego, Marcus Vale, Twin Fates, Hector Salas and Denny Kroll.

## Code layout

```
index.html            UI shell (HUD, menus, touch controls)
css/style.css         Styling
js/data.js            Lore, regions, vehicles, weapons, missions
js/world.js           Map generation, road graph, chunked tile rendering, minimap
js/entities.js        Vehicles (physics), pedestrians, particles
js/game.js            Game loop systems: player, traffic, police, crime, missions
js/render.js          Three.js 3D renderer: city geometry, models, first-person camera, lighting, weather
js/vendor/three.min.js Three.js r149 (MIT)
js/audio.js           Web Audio sound effects
js/radio.js           Radio stations: generated music and talk radio
js/ui.js              HUD, menus, input, main loop
sw.js, manifest.webmanifest   PWA / offline support
```
