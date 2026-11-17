# Design decisions

DocGate separates structural validation from editorial judgment. A deterministic
review is repeatable and works offline. Claude review is an optional operation
because model access, cost, latency, and output quality are different concerns.

## Why a small stateless API

A single request returns findings without requiring an account, database, or
polling. This makes the first successful request easy to document and test.
There is no review history and no promise of durable storage. A production design
would need authentication, resource controls, observability, deployment hardening,
and an explicit document-retention policy before accepting remote traffic.

## Why there is no quality score

A missing heading is observable. A page's usefulness is contextual. Combining
those into a percentage would imply more evidence than the tool has. The response
provides findings and always calls for human review.

## Why no automatic provider retry

A failed connection does not establish whether a paid request was processed.
This sample returns the failure and leaves the next attempt to the operator.
A more mature client could add bounded retries, Retry-After support, and a total
deadline with clear cost semantics. That behavior is not implemented here.

## Why line-based Markdown checks

The small rule set keeps behavior inspectable. It deliberately supports a narrow
format and excludes triple-backtick examples from prose checks. It does not fully
parse CommonMark, tilde fences, nested structures, or all blockquote forms.
An expanded implementation should use a Markdown syntax tree and test compatibility.

## How the docs are organized

The quickstart gets a first request working. The tutorial teaches a complete
editing task. The reference records the contract. Troubleshooting starts from
symptoms. The agent guide states constraints and stop conditions. This avoids
making the first-time reader sift through every error code before making a request.

## What feedback would change the product

Record failed first requests, misunderstood findings, and edits rejected by reviewers.
If users repeatedly mistake findings for request errors, change the response
explanation and examples. If alternate headings create false positives, revise
the rule semantics and version the ruleset. No user study has been run for this sample.
