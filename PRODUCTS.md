# Products — build, run, and customize

[Leadership portfolio: Products](https://sharmiladas.github.io/#products)

Working apps, local prototypes, and agent kits by Sharmila Das. Each entry below explains the implementation, the starting command or workflow, and the places to adapt it. Repository paths remain stable so existing links and downloads continue to work.

| Product | Implementation | Source access |
| --- | --- | --- |
| Baseframe Knowledge Studio | Local Python API, SQLite, JavaScript; includes a separate earlier graph editor | Private repository; public product overview |
| Baseframe TPM Agent | Prompt/workspace kit, Markdown workflows, Python setup utility | Public files in `labs/tpm-agent-kit` |
| Forma 3.0 | Buildless HTML/CSS/JavaScript, browser-local data | Public files in `fun-stuff/forma` |
| AI Content Quality Lab | Python pipeline, regression suite, Streamlit dashboard, retrieval and graph examples | Public downloadable code archive |

## Baseframe Knowledge Studio

[Product overview and architecture](https://sharmiladas.github.io/products/baseframe-knowledge-studio.html) · [Source — private](https://github.com/sharmiladas/baseframe-knowledge-graph) · [Complete run guide — access required](https://github.com/sharmiladas/baseframe-knowledge-graph/blob/main/RUNNING.md)

### How it was built

The main workspace uses a local Python API and SQLite to persist source documents and reviewed relationships. JavaScript presents documents, candidate review, evidence search, graph exploration, and entity wiki views. Controlled extraction recognizes explicit relationship phrases and retains source quotations; approved records feed the graph and wiki. Search retrieves matching passages rather than producing a generated answer. A separate earlier browser graph editor and optional model-assisted extraction CLI are also part of the project.

### Run

With access to the repository, download or clone it and run from its root:

```bash
python3 server.py
```

Windows: `py server.py`. Open `http://127.0.0.1:8000`. The main workspace requires Python 3.10+ and no dependency installation or API key. Start with **Add sample charter**, inspect candidates in **Review queue**, approve supported relationships, then explore the graph, wiki, and source passages. The private `RUNNING.md` contains complete setup, backup, optional AI, and troubleshooting instructions.

### Customize

Start with a domain-specific source document containing explicit supported relationship statements. Review entity identity, direction, and quotations before approval. Adapt the controlled relationship vocabulary and extraction behavior in your authorized copy, and add test cases for accepted phrases, rejected candidates, and absent evidence. Set evaluation questions and expected source passages before considering semantic retrieval or answer generation. The product playbook and strategy artifacts describe later extensions; they are not all implemented features.

The repository is private. This page supplies public orientation; visitors without access cannot clone or fork that source. It does not expose private code or change its permissions.

## Baseframe TPM Agent

[Product overview](https://sharmiladas.github.io/frameworks/baseframe-tpm-agent.html) · [GitHub source](https://github.com/sharmiladas/sharmiladas.github.io/tree/main/labs/tpm-agent-kit) · [Start here](https://github.com/sharmiladas/sharmiladas.github.io/blob/main/labs/tpm-agent-kit/START-HERE.md) · [Product brief](https://github.com/sharmiladas/sharmiladas.github.io/blob/main/labs/tpm-agent-kit/docs/PRODUCT-BRIEF.md)

### How it was built

A file-based agent operating kit connects program outcomes, workstreams, milestones, dependencies, risks, decisions, and acceptance evidence. It combines agent instructions, eight workflow prompts, twelve record templates, a workspace setup utility, a fictional example, and acceptance scenarios. An AI assistant performs reasoning using the supplied evidence. The kit itself is not an autonomous service or hosted application.

### Run

Fork the portfolio repository or copy only `labs/tpm-agent-kit` into your own repository. To try the published example locally:

```bash
git clone https://github.com/sharmiladas/sharmiladas.github.io.git
cd sharmiladas.github.io/labs/tpm-agent-kit
python3 scripts/setup.py --workspace ./my-program
```

Python 3.10+ is required; no third-party packages are needed. The setup utility creates a new directory and refuses to overwrite an existing one. Open the new workspace in an assistant with authorized file access, and explicitly ask it to read `AGENTS.md` and `context/program-profile.md`. A fork uses your own repository URL in the clone command.

Alternatively, upload `system-prompt.md`, `context/program-profile.md`, the workflow you need, and the fictional example source files to an approved assistant. Follow `START-HERE.md` and compare the output with `expected-weekly-update.md`. This upload workflow does not require running Python.

### Customize

- Fill in `context/program-profile.md` with your program's goals, scope, milestones, owners, source hierarchy, review date, and timezone.
- Choose or adapt a prompt in `workflows/` for planning, meetings, dependency reviews, updates, launch readiness, scope changes, or retrospectives.
- Adapt `templates/` to your program's records while preserving stable IDs, source evidence, verification dates, and proposed-versus-confirmed distinctions.
- Supply current source notes and tracker exports. Replace fictional demo facts with real authorized evidence; retain unknowns when evidence is missing.
- Evaluate the adapted kit with `evals/ACCEPTANCE.md` and your own representative program cases.

The kit does not configure live trackers, background jobs, credentials, or messaging. Integration guidance lives in `docs/INTEGRATIONS.md`.

## Forma

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

## AI Content Quality Lab

[Build tutorial](https://sharmiladas.github.io/articles/building-an-ai-content-quality-lab.html) · [Code archive on GitHub](https://github.com/sharmiladas/sharmiladas.github.io/blob/main/downloads/ai-content-quality-lab-complete-v1-v6.zip) · [Download the archive](https://sharmiladas.github.io/downloads/ai-content-quality-lab-complete-v1-v6.zip)

### How it was built

The six-stage reference implementation introduces deterministic quality checks, claim/evidence evaluation, regression cases, a Streamlit dashboard, local retrieval, and structured marketing knowledge. The tutorial explains the architectural decisions and sample routing thresholds. Sample outputs are teaching data, not production performance claims.

### Run

Download and extract the archive. From the extracted project root, preferably in a Python virtual environment, follow the included project instructions:

```bash
pip install -r requirements.txt
python src/run_pipeline.py
python tests/regression_suite.py
streamlit run dashboard/app.py
```

The published tutorial documents these commands. This portfolio navigation update did not re-run the downloaded lab or validate its dependencies.

### Customize

Inspect the extracted project and adapt its sample content and evidence to your domain. Adjust the rubric, dimension weights, and pass/review/fail routing to your editorial policy. Add representative golden cases before changing evaluators or retrieval. Re-run the regression suite and inspect dimension results and claim evidence in the dashboard. Keep model adapters, enterprise identity, production retrieval, and observability extensions distinct from the reference implementation.

## Add another product

Add a product card to the homepage's `#products` section with an honest maturity label, product link, source link, and **Build, run & customize** guide. Add an entry here covering implementation, prerequisites, runnable steps, customization points, validation, and access restrictions. Give public demos synthetic data and keep personal records and credentials out of published code. Existing articles and operating frameworks can remain in their own sections while the working product is listed here.
