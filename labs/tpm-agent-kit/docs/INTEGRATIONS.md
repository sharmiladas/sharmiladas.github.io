# Optional connected tools

The kit ships without tool servers or credentials. It works with manual Markdown, CSV, or JSON exports and uploaded notes.

| Source | Read use | Optional authorized write |
| --- | --- | --- |
| Local Markdown / Obsidian | Program state and meeting notes | Maintain program registers |
| Jira / Linear | Issues, owners, dates, acceptance | Update explicitly approved records |
| Google Drive / SharePoint | Plans, decision records, launch evidence | Save explicitly authorized documents |
| Slack / email | Delivery updates and commitments | Send explicitly authorized drafts |
| Calendar | Review schedule and preparation | Create explicitly authorized meetings |
| GitHub | Issues, release notes, engineering evidence | Create explicitly authorized issues or PRs |

Connect through your assistant’s supported connector or a separately configured MCP server. Consult that tool’s current official setup documentation; there is no universal configuration bundled here. Start with reads. Verify accessible projects, evidence pointers, and timezone before adding writes. Never place tokens in the kit or source control.

In every run report source coverage: connected and read, supplied manually, unavailable, or stale. A missing connector should produce a specific input request rather than fabricated tool results. Scheduling must be explicitly configured and verified; a workflow file alone does not create automation.
