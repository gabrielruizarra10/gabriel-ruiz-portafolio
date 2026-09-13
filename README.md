# Gabriel Ruiz — Portfolio

Personal portfolio for Gabriel Ruiz — Industrial Engineering & Advanced Manufacturing student at
Key Institute (El Salvador), Project Manager of Kinetic Racing (Formula SAE).

Built with **React 18 + Vite + Tailwind CSS + Framer Motion**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build + local preview:

```bash
npm run build
npm run preview
```

## Deploy (recommended: Vercel)

1. Push this folder to GitHub (`gabrielruizarra10` account — this repo can be the first one).
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Framework preset: **Vite**. No env vars needed. Deploy.

Any static host works too: `npm run build` outputs `dist/`, which is a plain static site
(Netlify, GitHub Pages, Cloudflare Pages).

## File structure

```
├── index.html                 # Meta, Open Graph / Twitter tags, fonts
├── public/
│   ├── favicon.svg
│   └── images/                # Real project photos (see list below)
├── src/
│   ├── main.jsx               # Entry point
│   ├── App.jsx                # Section composition + skip link
│   ├── index.css              # Tailwind + tokens, grid motifs, reduced-motion, focus states
│   ├── components/
│   │   ├── Navbar.jsx         # Fixed nav, scroll-spy, mobile drawer
│   │   ├── ScrollProgress.jsx # Top progress bar
│   │   ├── SectionHeading.jsx # Numbered kicker + big title
│   │   ├── Reveal.jsx         # Scroll reveal (reduced-motion aware)
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx           # Mouse-reactive engineering grid
│       ├── About.jsx
│       ├── Projects.jsx       # 01 Kinetic · 02 Tutoring · 03 Aulas Frescas · 04 Experiments
│       ├── Kinetic.jsx        # FLAGSHIP — gallery, role callout, timeline
│       ├── AISection.jsx      # 4 cards + interactive statement + "Why Claude?"
│       ├── Leadership.jsx     # BUILD / LEAD / CONNECT
│       ├── Recognition.jsx
│       ├── Skills.jsx
│       ├── Philosophy.jsx     # Black, reveal-on-scroll
│       └── Contact.jsx
```

## Content swap points (search for these)

| Where | What to swap |
|---|---|
| `src/sections/Contact.jsx` | GitHub link → repo URL once created |
| `public/images/aulas-frescas.*` | Real image for Aulas Frescas (currently labeled placeholder) |
| `public/images/future-project.*` | Image for "Other Experiments" when one exists |
| `src/sections/Projects.jsx` | Peer Tutoring repo/demo links if code is published |
| `src/sections/Leadership.jsx` | Add/adjust activities as they happen |

## Images already included

| File | Source |
|---|---|
| `kinetic-chassis.png` | Real photo — completed chassis in workshop |
| `kinetic-cad.png` | SolidWorks render with driver model |
| `kinetic-nx.png` | Siemens NX chassis model |
| `tutoring-platform.png` | Dashboard screenshot of the local app |

## Recommended additional images (optional)

- `aulas-frescas.jpg` — ~1600×1000 (4:2.5), the solar project or panel diagram
- `kinetic-team.jpg` — ~1600×1000, the full 14-member team (great for the gallery)
- `og-image.jpg` — 1200×630 dedicated share image (currently reuses the chassis photo)
