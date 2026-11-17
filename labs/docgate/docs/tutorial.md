# Turn a vague instruction into a usable quickstart

Review a deliberately incomplete page, replace it with a task-focused rewrite,
and compare the API responses. The goal is to make the reader's first request
reproducible, not to optimize a quality score.

## Prerequisites

Complete the [quickstart](quickstart.md) and keep the server running.
Run these commands from the repository root in a second terminal.

## Review the original

Open [the original page](../examples/quickstart-before.md). It says to send a
document but omits the endpoint, request format, and definition of success.

```bash
python3 examples/review_file.py examples/quickstart-before.md
```

The response reports four findings: missing title, prerequisites, expected result,
and minimizing language on line 3. The checker can detect the word “Simply”; an
editor must decide whether it hides a difficult step in this context.

## Read the rewrite

Open [the revised page](../examples/quickstart-after.md). It provides a task title,
required tools, a complete curl request, and a way to interpret the result.

```bash
python3 examples/review_file.py examples/quickstart-after.md
```

## Expected result

The revised page returns `finding_count: 0`. Both responses retain
`human_review_required: true` because headings do not prove technical accuracy.
The code-fence content is excluded from heading checks: a shell comment beginning
with `#` must not satisfy the document-title rule.

## Check what the rules cannot tell you

Run the curl command from the revised page. Confirm it returns HTTP 200 and zero
findings. Then ask whether a new reader would know where to run it and what to do
after an error. These judgments require reviewing the surrounding instructions.

This is a synthetic demonstration, not a measured study of developer task success.
See the [rewrite rationale](rewrite-rationale.md) for the editing decisions and
the [test report](test-report.md) for actual execution evidence.
