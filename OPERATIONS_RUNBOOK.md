# HydroPip Production Operations Runbook

This runbook covers the live Wix, Render, PostgreSQL, OpenAI, GitHub, and email stack. Keep a printed copy in the business binder and a digital copy outside the production accounts.

## Daily checks during beta

1. Open the HydroPip Control Center and confirm service health is **Good**.
2. Review new tester feedback and any Pip answers marked not useful.
3. Check Render for failed deploys, restarts, HTTP 5xx responses, and slow-request warnings.
4. Check OpenAI usage for an unexpected increase in requests or spend.
5. Test Home, Track My Build, and one Pip question from a phone.

## Alert thresholds

- **Site unavailable:** investigate immediately.
- **Database not persistent or unhealthy:** stop promotion and investigate immediately.
- **HTTP 5xx errors:** investigate if more than three occur in 15 minutes.
- **Slow requests:** investigate repeated `http_slow_request` log events over 2,000 ms.
- **AI spend:** investigate a daily total more than twice the trailing seven-day average.
- **Checkout failure:** investigate any confirmed customer report immediately.
- **Affiliate part unavailable:** verify compatibility before replacing the link.

## First response

1. Capture the time, affected URL, account state, device, and a screenshot.
2. Check Render service status and logs using the request ID returned in the `X-Request-Id` response header when available.
3. Check PostgreSQL status and OpenAI status.
4. Reproduce with a private browser session without changing production data.
5. If a deployment caused the issue, roll Render back to the last known-good GitHub commit.
6. Record the incident, root cause, correction, and prevention step.

## Account recovery

| System | Recovery path |
|---|---|
| Wix | Account recovery email, 2FA recovery codes, then Wix Support |
| Render | Account recovery email and 2FA recovery codes; owner can change environment variables and roll back deploys |
| GitHub | Account recovery email, 2FA recovery codes, and repository recovery contacts |
| OpenAI | Account recovery and project key rotation; revoke a suspected key immediately |
| Email/domain | Registrar and mailbox recovery contacts; verify DNS before changing records |

Never send API keys, bridge secrets, admin keys, database URLs, recovery codes, or full session tokens by email or chat.

## Database backup and restore drill

1. Confirm Render PostgreSQL backups are current.
2. Once per quarter, restore the latest backup into a separate non-production database.
3. Point a temporary local/test service at the restored database.
4. Verify users, projects, conversations, reminders, readings, seeds, feedback, usage events, and credit ledger records.
5. Delete the temporary database after recording the successful restore date.

A backup is not considered verified until this restore drill succeeds.

## Wix recovery drill

1. Record the current published Wix revision and domain assignment.
2. Confirm the owner account can open Site History and preview a prior revision.
3. Confirm current Velo page code and backend files also exist in the local/GitHub recovery copy.
4. Do not publish the prior revision during a drill unless production recovery is required.

## Secret rotation

Rotate a secret immediately if it is exposed or a privileged account is compromised. Update both sides of each integration before revoking the old value.

1. `PIP_ADMIN_KEY`
2. `PIP_BRIDGE_SECRET`
3. OpenAI project API key
4. Database credentials when required
5. Any Wix secret used by the member bridge

After rotation, test member session exchange, Pip chat, Pip Pro entitlement, admin login, and account deletion.

## Deployment checklist

1. Run `npm run smoke`.
2. Run `npm run test:security`.
3. Run `npm run qa:site`.
4. Run `npm run qa:seo`.
5. Run `npm run qa:conversions`.
6. Run `npm run qa:pip` for prompt or knowledge changes.
7. Push only the intended files to `main`.
8. Confirm the Render deployment is healthy.
9. Verify Home, Track My Build, Pip, signup, and Pip Pro on desktop and phone.

## Quarterly access review

- Confirm 2FA remains enabled on Wix, Render, GitHub, OpenAI, email, and the domain registrar.
- Revoke unused sessions, collaborators, API keys, CLI tokens, and recovery methods.
- Run `npm audit --omit=dev` and review dependency updates.
- Complete the PostgreSQL and Wix recovery drills.
- Review Privacy, Terms, Safety, cancellation, and affiliate disclosures for product changes.
