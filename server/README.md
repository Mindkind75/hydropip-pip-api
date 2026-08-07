# HydroPip Pip API

Production web service for Pip, the HydroPip AI Buddy.

## What This Backend Does

- Serves the real `/api/pip/chat` endpoint for the Wix Buddy widget.
- Uses OpenAI when `OPENAI_API_KEY` is configured.
- Uses local HydroPip RAG context from `HydroPip_AIknowledge_base` before answering.
- Falls back to deterministic HydroPip rules if the OpenAI key is missing.
- Keeps saved reminders gated behind subscription state.

## Required Environment Variables

- `OPENAI_API_KEY`: enables real OpenAI-backed answers.
- `PIP_VISITOR_DAILY_AI_CREDITS`: anonymous daily AI allowance (default `5`).
- `PIP_FREE_MEMBER_DAILY_AI_CREDITS`: signed free-member daily AI allowance (default `20`).
- `PIP_PRO_DAILY_AI_CREDITS`: verified Pip Pro daily AI allowance (default `150`).
- `PIP_TEXT_CREDIT_COST`, `PIP_DETAILED_CREDIT_COST`, `PIP_PHOTO_CREDIT_COST`: per-answer credit costs (defaults `1`, `3`, and `10`).
- `PIP_AI_DISABLED`: set to `true` to skip OpenAI and keep deterministic/rules guidance available.
- `PIP_MODEL_INPUT_COST_PER_MILLION`, `PIP_MODEL_OUTPUT_COST_PER_MILLION`: model cost estimates (defaults `0.25` and `2.00`).
- `PIP_USAGE_HASH_SECRET`: optional salt for anonymous IP hashes; falls back to `PIP_BRIDGE_SECRET`.
- `PIP_ADMIN_KEY`: unique private key for the beta applicant and feedback review dashboard. It is separate from `PIP_BRIDGE_SECRET` and is accepted only through an admin request header.
- `PIP_ALLOWED_ORIGINS`: comma-separated allowed website origins.
- `PIP_MODEL`: defaults to `gpt-5-mini` for a strong cost/performance launch balance.
- `PORT`: set automatically by Render.

## Endpoints

- `GET /api/pip/health`: verifies service status and AI mode.
- `POST /api/pip/chat`: main Pip chat endpoint.
- `GET /api/pip/knowledge/search?q=...`: QA endpoint for the local RAG matches.
- `GET /api/pip/wizard`: setup profile questions.
- `GET /api/pip/build-steps`: HydroPip build steps.
- `GET /api/pip/parts?towerCount=4`: parts and quantities.
- `POST /api/pip/grow-plan`: creates a deterministic first grow plan.
- `POST /api/pip/reminders`: returns `402` until subscription is active.
- `POST /api/pip/beta/apply`: public, rate-limited beta tester application.
- `GET /api/pip/admin/beta/overview`: private applicant, feedback, and tester-progress review data.
- `PATCH /api/pip/admin/beta/applications/:id`: updates applicant status and private notes.
- `PATCH /api/pip/admin/beta/feedback/:id`: updates feedback priority, review status, and private notes.

## Beta Operations

- `/beta-test` is the public tester intake form.
- `/beta-admin` is the private review dashboard. Enter `PIP_ADMIN_KEY`; the key is kept in session storage and removed by the dashboard's Lock button.

## RAG Strategy

The first production version uses a local file-based RAG index. This is the most efficient starting point because the HydroPip knowledge base is small and domain-specific. It has no separate vector-storage bill.

Files in `HydroPip_AIknowledge_base` are chunked and searched for every question. The top matches are passed into the model as retrieved HydroPip context.

Later, this can be upgraded to OpenAI vector stores/file search when the knowledge base grows to include build videos, many transcripts, customer logs, sensor docs, or larger manuals.

## Render Settings

- Build command: `npm install`
- Start command: `npm start`
- Health check path: `/api/pip/health`

The service binds to `process.env.PORT`, which Render requires for public web services.

## Wix Connection

After deployment, set this before the site script:

```html
<script>
  window.HYDROPIP_PIP_API_URL = "https://your-render-service.onrender.com";
  window.HYDROPIP_PIP_SUBSCRIPTION_ACTIVE = false;
  window.HYDROPIP_PIP_PLAN = "free";
</script>
```
