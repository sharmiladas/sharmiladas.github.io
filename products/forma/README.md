# Forma 3.0

[Product page](https://sharmiladas.github.io/products/forma.html) · [Full app README](../../fun-stuff/forma/README.md)


[Open Forma 3.0](https://sharmiladas.github.io/fun-stuff/forma/) · [GitHub source](https://github.com/sharmiladas/sharmiladas.github.io/tree/main/fun-stuff/forma) · [Complete build, fork, run, and customization README](https://github.com/sharmiladas/sharmiladas.github.io/blob/main/fun-stuff/forma/README.md)

### How it was built

AI-assisted development in ChatGPT produced a static HTML/CSS/JavaScript app. Readable rules in `goalPlan()` select exercises and workload; there is no runtime AI model, backend, build tool, or API key. Workout history and profiles remain in the current browser. Public hosting uses GitHub Pages.

### Run

From `fun-stuff/forma`:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. Windows: `py -m http.server 8000`. To create a standalone fork, copy the four app files into a new repository root: `index.html`, `app.js`, `README.md`, and `test.cjs`.

### Customize

Use **Goals & plan** for mobility, posture, muscle definition, weight management, dance technique, endurance, and balance. Preview and apply equipment, time, floor preference, and set-count choices. Edit individual strength choices in **Weekly routine**.

In code, change `defaultProfile`, `goalLabels`, and `goalPlan()` for initial goals and recommendation rules. `dailyFundamentals` and `advancedByDay` control dance practice; `moves` and `videoDemos` control the catalog and demo links. Run `node --check app.js` and `node test.cjs` after changing behavior. The full README includes configuration examples, deployment steps, storage details, and video-link limitations.

