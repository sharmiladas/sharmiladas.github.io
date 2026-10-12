# Sharmila (Das) Rammohan — leadership portfolio

Enterprise content, knowledge architecture, AI systems, and technical program leadership.

[Open the portfolio](https://sharmiladas.github.io/) · [Products](https://sharmiladas.github.io/#products)

## Products

- **Baseframe Knowledge Studio:** local document workspace, reviewed relationships, graph, entity wiki, and evidence search. Source repository is private.
- **Baseframe TPM Agent:** a file-based agent kit with eight delivery workflows and a reusable program workspace.
- **Forma 3.0:** goal-based fitness and dance routines, guided exercises, and browser-local progress.
- **AI Content Quality Lab:** a six-stage evaluation, retrieval, and structured-knowledge learning kit.

See [PRODUCTS.md](PRODUCTS.md) for each product's implementation, source access, setup, and customization instructions. Forma also has a [complete fork-and-run README](fun-stuff/forma/README.md), and the TPM kit has a [setup guide](labs/tpm-agent-kit/START-HERE.md).

## Run the portfolio locally

From the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. The portfolio uses static HTML, CSS, and JavaScript and is published with GitHub Pages. Product prerequisites differ; use each product's guide. Existing product file paths are retained for link compatibility.
