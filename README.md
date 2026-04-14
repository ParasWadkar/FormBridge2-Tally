# FormBridge2-Tally

I built this as a follow-up to my original [FormBridge](https://github.com/ParasWadkar/FormBridge) project. The idea is simple — you want a proper custom website with your own design, but you don't want to build a whole backend just to collect form submissions. So this project uses [Tally](https://tally.so) to handle all of that, while you keep full control of how your site looks.

---

## What This Is

FormBridge2-Tally is a lightweight, no-backend web starter that embeds a Tally form directly into a custom HTML/CSS/JS frontend. You get a clean, responsive landing page that you fully own, and Tally handles all the data collection on the backend.

No servers. No databases. No API layer. Just drop in your Tally link and you're live.

---

## Why I Made This

Most early-stage projects hit the same wall — you need to launch quickly, but you also need to collect user information (signups, feedback, waitlist entries, etc.). Setting up a backend for that is overkill at early stages, and using a raw Tally embed looks unpolished on a real site.

This project solves that by giving you:

- A proper branded frontend you can actually customize
- A clean slot where your Tally form lives as an iframe
- A setup so simple you can go from zero to live in under 10 minutes

---

## Project Structure

```
FormBridge2-Tally/
  index.html     → Main landing page
  style.css      → All styles, responsive layout, color variables
  script.js      → Tally embed logic (this is where you set your URL)
  README.md
```

---

## How It Works

1. The page loads with a placeholder where the form will go
2. You set your Tally form URL in `script.js` by updating one variable
3. The script validates the URL and injects the Tally iframe into that slot
4. From that point on, every submission goes straight to Tally — nothing touches your code

---

## Getting Started

### Step 1 — Navigate to the project

```powershell
cd "c:\Academic\Self Learning\FormBridge2-Tally"
```

### Step 2 — Add your Tally link

Open `script.js` and find this line:

```js
const TALLY_FORM_URL = "";
```

Replace the empty string with your Tally share URL:

```js
const TALLY_FORM_URL = "https://tally.so/r/abcd12";
```

You can find this URL by opening your Tally form → Share → Copy link.

### Step 3 — Open it up

Just open `index.html` in your browser. Or use any static server if you prefer. That's it.

---

## Customization

Everything is split cleanly so it's easy to change one thing without breaking another:

- **Page content** — edit the text and sections directly in `index.html`
- **Colors and fonts** — all CSS variables are at the top of `style.css`, change them in one place
- **Form size** — the `.tally-iframe` height is in `style.css`, adjust it to fit your design
- **Embed behavior** — all the iframe inject logic lives in `script.js`

---

## Deploying

This is a fully static project, so you can host it anywhere:

- **GitHub Pages** — free, easy, works out of the box for public repos
- **Netlify** — drag and drop the folder and you're live
- **Vercel** — same as Netlify, great if you're already using it for other things

For a proper production setup I'd also recommend:
- Connecting a custom domain
- Enabling HTTPS (both Netlify and Vercel handle this automatically)
- Adding lightweight analytics if you need them (Plausible is a good privacy-friendly option)

---

## Things to Know

- This project does not do any custom form validation on the frontend beyond basic HTML. If you need conditional logic, required field rules, or multi-step flows, configure all of that inside Tally.
- File uploads, payment fields, and advanced features depend on your Tally plan.
- In rare cases, browser extensions that block third-party iframes (like aggressive ad blockers) might prevent the embed from loading. Nothing you can do about that from the frontend side.

---

## What's Next (Roadmap Ideas)

Some things I'm thinking about adding down the line:

- Support for multiple Tally form slots on one page
- URL parameter prefill so you can pass in user data automatically
- A proper success state animation after form submission
- Optional lightweight anti-spam layer

---

## How This Compares to FormBridge

| | [FormBridge](https://github.com/ParasWadkar/FormBridge) | FormBridge2-Tally |
|---|---|---|
| **Form backend** | Google Forms (POST) | Tally (iframe embed) |
| **Integration method** | HTML form with `action` URL | Injected iframe via JS |
| **Setup** | Map `entry.ID` fields manually | Paste one URL |
| **Customization** | Full control over fields | Full control over page design |

Both follow the same principle — build your frontend your way, let someone else handle the data. Check out [FormBridge](https://github.com/ParasWadkar/FormBridge) if you need the Google Forms version.

---

## License

MIT — use it however you want, for personal projects or client work.