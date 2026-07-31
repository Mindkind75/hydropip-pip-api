# Pip AI Backend

This folder turns Pip from a local browser prototype into a real backend-backed assistant.

## What Is Implemented

- Free setup/build chat at `POST /api/pip/chat`
- Local HydroPip RAG retrieval from `HydroPip_AIknowledge_base`
- RAG QA/search endpoint at `GET /api/pip/knowledge/search?q=feed%20schedule`
- Build-step tool data at `GET /api/pip/build-steps`
- Parts recommendation data at `GET /api/pip/parts?towerCount=4`
- Grow plan generation at `POST /api/pip/grow-plan`
- Subscription-gated reminder creation at `POST /api/pip/reminders`
- Health check at `GET /api/pip/health`

If `OPENAI_API_KEY` is not set, Pip uses deterministic HydroPip rules plus the local knowledge search. If `OPENAI_API_KEY` is set, Pip uses OpenAI with retrieved HydroPip context, tool calls, and the subscription boundary.

## RAG Cost Strategy

The current implementation does not require a paid vector database. It builds a local search index from Markdown and JSON files in `HydroPip_AIknowledge_base`.

That is the most efficient first version because the HydroPip knowledge base is still compact:

- no separate vector storage cost
- no file-search tool-call cost
- simple to update by editing Markdown files
- easy to QA with `/api/pip/knowledge/search`

Upgrade to OpenAI vector stores/file search later if the knowledge base becomes large enough to include many build transcripts, sensor manuals, customer logs, uploaded PDFs, or long-form video transcripts.

## Run Locally

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Open:

```text
http://localhost:8787
```

Run smoke checks:

```powershell
npm run smoke
```

Test retrieval:

```powershell
Invoke-RestMethod "http://localhost:8787/api/pip/knowledge/search?q=no%20runoff%20tower"
```

## Deploy On Render

This project includes `render.yaml`, so Render can read the service settings from the repo.

1. Push this folder to GitHub.
2. In Render, create a new Web Service from that repo.
3. Use these settings if Render does not import them automatically:
   - Build command: `npm install`
   - Start command: `npm start`
   - Health check path: `/api/pip/health`
4. Add environment variables:
   - `OPENAI_API_KEY`: your OpenAI API key.
   - `PIP_ALLOWED_ORIGINS`: `https://www.hydropip.com,https://hydropip.com`
   - `PIP_MODEL`: `gpt-5-mini`
5. Deploy, then open:

```text
https://your-render-service.onrender.com/api/pip/health
```

Healthy production output should look like:

```json
{
  "ok": true,
  "ai": true,
  "mode": "openai"
}
```

## Wix Embed Path

Once deployed, set this in the Wix page before loading `script.js`:

```html
<script>
  window.HYDROPIP_PIP_API_URL = "https://your-render-service.onrender.com";
  window.HYDROPIP_PIP_SUBSCRIPTION_ACTIVE = false;
  window.HYDROPIP_PIP_PLAN = "free";
</script>
```

The current site will call:

```text
POST https://your-pip-api.example.com/api/pip/chat
```

If the backend is unavailable, the chat falls back to the local rules so visitors are not left with a broken buddy.

## Subscription Boundary

Free:

- Build walkthrough
- Parts guidance
- Basic troubleshooting
- One generated grow plan

Pip Pro:

- Saved grow profiles
- Reminder delivery
- Historical pH/EC/TDS logs
- Sensor integrations
- Personalized schedule tuning over time

The placeholder reminder endpoint currently returns `402 subscription_required` unless `subscription.active` is true. Connect this to Wix Pricing Plans, Stripe, or another membership system before enabling paid saves.

## Production Hardening Checklist

- Add real member authentication before accepting saved reminders.
- Map Wix Pricing Plans or Stripe subscriptions to `subscription.active`.
- Store grow profiles and reminders in a database instead of browser state.
- Add scheduled reminder delivery through email, SMS, or push notifications.
- Add rate limiting and abuse protection before broad public launch.
- Log failed AI/tool calls so broken flows are visible quickly.
