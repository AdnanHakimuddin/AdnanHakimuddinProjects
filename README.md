# Adnan Hakimuddin — Portfolio

Static site: HTML, CSS and vanilla JavaScript. No build step and no dependencies — it runs directly on GitHub Pages. The Geist and Geist Mono fonts (SIL Open Font License) are self-hosted in `assets/fonts/`.

## Structure
| Path | What it is |
|---|---|
| `index.html` | Home: hero, featured work, services, process, engineering standards, about & experience, product demos, contact |
| `projects.html` | All projects, with type filter, Featured / With video toggles, search, and hover video previews |
| `case-study.html` | Case study page, rendered from data: `case-study.html?p=<slug>` |
| `assets/data.js` | **All content**: profile, experience, featured order, projects and case studies |
| `assets/site.js` | Behaviour: navigation, video player, screenshot lightbox, filters, case study rendering |
| `assets/style.css` | Design system and layouts |
| `assets/media-sizes.js` | Image dimensions, used to prevent layout shift (generated — see below) |
| `case-studies/<project>/` | Screenshots |
| `videos/` | Demo videos and their poster images |
| `tools/media-sizes.py` | Regenerates `assets/media-sizes.js` |

## Editing content (`assets/data.js`)
- **Featured projects** — `window.FEATURED` lists the four home-page projects by slug, in order.
- **Project fields** — `title`, `short`, `type` (`Business system` or `Website`, used by the filter), `domain`, `year`, `status`, `summary`, `problem`, `outcomes`, `poster`, `video`, `demo`, `repo`, `live`.
- **Videos** — `video: { src, poster, length, caption }`. `demo` is an optional longer video shown on the case study page instead.
- **Case studies** — `cs: { headline, intro, meta, sections }`. Each section has a `type`:
  `text`, `issues`, `flow` (diagram), `features`, `roles` (table), `decisions`, `metrics`, `table` (numeric), `list` (columns), `timeline`, `screens` (screenshot gallery with lightbox).
  `id` and `nav` set the anchor and the label in the "On this page" list.

After adding or replacing images, run:
```bash
python3 tools/media-sizes.py
```

## Publishing on GitHub Pages
1. Create a repository named `AdnanHakimuddin.github.io` (or any name, e.g. `portfolio`).
2. Upload everything, keeping the folder structure, and commit. Files are under GitHub's 25 MB web-upload limit.
3. **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.**
4. Live in 1–2 minutes at `https://adnanhakimuddin.github.io` (or `/portfolio/`).

```bash
git init && git add . && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/AdnanHakimuddin/AdnanHakimuddin.github.io.git
git push -u origin main
```
