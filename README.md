# FormBridge2-Tally

FormBridge2-Tally is a lightweight web starter that connects a custom website UI to a **Tally** form embed.

It keeps the form area intentionally empty until you provide your Tally URL, so you can design first and connect data collection later.

---

## Overview

This project is the Tally-focused continuation of FormBridge.

You get:

- A custom, branded frontend page
- A dedicated form slot for Tally
- No backend server required
- Easy drop-in integration by editing one variable

---

## Why This Project Exists

Early-stage builders often need to:

1. Launch quickly with a polished website
2. Collect user submissions without building backend infrastructure

FormBridge2-Tally addresses this by combining:

- Fully customizable website UI
- Reliable hosted form collection via Tally

---

## Project Structure

```
FormBridge2-Tally/
  index.html     # Main website page
  style.css      # Visual design and responsive layout
  script.js      # Tally embed logic (set your URL here)
  README.md
```

---

## How It Works

1. The page loads with an empty form placeholder.
2. You add your Tally URL in `script.js` by setting `TALLY_FORM_URL`.
3. The script validates the URL and injects the Tally iframe into the form slot.
4. Visitors submit data directly through Tally.

---

## Quick Start

### 1) Open the project

From your workspace:

```powershell
cd "c:\Academic\Self Learning\FormBridge2-Tally"
```

### 2) Add your Tally link

In `script.js`, update:

```js
const TALLY_FORM_URL = "";
```

Example:

```js
const TALLY_FORM_URL = "https://tally.so/r/abcd12";
```

### 3) Run locally

Open `index.html` directly in your browser or serve it with any static server.

---

## Customization Guide

- Content text: edit sections in `index.html`
- Branding and theme: edit color variables in `style.css`
- Form slot behavior: adjust logic in `script.js`
- Embed size: change `.tally-iframe` height in `style.css`

---

## Notes and Limits

- This project does not handle custom backend validation.
- Advanced workflows (multi-step logic, third-party automation) should be configured in Tally and external tools.
- File handling and form capability depend on your Tally plan and form settings.
- Browser script blockers may prevent third-party embeds in rare cases.

---

## Suggested Production Setup

- Host on static platforms like GitHub Pages, Netlify, or Vercel.
- Add your own domain and SSL.
- Add analytics (for example, Plausible or Google Analytics) if needed.
- Keep your Tally form access/permissions configured in Tally dashboard.

---

## Roadmap Ideas

- Multiple Tally form slots on one page
- URL parameter prefill support
- Success-state animations and thank-you sections
- Optional anti-spam layer (captcha or custom checks)

---

## Comparison With FormBridge

- FormBridge: focused on Google Forms posting
- FormBridge2-Tally: focused on Tally iframe integration

Both follow the same principle: **custom website first, form backend second**.

---

## License

This project is licensed under the MIT License.