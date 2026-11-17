# Contribute to DocGate

Open an issue describing a reproducible reader problem or incorrect rule result.
For code changes, include a failing example, the intended behavior, and tests.
For documentation edits, explain which task became easier to complete.

Run `python3 -m unittest discover -s tests -v` from the repository root.
Keep quickstart responses, the reference, and openapi.json consistent with behavior.
Do not commit API keys, private employer material, or actual user documents.
Use synthetic fixtures. Mark provider output as a fixture or a recorded live result.

The optional Claude client is single-attempt and uses a pinned API version.
Changes to that contract require checking the primary provider documentation
and explaining compatibility in the pull request.
