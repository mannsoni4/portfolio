# Personal Portfolio — Digital Product Builder

**Live site: https://mannsoni4.github.io/portfolio/**

A premium, minimal, single-purpose portfolio website. No frameworks, no build
step, no dependencies — just clean HTML, CSS, and vanilla JavaScript.
Hosted free on GitHub Pages from the repo `mannsoni4/portfolio`.

## Run it locally

Open `index.html` directly in a browser, or serve it properly:

```bash
cd D:\portfolio
python -m http.server 8080
# → http://localhost:8080
```

## How to edit your content

**Everything editable lives in one file: `assets/js/content.js`.**
Open it — every value is labelled with `EDIT:` comments.

| What                    | Where in `content.js` |
| ----------------------- | --------------------- |
| Name, role, email, location | `owner`            |
| Hero headline & intro   | `hero`                |
| About text & facts row  | `about`               |
| Capabilities list       | `skills`              |
| Projects + case studies | `projects`            |
| Process steps           | `approach`            |
| Email & social links    | `contact.links`       |
| Footer note, local time | `footer`              |

**Placeholders:** any text wrapped in `[square brackets]` renders as a visibly
marked placeholder (dimmed, dashed underline). Replace the brackets and their
content with real text when ready.

**Project images:** each project has a `preview` and `detail` image
(`{ src, alt, w, h }` in `content.js`). `w`/`h` are the real pixel size —
they keep the layout stable, so update them when you swap an image. Real
screenshots (any aspect ratio) work as-is; the SVG files are illustrations
for projects without screenshots yet.

**Adding a project:** copy one object inside `projects`, give it a unique
`slug` (lowercase, no spaces), and it automatically gets a card on the home
page and its own case-study page at `project.html?id=<slug>`.

## Structure

```
portfolio/
├─ index.html            Home page shell
├─ project.html          Case-study template (renders any project by ?id=)
├─ assets/
│  ├─ css/style.css      Design system — colors, type, layout, motion
│  ├─ js/content.js      ← ALL your content (the only file you edit)
│  ├─ js/main.js         Rendering + interactions (no need to touch)
│  └─ img/               Preview illustrations & favicon (replace with screenshots)
└─ README.md
```

## Design tokens

Change the look globally in `assets/css/style.css` under `:root` —
`--bg` (background), `--text` (type), `--accent` (the single accent color),
font families, and spacing.

## Deploy / update the live site

This site is already live on GitHub Pages — every push to `main` updates it
(usually live within a minute or two):

```bash
cd D:\portfolio
# …edit assets/js/content.js …
git add -A
git commit -m "Update content"
git push
```

To host elsewhere instead (all free): Netlify (drag the folder onto
app.netlify.com/drop), Vercel (`npx vercel`), or Cloudflare Pages.

Remember to update the `<title>` and meta tags in `index.html` if your
positioning changes.
