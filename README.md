# SkillTrail — PS 26135 Web App (Starter Build)

Track the journey. Verify the outcome.

## What's in this build

A single React (Vite + Tailwind) web app with role-based views:

- **/** — Overview: state-level stats, retention & wage charts, map preview
- **/trainee** — Trainee Cockpit (mobile-first, Career Passport QR, journey timeline, IVR/WhatsApp fallback)
- **/employer** — Employer Hub (one-tap employment confirmation)
- **/districts** — District Explorer (interactive Leaflet GIS map + sortable table, 15 Maharashtra districts)
- **/fraud** — Placement Fraud Detector (rule-based risk flags)
- **/roadmap** — Native Mobile App roadmap (phase 2, mockup screens)

All data in `src/data/` is **synthetic/demo data**, clearly commented as such — swap in real or more
detailed datasets as you get them.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build for deployment (Vercel/Netlify/etc.):

```bash
npm run build
```

Output goes to `dist/`.

## What to build on next, in priority order

1. Wire the Employer Hub buttons to a real backend (FastAPI) endpoint instead of local state
2. Replace the synthetic `src/data/*.js` files with real API calls
3. Add the real ML root-cause model (logistic regression / small XGBoost) behind the Fraud Detector page
4. Hook up an actual IVR provider (Twilio/Exotel) behind the "Request IVR call-back" button
5. Add auth/RBAC before this touches any real trainee data

## Notes

- Dark mode and language toggle are working UI stubs — dark mode is fully functional (Tailwind `dark:` classes), the language toggle currently only swaps the button label and needs a real i18n string table to go further.
- The GIS map uses real district coordinates with OpenStreetMap tiles; the outcome numbers per district are illustrative, not real government data.
- This is a demo/prototype for SIH 2026, not a production system — no real trainee PII should be entered into it as-is.
