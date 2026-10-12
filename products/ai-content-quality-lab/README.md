# AI Content Quality Lab

[Product page](https://sharmiladas.github.io/products/ai-content-quality-lab.html) · [Build tutorial](../../articles/building-an-ai-content-quality-lab.html)


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


## Fork

Fork this repository or extract the public code archive into a standalone repository. Replace sample content and evidence, adjust the rubric, and run the regression suite. Inspect the included license before redistribution.
