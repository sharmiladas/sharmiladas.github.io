# Forma 3.0 — Make movement fit your goals

[Open the app](https://sharmiladas.github.io/fun-stuff/forma/) · [Source code](https://github.com/sharmiladas/sharmiladas.github.io/tree/main/fun-stuff/forma) · [Portfolio: Products](https://sharmiladas.github.io/#products)

Forma is a browser fitness and dance planner by Sharmila Das. Choose goals such as mobility, posture, getting toned, or weight management, preview a routine, and adjust it to your equipment and available time. Fork the code to make your own version.

## How this was built

The app was created through AI-assisted development in ChatGPT, then iterated from a strength tracker into a daily yoga/dance planner and finally a goal-based routine builder. Exercise references, supplied movement images/clips, and public instructor resources informed the content. Private uploaded media and personal workout records are not included in the repository.

It uses **plain HTML, CSS, and JavaScript**. There is no build step, framework dependency, backend, runtime AI service, or API key. The recommendations are readable rules in `goalPlan()`, rather than an AI model or an assessment of someone's body. GitHub Pages serves this public copy; a separate private copy is hosted with ChatGPT Sites. The original LinkedIn agent demo was inspiration for building, not a runtime dependency.

| File | Purpose |
| --- | --- |
| `index.html` | Responsive layout, styles, forms, navigation, and accessible controls |
| `app.js` | Exercise catalog, goal rules, guided workouts, schedule, and browser storage |
| `test.cjs` | Dependency-free Node checks for goal rules and workout behavior |
| `README.md` | Build, fork, customize, and publish instructions |

## Customize without editing code

1. Open **Goals & plan** and select one or more goals.
2. Pick your primary priority. If it is not selected, the first selected goal takes priority.
3. Choose a 15-, 25-, or 35-minute strength-session target, gentle/steady/progressive workload, bodyweight/bands/weights/both, floor preference, and 15/20/30-minute cardio duration.
4. Review the live recommendation, then choose **Apply**. Applying replaces the strength selection and yoga block, while preserving workout history, training weekdays, and dance preferences.
5. Use **Weekly routine** to edit individual strength exercises and training days. A custom strength selection stays in place until you apply another recommendation.

| Goal | Example configuration | What changes |
| --- | --- | --- |
| Mobility + posture + getting toned | Select `mobility`, `posture`, `tone`; primary `mobility`; steady; both; floor allowed | Comfortable mobility sequence, pulling/posture work, and resistance exercises; this is the default |
| Lose weight / weight management | Select `weight`, `tone`, `endurance`; primary `weight`; steady; 25-minute strength; 30-minute cardio | Shorter yoga block with repeatable resistance and cardio practice; no calorie target or weight-loss prediction |
| Getting toned | Select `tone`; primary `tone`; steady or progressive; bands or weights | Resistance selection includes chest, glutes, core, and arms; hip thrust replaces the default bridge when floor work is available |
| Posture | Select `posture`, `mobility`; primary `posture`; gentle; bodyweight | Upper-back/chest mobility and shoulder-blade control, with wall push-ups and equipment-free alternatives |

Other supported goals are dance technique and balance. Time settings guide the selection; actual session duration varies with pace and rest. “Progressive” selects three sets, “steady” two, and “gentle” one for resistance prescriptions. Load progression remains a user decision.

## Weekly structure

| Day | Daily practice | Additional training |
| --- | --- | --- |
| Monday | Yoga → foot preparation → heels fundamentals → optional advanced focus | Full-body resistance |
| Tuesday | Yoga → heels practice | Cardio |
| Wednesday | Yoga → heels practice | Lighter day |
| Thursday | Yoga → heels practice | Full-body resistance |
| Friday | Yoga → heels practice | Cardio |
| Saturday | Yoga → heels practice | Lighter day |
| Sunday | Yoga → heels practice | Lighter day |

Strength and cardio weekdays are editable. Each recommended resistance session covers chest, glutes, core, and arms, with substitutions for equipment and floor preference. Yoga can be marked as already completed outside Forma. Heels practice supports flats; the advanced extension is optional and rotates daily. Floor transitions have a standing substitute.

The goal builder preserves **daily yoga/dance, two strength sessions, and two cardio sessions per week**. It does not generate arbitrary weekly frequencies or a full nutrition plan. To change these frequencies in a fork, update the schedule controls, validation, target counters, and tests together.

## Fork and run locally

### Keep the portfolio repository structure

1. Use GitHub's **Fork** button on [this repository](https://github.com/sharmiladas/sharmiladas.github.io).
2. Clone your fork, replacing `YOUR_USERNAME` below:

```bash
git clone https://github.com/YOUR_USERNAME/sharmiladas.github.io.git
cd sharmiladas.github.io/fun-stuff/forma
python3 -m http.server 8000
```

Open `http://localhost:8000`. On Windows, use `py -m http.server 8000` if needed. This fork also contains the original portfolio; replace its content before publishing your own site.

### Make a standalone fitness app

Copy **only** `index.html`, `app.js`, `README.md`, and `test.cjs` from `fun-stuff/forma` into the root of your own new repository, such as `forma-my-goals`. Run the same local server from that root. This keeps your fitness app separate from the portfolio.

No installation or API credentials are required. An internet connection is needed to open external exercise videos. Forma is a web app, not a native iPhone app, and it cannot read your phone's photo library.

## Publish your fork with GitHub Pages

For a standalone repository:

1. Commit the four app files to your `main` branch, with `index.html` at the repository root.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then save.
4. Wait for the Pages deployment to finish. GitHub displays the exact published URL. A typical project URL is `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

For a full portfolio fork, keep the app under `fun-stuff/forma/`; its URL ends in `/fun-stuff/forma/` relative to your published site. Repository visibility and Pages availability depend on your GitHub account. Update the links at the top of this README to point to your own app and repository.

## Customize the code

### Defaults for new visitors

Edit `defaultProfile` in `app.js`. For example, a weight-management and muscle-definition starting point:

```js
const defaultProfile = {
  goals: ['weight', 'tone', 'endurance'],
  primary: 'weight',
  minutes: 25,
  intensity: 'steady',
  equipment: 'both',
  floor: true,
  cardioMinutes: 30
};
```

Supported goal keys: `mobility`, `posture`, `tone`, `dance`, `endurance`, `balance`, `weight`. Equipment keys: `bodyweight`, `bands`, `weights`, `both`. Intensity keys: `gentle`, `steady`, `progressive`.

Defaults initialize a new visitor's profile. Existing browser profiles stay saved; changing source defaults does not overwrite them. Use **Goals & plan** to update an existing profile, or test your fork in a fresh browser profile.

### Recommendation rules

| Code location | What to edit |
| --- | --- |
| `goalLabels` | Supported goal keys and display labels |
| `defaultProfile` | Initial goals, equipment, time, and workload |
| `goalPlan(profile)` | Exercise substitutions, yoga priority, set count, and explanation text |
| `dailyFundamentals` | Common daily heels sequence |
| `advancedByDay` | Optional advanced focus indexed Sunday through Saturday |
| `dailyIds()` | Yoga → preparation → fundamentals → advanced ordering and no-floor replacement |
| `videoDemos`, `videoFor()` | Provider demo links and clearly labeled search fallback |

When adding a goal, add its checkbox (`goal-YOUR_KEY`) and primary-goal option in `index.html`, its label in `goalLabels`, and its rules/explanation in `goalPlan()`. Keep the selected primary goal among the selected goals. Update tests to cover the new behavior.

### Add an exercise once

A catalog entry in `moves` uses this structure:

```js
['Unique exercise name', 'Glutes', '2 sets × 10 reps',
 'Clear form instructions.', 'An easier variation.', 'bridge']
```

The first six fields are name, category, prescription, guide, easier option, and illustration shape. Existing extended entries may also include an advanced flag, source, and aliases; follow the surrounding entry's structure. Reuse an existing exercise name in routines rather than adding duplicates. Name spelling matters because routines and video mappings resolve catalog names.

Add a checked provider link when available:

```js
videoDemos['Unique exercise name'] = {
  url: 'https://example.com/your-verified-instructor-video-page',
  label: 'Watch instructor demonstration',
  type: 'video_page',
  note: 'Describe the variation shown.'
};
```

The URL above is a placeholder; replace it with a real demonstration before publishing. If no mapping exists, the app creates an exercise-specific YouTube search and labels it as an unverified search. A search link is not a verified individual video.

## Checks

With Node.js installed, run from the app folder:

```bash
node --check app.js
node test.cjs
```

The checks exercise goal priority, workload, equipment substitutions, floor preferences, cardio duration, saved-history migration, unique exercise entries, daily ordering, optional advanced practice, separate workout counts, and skip/cancel behavior. They use a lightweight mocked DOM; they do not verify visual layout, all external video playback, or real-browser timing. After editing, also open the app and review the affected screens.

## Data and privacy

Settings, sessions, and subjective weekly check-ins live in browser `localStorage` under `forma-v1`, retained for upgrade compatibility. There is no account, server sync, cross-device history, or JSON import. Export JSON for a backup. If your fork shares an origin with another Forma copy, change the `key` constant to a unique value to avoid sharing browser data between those copies. A new key starts fresh and does not migrate the old records automatically.

The code does not contain personal workout history or uploaded photos/videos. External video links open third-party sites under their own policies.

## Exercise references and video coverage

The catalog contains **79 unique movement entries**. Twenty link to provider-published demos or instructor video pages; 59 have explicitly labeled video searches. Direct YouTube playback was not verified. Provider links and paid instructor resources may change.

- [STEEZY: Kiira Harper’s Intro to Heels](https://www.steezy.co/posts/kiira-harper-q-a)
- [STEEZY: preparation and beginner heels practice](https://www.steezy.co/posts/how-to-dance-confidently-in-heels)
- [Shaka Lee: Heels Drills](https://www.shakalee.com/heels-drills)
- [Shaka Lee: intermediate drill progression](https://www.shakalee.com/heels-drills-online)
- [Yoga With Adriene](https://yogawithadriene.com/)
- [NHS: strength and flexibility](https://www.nhs.uk/live-well/exercise/how-to-improve-strength-flexibility/)
- [NHS: adult activity guidance](https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/)

Forma offers general movement routines, not an individualized medical or nutrition prescription. Weight change depends on nutrition and other factors as well as activity; the app promises no particular weight loss, targeted fat loss, or appearance change. Use comfortable variations, build gradually, and stop movements that hurt. Daily practice can be light, and advanced dance assumes appropriate instruction. Two short cardio sessions alone are not a complete weekly activity target.
