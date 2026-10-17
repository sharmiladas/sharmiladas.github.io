# Weeks 1 to 4

## Week 1 Build the test set

Read the sample sources. Inspect all 50 questions and their expected behaviors. Explain why critical cases need review. Add five questions to a separate working copy, including an ambiguous question and a multi-source question. Replace fictional sources only with material you may use. Record source version, owner, permissions, and review date. Preserve topic-grouped splits. Deliverable: a dataset card stating scope, coverage, exclusions, and how labels were reviewed.

## Week 2 Create reliable human scoring

Read RUBRIC.md. Score 10 train answers without seeing variant names where possible. Ask a second reviewer to score independently, discuss disagreements, and retain both original ratings. Define what an unsupported claim looks like. Score a fresh sample after calibration. Deliverable: rubric examples and a short explanation of disagreement patterns. Do not fill ratings by copying fixture labels.

## Week 3 Automate and compare evaluators

Run the demo and inspect individual failures, not only aggregate scores. Notice that correct terms can appear inside a false statement. Collect real outputs from one model on dev cases and run evaluate. Use JUDGE_PROMPT.md to obtain evaluator scores; import them and compare to human scores. Report sample size, disagreement by dimension, critical misses, and repeated-run instability. Deliverable: evaluation report with limitations and a failure taxonomy.

## Week 4 Run controlled experiments

Run the offline retrieval comparison on dev. Inspect ties, synonyms, missing sources, and critical cases. Then compare two real generation prompts using the same model, corpus, dataset, sampling settings, and retrieval configuration. Change one factor at a time. Keep paired case IDs and log actual latency/cost. Freeze the selected configuration before evaluating test. Deliverable: completed DECISION_MEMO.md and a reproducible configuration record. Small synthetic samples are exploratory; do not claim statistical certainty or production readiness.

Time guide: three sessions of 60–90 minutes each week, plus reviewer time. Completion means you can explain the design choices, failure modes, and tradeoffs, not merely run a command.
