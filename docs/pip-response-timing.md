# Pip response timing

`/api/pip/chat` records one `[pip-performance]` JSON log on completion. Set `PIP_LOG_PERFORMANCE=false` to disable these logs. The existing response `performance.answerMs` remains available; it now has the phase breakdown below. These fields are diagnostic metadata and are not displayed in the grower interface.

| Field | Measured work |
|---|---|
| `serverMs` | Chat handler through response completion; excludes browser/network transit before the handler |
| `preAnswerMs` | Validation, authentication, routing, and exchange claim before the answer starts |
| `memoryMs` | Loading selected-grow and conversation context |
| `retrievalMs` | Local HydroPip knowledge retrieval |
| `saveMs` | Saving the question and answer |
| `clientMs` | Preparing the SDK client, including its first import |
| `quotaMs` | Reserving AI usage |
| `modelMs` | Initial provider request |
| `toolsMs` | Local tool execution |
| `followupMs` | Provider request to explain tool results |
| `relevanceMs` | Local relevance checks |
| `repairMs` | Extra provider request to repair an irrelevant answer |
| `answerMs` | Whole answer operation, including the above phases and other local processing |
| `postAnswerMs` | Usage accounting and final exchange save after the answer |

Durations are rounded milliseconds. Phase values need not sum exactly to the total because other local processing is included. `providerCalls` contains one record per logical SDK request: phase, duration, outcome, and returned input/output/cached/reasoning token counts. Its duration includes any SDK retries and backoff; it does not report the count or duration of individual HTTP attempts. Missing token counts are zero. No prompt, response text, customer identifier, image, credential, or provider error body is included in these structured logs.

Requests resolved before answering (including duplicate exchange replies, routing choices and invalid payloads) have only handler timings; they do not claim to have made a fresh model call. Errors during answering retain completed phase measurements. Concurrent answers have separate timing contexts.

Compare repeated representative requests by answer mode and phase. A single observed one-minute answer cannot establish whether the delay was provider generation, retry backoff, or another stage. The new measurements make that distinction possible after deployment. Provider latency is not guaranteed by the local tests.

Simple saved-maintenance lookups use `saved_schedule_recall` and make no provider request. The lookup considers all active maintenance tasks in the selected grow, including overdue tasks outside the bounded general prompt context. It does not complete, reschedule, or rewrite tasks. Questions requiring advice or changes continue through the normal Pip path.
