# Forma — Your daily strength

A small fitness web app by Sharmila (Das) Rammohan.

[Open the app](https://sharmiladas.github.io/fun-stuff/forma/) · [Portfolio](https://sharmiladas.github.io/#fun-stuff)

## Features
- Glutes and core, chest and posture, and gentle recovery sessions
- Simplified exercise illustrations and form guides
- Adjustable session length, weekly goals, and equipment
- Rest timer, completed workout history, and JSON export

## Run locally
No installation or API keys are required.

From this folder, run:
```bash
python3 -m http.server 8000
```
Open http://localhost:8000 in your browser. The app uses plain HTML, CSS, and JavaScript.

## Data
Settings and history are stored in browser localStorage. They do not sync between browsers or devices. Use the progress export to keep a backup. There is no import feature in this version.

## Files
- `index.html`: responsive interface, styles, and exercise dialogs
- `app.js`: routines, settings, timer, and local progress storage

Exercise guidance is general. Illustrations are simplified positions rather than animations. The app does not promise targeted fat loss or breast lifting.

