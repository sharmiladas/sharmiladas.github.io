# Amazon Developer Docs Recommendation Lab

Build a content recommendation system using eight public Amazon Developer documentation pages. The included corpus contains short original paraphrases with source links, scope metadata, and verification dates. It does not contain internal Amazon information or full copied documentation. This is an independent Baseframe project, not an Amazon product or an employment accomplishment.

## Run

Python 3.10 or later. No dependencies, cloud account, API keys, or paid services.

```bash
python3 recommender.py recommend --query "test IAP purchases without charging testers"
python3 recommender.py related --source-id iap-overview
python3 recommender.py evaluate --split dev
python3 tests.py
python3 recommender.py serve
```

Open http://127.0.0.1:8765 for the interactive UI. You can also open index.html directly; it embeds the sample corpus and runs recommendations locally in JavaScript. The browser UI does not call a cloud model or send queries to Amazon. A live hosted page serves the same local ranking demo; its API instructions describe the downloaded Python server, not a hosted endpoint.

```bash
curl -X POST http://127.0.0.1:8765/recommend \
  -H 'Content-Type: application/json' \
  -d '{"query":"configure login redirects","mode":"hybrid","platform":"web","audience":"developer","k":3}'
```

Related recommendations use `{"source_id":"iap-overview","mode":"hybrid"}` and exclude the current page. Invalid options and oversized bodies are rejected. The API binds only to localhost, performs no account actions, and does not log queries. It is a development server; production authentication, authorization, quotas, monitoring, and hardening are future work.

## What works

1. **Source modeling:** source URL, title, original summary, manually reviewed tags, audience, task stage, platform, active status, public visibility, source update date where known, verification date, and checksum.
2. **Normalization and ingestion:** ingest.py extracts main article text from a local HTML file or a single approved public URL, hashes it, and stages it for review. Fetching is optional and has not been executed by this bundled demo. HTML without a substantial main element fails closed. Nothing is auto-published.
3. **Ranking:** lexical overlap baseline; TF-IDF cosine vector similarity; hybrid TF-IDF plus task-tag and audience boosts. Platform filters and active/public gates run before serving results.
4. **Serving:** CLI, local POST API, browser UI, related-document recommendations, and source-linked explanations.
5. **Evaluation:** 28 proposed relevance cases with topic-grouped train/dev/test splits, precision at 3, recall at 3, NDCG at 3, MRR, and no-relevant-case abstention. Each question currently identifies a single target page; other useful pages may be unlabeled. Treat these as incomplete learning labels, not production truth.
6. **Feedback:** browser-local useful/not-useful counters; no identity, click history, personal profile, or server analytics. Clear them with Reset feedback. Feedback is not used to retrain the ranker.

TF-IDF produces sparse term vectors. It is not a learned semantic embedding model. No neural model, vector database, collaborative filtering, automatic LLM tagging, or MCP server is included. The implementation exposes the exact algorithm instead of describing missing components as completed.

## Ingest another public document

```bash
python3 ingest.py --id new-public-doc \
  --url https://developer.amazon.com/docs/login-with-amazon/refresh-token.html \
  --fetch --out staged-document.json
```

Or supply `--html exported.html` instead of `--fetch`. Review the staged text against the linked source. Add a concise authorized summary and manually checked tags/platform/audience to corpus.json only after approval by the source reviewer. Regenerate the embedded HTML corpus when changing it (the included build script is build_ui.py). Respect source terms and permitted reuse; do not redistribute full staged copies merely because a page is publicly readable. Keep staging files out of a public repository.

## Four-week learning path

**Week 1 — objectives and corpus.** Define success as helping a developer find the right next document. Map the screenshots' objectives/data-preparation steps to source modeling and ingestion. Inspect all eight linked sources; distinguish Fire OS, Vega OS, website authentication, and tester tooling. Add ownership, lifecycle, version, and platform labels. Deliver a dataset card describing coverage and exclusions.

**Week 2 — recommendation architecture.** Compare lexical and TF-IDF modes for query and related-content discovery. Inspect content_terms, tag_terms, and audience_match. Explain why TF-IDF misses synonyms and why tags can help or distort ranking. Keep the baseline and change one signal at a time. Deliver an architecture decision record with the tradeoffs below.

**Week 3 — relevance and responsible evaluation.** Independently grade candidate documents 0–3 for each dev query, not merely the one supplied target. Calibrate with another reviewer. Inspect query-level failures, especially platform mismatches and unsupported requests. Precision at 3 uses three result slots, including missing slots; recall and ranking averages exclude no-relevant-label cases, whose abstention is reported separately. Freeze configuration before test. A small public corpus does not establish fairness, safety, or production performance.

**Week 4 — serving, feedback, and pilot design.** Run the API and browser demo; verify related recommendations exclude the current document. Collect consented task feedback with a separate study and record task completion, relevance, and time to useful documentation. Browser counters are exploratory only. Write a pilot plan with source review cadence, coverage alerts, stale-source handling, rollback criteria, and owners. Real business impact requires a measured deployment or study, not an offline score.

## Architecture choices

| Layer | Implemented now | Extension to evaluate |
|---|---|---|
| Ingestion | Single public HTML source or local export staged for review | Authorized CMS change notifications and queue |
| Normalization | Main article text, whitespace cleanup, checksum | Section-aware parsing with code and heading preservation |
| Taxonomy | Reviewed task, audience, platform labels | Model-suggested tags with reviewer acceptance |
| Vectors | TF-IDF cosine over titles and summaries | Learned embeddings benchmarked against this baseline |
| Retrieval | In-memory ranker for eight public sources | Vector index for a larger reviewed corpus |
| Serving | Local Python POST API and browser demo | Authenticated production service and authorized MCP adapter |
| Improvement | Offline relevance reports and local feedback | Consent-based study, experiments, drift monitoring |

The screenshot workflow also mentions training, deployment, privacy, and ongoing maintenance. TF-IDF fits corpus statistics; it is not a trained collaborative or neural recommender. This release is a prototype served locally and as a static demonstration, not a production Amazon integration. No browsing or purchase history is collected. Existing certificate and Amazon recommendation work should be documented separately from this learning project.

## Evidence and scope

Sources were reviewed on 2026-10-14. Original page update dates differ and are not evidence of obsolescence by themselves. Use verified_at for review cadence, and platform/version relevance for applicability. Primary source URLs are in corpus.json and the interactive results. Recheck them before acting on implementation details. Public documentation includes platform-specific requirements; avoid transferring Fire OS guidance to Vega without checking the relevant page.

The supplied dev report is a real run of the implemented rankers on eight development cases. Labels are Baseframe proposals. No click-through, conversion, user satisfaction, or production scale is claimed. Do not tune against the test cases. For an external assessment, obtain new unseen tasks; the included holdout is readable by design.

## Customize and share

Copy or fork the repository folder, run tests, and update corpus.json and cases.json with reviewed material. Run `python3 build_ui.py` after corpus/ranking/configuration changes; the UI implements the same current ranker and includes model configuration. Preserve attribution and label your modifications. The Python source, demo, and Baseframe-authored summaries are offered under the accompanying MIT license; linked Amazon documentation retains its own rights and terms.
