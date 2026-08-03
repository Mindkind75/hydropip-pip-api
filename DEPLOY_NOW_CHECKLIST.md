# HydroPip Pip AI Deployment Checklist

## What Is Ready

- A real Node/Express Pip API backend.
- OpenAI-backed chat when `OPENAI_API_KEY` is configured.
- Local HydroPip RAG from `HydroPip_AIknowledge_base`.
- Build, parts, grow-plan, knowledge-search, and subscription-gated reminder endpoints.
- Render deployment config in `render.yaml`.
- Wix front-end hook through `window.HYDROPIP_PIP_API_URL`.

## What You Need To Do

1. Create an OpenAI API key in the OpenAI platform dashboard.
2. Do not paste that key into chat or the Wix page.
3. Add the key as a secret environment variable on the backend host:

```text
OPENAI_API_KEY=your_key_here
```

4. Deploy this project to a Node host such as Render using `render.yaml`.
5. Confirm the health endpoint returns `ai: true`:

```text
https://your-render-service.onrender.com/api/pip/health
```

6. Add this before the HydroPip site script in the Wix embed:

```html
<script>
  window.HYDROPIP_PIP_API_URL = "https://your-render-service.onrender.com";
  window.HYDROPIP_PIP_SUBSCRIPTION_ACTIVE = false;
  window.HYDROPIP_PIP_PLAN = "free";
</script>
```

## Launch Behavior

Free visitors can ask Pip build questions, get parts guidance, troubleshoot, and generate an initial grow plan.

Pip Pro remains the paid boundary for saving grow profiles, in-app Planner and Calendar tasks, storing logs, and future sensor-driven scheduling. Push notifications arrive with the native apps.

## Next Hardening Step

After the API is live, connect subscription state from Wix Pricing Plans, Stripe, or another membership system so the site can safely decide when `HYDROPIP_PIP_SUBSCRIPTION_ACTIVE` should be true.
