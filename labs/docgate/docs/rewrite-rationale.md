# Why the quickstart changed

The original synthetic page tells the reader to submit a document without enough
information to do it. The rewrite supplies a runnable task and a success check.

| Original problem | Revision | Reader benefit |
| --- | --- | --- |
| “Getting started” does not identify an outcome | “Review your first documentation page” | Readers can decide whether the task fits their goal |
| “Simply send your doc” hides setup | State Python, curl, and a running local server | Readers know what must exist before the request |
| No endpoint or payload | Include a complete curl command | Readers can reproduce the request without guessing |
| “Fix the errors” confuses findings with request failures | Explain finding_count and HTTP 200 | Readers can distinguish editorial feedback from an API failure |
| No definition of success | Show the expected finding count | Readers can verify the operation |
| An implied quality verdict | State that structural checks do not prove accuracy | Readers know when technical review is still needed |

The checker's four-to-zero finding change demonstrates rule behavior. It is not
evidence of a measured improvement in completion time, adoption, or comprehension.
To evaluate those outcomes, observe new users completing the task and record where
they hesitate or fail. Keep participant results separate from automated rule counts.
