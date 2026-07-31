# Wix Pip Integration

Use this after the Pip API is deployed.

## Page Script Variable

Add this before the HydroPip site script loads:

```html
<script>
  window.HYDROPIP_PIP_API_URL = "https://your-render-service.onrender.com";
  window.HYDROPIP_PIP_SUBSCRIPTION_ACTIVE = false;
  window.HYDROPIP_PIP_PLAN = "free";
</script>
```

Replace `https://your-render-service.onrender.com` with the real Render URL.

## Free vs Pip Pro

Free visitors can:

- Ask setup and troubleshooting questions.
- Generate one grow plan from their profile.
- Get parts guidance and build steps.

Pip Pro should unlock:

- Saved grow profiles.
- Reminder delivery.
- Planting, trim, pH, EC/TDS, harvest, and reset schedules.
- Sensor-backed schedule tuning.
- Grow history and notes.

## Wix Subscription Wiring

The current front-end uses:

```js
window.HYDROPIP_PIP_SUBSCRIPTION_ACTIVE
window.HYDROPIP_PIP_PLAN
```

For production, replace those static values with the signed-in member's real plan status from Wix Members, Wix Pricing Plans, Stripe, or the chosen subscription system.

Until this is wired, saved reminders should stay locked and the backend will return `402 subscription_required`.
