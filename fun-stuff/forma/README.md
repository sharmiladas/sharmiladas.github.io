# Forma 3.0 — Daily movement, strength, and dance

[Open Forma](https://sharmiladas.github.io/fun-stuff/forma/) · [Portfolio](https://sharmiladas.github.io/#fun-stuff)

A browser fitness and dance practice app by Sharmila (Das) Rammohan.

## Weekly program
| Day | Daily practice | Additional training |
| --- | --- | --- |
| Monday | Yoga → foot preparation → heels fundamentals → optional advanced drill | Full-body resistance |
| Tuesday | Yoga → heels practice | Cardio |
| Wednesday | Yoga → heels practice | Lighter day |
| Thursday | Yoga → heels practice | Full-body resistance |
| Friday | Yoga → heels practice | Cardio |
| Saturday | Yoga → heels practice | Lighter day |
| Sunday | Yoga → heels practice | Lighter day |

Strength and cardio weekdays are editable. Each default resistance session covers chest, glutes, abs, and arms with bands or light weights. The cardio starter block is 20 minutes. The daily heels extension rotates coordination, musicality, transitions, and rehearsal; floorwork requires previously learned instructor guidance and has a standing substitute.

## Features
- 79 unique movement entries; source duplicates grouped into variations
- Editable twice-weekly strength routine and cardio days
- Daily yoga before dance, or an option to mark yoga as already completed outside Forma
- Heels fundamentals and a rotating optional advanced extension
- Flat-shoe practice option, guides, rest timer, and skip controls for daily practice
- Separate strength, cardio, and daily-practice progress counts
- Browser-local history, settings, and JSON export

## Run locally
No dependencies or API keys are needed. From this folder:
```bash
python3 -m http.server 8000
```
Open http://localhost:8000. The app uses plain HTML, CSS, and JavaScript.

## Data
Workout data stays in browser localStorage under the existing forma-v1 key. Upgrades preserve history and customized strength choices. It does not sync between browsers or devices. Export your data for a backup; this version has no import feature. No uploaded personal media or actual workout records are stored in this repository.

## Sources and scope
The practice sequence is original, informed by publicly available instructor materials. It does not copy paid lessons.
- [STEEZY: Kiira Harper’s Intro to Heels](https://www.steezy.co/posts/kiira-harper-q-a)
- [STEEZY: beginner posture, balance, and preparation](https://www.steezy.co/posts/how-to-dance-confidently-in-heels)
- [Shaka Lee: Heels Drills Vol. 1](https://www.shakalee.com/heels-drills)
- [Shaka Lee: intermediate progression in Vol. 2](https://www.shakalee.com/heels-drills-online)
- [DancePlug: dance shoe considerations](https://www.danceplug.com/article/dancing-in-heels-here-are-your-best-shoe-options)
- [NHS: adult physical activity guidance](https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/)
- [NHS: foot-pain guidance](https://www.nhs.uk/symptoms/foot-pain/heel-pain/)

The supplied fitness clips informed movement identification, not an assessment of the user’s dance technique. A floorwork course screenshot only listed course topics, so no unseen choreography was inferred. General exercise guidance does not promise targeted fat loss or breast lifting. Start gradually and stop if a movement hurts. Two short cardio blocks alone do not meet the general 150-minute weekly moderate-activity guideline.

## Video links
Every one of the 79 exercise entries has a video link in the library, form guide, and guided workout. Twenty entries link to provider-published demonstrations or instructor video pages. The remaining entries link to exercise-specific YouTube searches, explicitly labeled as search results rather than verified videos. Direct YouTube playback was not verified; the Barts Health links were taken from its own physiotherapy page.

## Forma 3.0: customize by goals
The default goals are mobility, posture, and muscle definition. Choose multiple goals and a primary priority, then set strength-session length, workload, equipment, cardio time, and whether to include floor exercises. A live preview explains the recommendation before Apply replaces the chosen strength and yoga routines. Individual strength choices can still be edited in Weekly routine.

The generator changes exercise selection, equipment variations, yoga priorities, set counts, and cardio duration. It preserves the daily yoga/dance and twice-weekly strength/cardio structure, selected weekdays, dance preferences, and existing workout history. Bodyweight and no-floor alternatives are available. Advanced dance remains optional.

Weekly check-ins track subjective mobility ease, posture comfort, and the resistance used. They are personal observations, not a medical assessment or a promise of changes in appearance. Check-ins and profiles are saved only in the current browser.
