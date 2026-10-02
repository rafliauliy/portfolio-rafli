# Muhamad Rafli Auliya — Personal Portfolio Website

A modern, fully responsive personal portfolio website built with React, Vite, and Tailwind CSS v4. Designed for a Software Automation Engineer with a background spanning industrial automation, IT/OT systems, full-stack web development, digital transformation, and a growing focus on Data Science and Machine Learning.

---

## Live Demo

> Deploy link — # Muhamad Rafli Auliya — Personal Portfolio Website

A modern, fully responsive personal portfolio website built with React, Vite, and Tailwind CSS v4. Designed for a Software Automation Engineer with a background spanning industrial automation, IT/OT systems, full-stack web development, digital transformation, and a growing focus on Data Science and Machine Learning.

---

## Live Demo

> Deploy link — [https://portfolio-rafli-lime.vercel.app/]

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI framework |
| Vite | 6.x | Build tool & dev server |
| JavaScript / JSX | ES2022+ | Language |
| Tailwind CSS | v4.x | Utility-first styling |
| @tailwindcss/vite | v4.x | Tailwind v4 Vite plugin |
| Lucide React | 0.469+ | Icon library |

---

## Project Structure

```
rafli-portfolio/
├── public/
│   ├── rafli.jpg               # Profile photo
│   └── resume_rafli.pdf        # Resume PDF
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar + mobile hamburger menu
│   │   ├── Hero.jsx            # Hero section with typewriter + floating code
│   │   ├── About.jsx           # About section with photo + bio + highlights
│   │   ├── Experience.jsx      # Professional timeline
│   │   ├── Projects.jsx        # Filterable project showcase
│   │   ├── Skills.jsx          # Skill categories with tag-based display
│   │   ├── DataAndML.jsx       # Data & ML section with pipeline visual
│   │   ├── CareerJourney.jsx   # Career progression visualization
│   │   ├── Contact.jsx         # Contact CTA + social links
│   │   └── Footer.jsx          # Minimalist footer
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── vite.config.js
├── package.json
└── README.md
```

---

## Features

- **Typewriter animation** on hero headline — characters appear one by one on page load
- **Floating code snippets** in hero background — VS Code-style syntax highlighting, fade in/out loop
- **Scan sweep animation** — subtle horizontal light sweep across hero background
- **Photo entrance animation** — slide from bottom-left with blur-to-clear effect on scroll
- **Filterable project grid** — filter by category (Industrial, Software, Automation, Power Platform, Data & ML)
- **Fully responsive** — mobile, tablet, and desktop layouts using JS-based breakpoint detection
- **Smooth scroll navigation** — all nav links scroll to section smoothly
- **Active section highlight** — navbar highlights current section on scroll
- **Resume download** — direct PDF download from navbar button
- **No percentage skill bars** — skills displayed as professional tag-based cards

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/rafliauliy/[repo-name].git
cd [repo-name]

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Configuration

### Adding Your Photo

Place your profile photo in the `public/` folder:

```
public/rafli.jpg
```

The photo is referenced in `About.jsx` as `/rafli.jpg`.

### Adding Your Resume

Place your resume PDF in the `public/` folder:

```
public/resume_rafli.pdf
```

The download link is configured in `Navbar.jsx`.

### Updating Contact Links

Contact information is stored in `Contact.jsx` and `Footer.jsx`:

| Field | Location | Current Value |
|---|---|---|
| Email | `Contact.jsx`, `Footer.jsx` | `rafliauliya1@gmail.com` |
| LinkedIn | `Contact.jsx`, `Footer.jsx` | `linkedin.com/in/muhamad-rafli-auliya-816112237` |
| GitHub | `Contact.jsx`, `Footer.jsx` | `github.com/rafliauliy` |

### Adding Project Links

Project links are stored in the `projects` array in `Projects.jsx`. Set `link` to a URL string or `null` for internal projects:

```js
{
  id: 1,
  name: 'Project Name',
  link: 'https://your-project-url.com',  // or null for internal
}
```

---

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#home` | Typewriter headline, terminal visual, tech badges |
| About | `#about` | Profile photo, bio, career journey steps, highlight cards |
| Experience | `#experience` | Vertical timeline with 4 professional experiences |
| Projects | `#projects` | 10 projects with category filters and live links |
| Skills | `#skills` | 6 skill categories with interactive tag display |
| Data & ML | `#data-ml` | Industrial data pipeline, ML project, foundation skills |
| Career Journey | `#journey` | 6-stage career progression visualization |
| Contact | `#contact` | CTA block with email, LinkedIn, GitHub cards |

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | `< 640px` | Single column, reduced font sizes, simplified layouts |
| Tablet | `640px – 1023px` | 2-column grids, adapted navigation |
| Desktop | `≥ 1024px` | Full multi-column layouts, all visual elements visible |

All breakpoints are handled via React state (`useState` + `useEffect` + `window.innerWidth`) — no CSS media query overrides.

---

## Deployment

This project can be deployed to any static hosting platform.

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Then:

```bash
npm run build
npm run deploy
```

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Muhamad Rafli Auliya**
Software Automation Engineer — Industrial Automation · IT/OT · Digital Transformation · Data & ML

- GitHub: [github.com/rafliauliy](https://github.com/rafliauliy)
- LinkedIn: [linkedin.com/in/muhamad-rafli-auliya-816112237](https://www.linkedin.com/in/muhamad-rafli-auliya-816112237/)
- Email: rafliauliya1@gmail.com


---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI framework |
| Vite | 6.x | Build tool & dev server |
| JavaScript / JSX | ES2022+ | Language |
| Tailwind CSS | v4.x | Utility-first styling |
| @tailwindcss/vite | v4.x | Tailwind v4 Vite plugin |
| Lucide React | 0.469+ | Icon library |

---

## Project Structure

```
rafli-portfolio/
├── public/
│   ├── rafli.jpg               # Profile photo
│   └── resume_rafli.pdf        # Resume PDF
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar + mobile hamburger menu
│   │   ├── Hero.jsx            # Hero section with typewriter + floating code
│   │   ├── About.jsx           # About section with photo + bio + highlights
│   │   ├── Experience.jsx      # Professional timeline
│   │   ├── Projects.jsx        # Filterable project showcase
│   │   ├── Skills.jsx          # Skill categories with tag-based display
│   │   ├── DataAndML.jsx       # Data & ML section with pipeline visual
│   │   ├── CareerJourney.jsx   # Career progression visualization
│   │   ├── Contact.jsx         # Contact CTA + social links
│   │   └── Footer.jsx          # Minimalist footer
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── vite.config.js
├── package.json
└── README.md
```

---

## Features

- **Typewriter animation** on hero headline — characters appear one by one on page load
- **Floating code snippets** in hero background — VS Code-style syntax highlighting, fade in/out loop
- **Scan sweep animation** — subtle horizontal light sweep across hero background
- **Photo entrance animation** — slide from bottom-left with blur-to-clear effect on scroll
- **Filterable project grid** — filter by category (Industrial, Software, Automation, Power Platform, Data & ML)
- **Fully responsive** — mobile, tablet, and desktop layouts using JS-based breakpoint detection
- **Smooth scroll navigation** — all nav links scroll to section smoothly
- **Active section highlight** — navbar highlights current section on scroll
- **Resume download** — direct PDF download from navbar button
- **No percentage skill bars** — skills displayed as professional tag-based cards

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/rafliauliy/[repo-name].git
cd [repo-name]

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Configuration

### Adding Your Photo

Place your profile photo in the `public/` folder:

```
public/rafli.jpg
```

The photo is referenced in `About.jsx` as `/rafli.jpg`.

### Adding Your Resume

Place your resume PDF in the `public/` folder:

```
public/resume_rafli.pdf
```

The download link is configured in `Navbar.jsx`.

### Updating Contact Links

Contact information is stored in `Contact.jsx` and `Footer.jsx`:

| Field | Location | Current Value |
|---|---|---|
| Email | `Contact.jsx`, `Footer.jsx` | `rafliauliya1@gmail.com` |
| LinkedIn | `Contact.jsx`, `Footer.jsx` | `linkedin.com/in/muhamad-rafli-auliya-816112237` |
| GitHub | `Contact.jsx`, `Footer.jsx` | `github.com/rafliauliy` |

### Adding Project Links

Project links are stored in the `projects` array in `Projects.jsx`. Set `link` to a URL string or `null` for internal projects:

```js
{
  id: 1,
  name: 'Project Name',
  link: 'https://your-project-url.com',  // or null for internal
}
```

---

## Sections

| Section | ID | Description |
|---|---|---|
| Hero | `#home` | Typewriter headline, terminal visual, tech badges |
| About | `#about` | Profile photo, bio, career journey steps, highlight cards |
| Experience | `#experience` | Vertical timeline with 4 professional experiences |
| Projects | `#projects` | 10 projects with category filters and live links |
| Skills | `#skills` | 6 skill categories with interactive tag display |
| Data & ML | `#data-ml` | Industrial data pipeline, ML project, foundation skills |
| Career Journey | `#journey` | 6-stage career progression visualization |
| Contact | `#contact` | CTA block with email, LinkedIn, GitHub cards |

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | `< 640px` | Single column, reduced font sizes, simplified layouts |
| Tablet | `640px – 1023px` | 2-column grids, adapted navigation |
| Desktop | `≥ 1024px` | Full multi-column layouts, all visual elements visible |

All breakpoints are handled via React state (`useState` + `useEffect` + `window.innerWidth`) — no CSS media query overrides.

---

## Deployment

This project can be deployed to any static hosting platform.

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Then:

```bash
npm run build
npm run deploy
```

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

**Muhamad Rafli Auliya**
Software Automation Engineer — Industrial Automation · IT/OT · Digital Transformation · Data & ML

- GitHub: [github.com/rafliauliy](https://github.com/rafliauliy)
- LinkedIn: [linkedin.com/in/muhamad-rafli-auliya-816112237](https://www.linkedin.com/in/muhamad-rafli-auliya-816112237/)
- Email: rafliauliya1@gmail.com
