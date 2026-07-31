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
