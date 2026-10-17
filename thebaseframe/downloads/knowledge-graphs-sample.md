# Knowledge Graphs: free sample

All scenario details are fictional.

## Problem
A developer asks which guide applies to API version 2. Guide A documents version 1; Guide B documents version 2 and requires administrator access.

## Task
Model the API versions, guides, and audience. Define relationships and evidence, then write a query that selects a version-appropriate guide.

## Your working notes
- Evidence:
- Unknowns:
- Owner:
- Proposed decision:
- Next check:

## Worked response
Use API version and guide entities with DOCUMENTS_VERSION and REQUIRES_ROLE relationships. Preserve source/version evidence for each relationship. Filter to version 2 and permitted sources before returning Guide B. A graph relationship documents an access requirement; the application must enforce permissions.
