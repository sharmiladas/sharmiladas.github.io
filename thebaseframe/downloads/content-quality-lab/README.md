# Baseframe Content Quality Lab

An independent learning project for AI content evaluation and product decisions. Start here. Python 3.10 or later is the only requirement; the offline lab needs no API key, installs, or paid services.

## Run in five minutes

1. Unzip this package and open a terminal in its folder.
2. Run `python3 lab.py demo` (Windows: `python lab.py demo`).
3. Open `reports/demo_dev.html` in your browser.
4. Run `python3 lab.py retrieval --split dev` to compare two actual retrieval approaches.
5. Read `LEARNING_PLAN.md`, then score answers in `data/human_reviews.csv`.

## What is implemented

- 50 cases and 10 fictional developer-documentation sources. Includes missing information, access controls, conflicting sources, stale versions, prompt injection, and privacy.
- Five-dimension rubric, blank human and judge review CSVs, and calibration instructions.
- Automated term coverage, citation coverage, invalid citation detection, and review routing.
- A paired evaluator agreement calculation, including mean absolute error.
- A real offline retrieval comparison: body-only lexical overlap versus title/alias-enriched overlap.
- JSON and mobile-readable HTML reports. Output origins and missing cases are explicit.

## Boundaries

The demo answers are hand-authored fixtures. They validate the workflow, not an LLM. The improved fixture intentionally has better wording/citations. Do not describe fixture differences as measured AI improvement. Term presence does not prove accuracy; a cited document does not prove a claim is supported. Human rubric review remains mandatory. Safety-critical cases are always routed to review.

The retrieval run actually ranks the sample sources, but the tiny synthetic corpus cannot establish production performance. No model call, MCP service, claim-level entailment system, bias detector, or production release gate is included. LLM judge scoring is supplied by you using the prompt in JUDGE_PROMPT.md and imported as CSV; it is not silently simulated.

## Use real model outputs

Copy the JSON schema in `data/demo_outputs.json`. Replace answers with independently collected model responses; keep the same case IDs. Use variants such as `prompt_A` and `prompt_B`, record real latency and cost if available, and set origin to `actual_model_output`. Use `python3 lab.py evaluate --outputs my_outputs.json --split dev`. Missing numeric measurements remain null. Do not use zero for unknown values.

After calibration on train/dev, freeze prompts, corpus, rubric, and configuration. Run `--split test` once for final assessment. The split is grouped by source topic; similar phrasings stay together. Synthetic test examples are visible in this package, so discipline—not secrecy—protects the holdout. For a credible external assessment, use additional unseen cases.

Run `python3 lab.py agreement` after filling both review files. One row per case/variant per file; aggregate multiple reviewers separately before importing. All five integer scores must be 0–3. Duplicate and incomplete records are rejected.

## Repository structure

`data/documents.json`: fictional source corpus. `data/cases.json`: questions, expected answers, sources, criticality, and split. `lab.py`: evaluation and experiment runner. `RUBRIC.md`: scoring guidance. `JUDGE_PROMPT.md`: judge instructions. `DECISION_MEMO.md`: product decision template. `tests.py`: functional checks.

## Portfolio wording

“Built an independent content evaluation lab with a 50-case synthetic dataset, structured human-review rubric, automated coverage checks, and a lexical retrieval comparison.” Add real model evaluation findings only after conducting and documenting them. Keep this project separate from employment accomplishments.
