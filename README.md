# 🚀 Sobhareddy Pittu - Portfolio Website

A modern, fully-responsive portfolio website built with React, Vite, and Tailwind CSS.

**Live Demo**: [View Portfolio](https://sobhaportfolio.netlify.app)

---

## ✨ Features

- ⚡ Lightning fast with Vite HMR
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 🧩 Component-based architecture
- 🎭 Git-inspired experience timeline
- 📊 Interactive orbit skills display
- 🔒 Secure and accessible

---

## 🏗️ Project Structure

```
Portfolio/
├── src/
│   ├── components/                  # React components
│   │   ├── Navbar.jsx              # Navigation bar with section links
│   │   ├── Hero.jsx                # Landing section with headline
│   │   ├── Experience.jsx          # Work timeline with git-inspired UI
│   │   ├── Projects.jsx            # Scrollable project carousel
│   │   ├── Skills.jsx              # Orbit-style skill display
│   │   ├── Education.jsx           # Education & certifications
│   │   ├── Contact.jsx             # Contact form with email
│   │   ├── Footer.jsx              # Footer with links
│   │   └── Background.jsx          # Animated glitter particles
│   ├── data/
│   │   └── data.js                 # Centralized data exports
│   ├── assets/                     # Images and static files
│   ├── App.jsx                     # Root component orchestrating sections
│   ├── App.css                     # Component-specific styles
│   ├── index.css                   # Global styles & Tailwind imports
│   └── main.jsx                    # React entry point
├── public/                         # Static files
├── index.html                      # Main HTML template
├── package.json                    # Dependencies & scripts
├── vite.config.js                  # Vite build configuration
├── tailwind.config.js              # Tailwind CSS theme config
├── postcss.config.js               # PostCSS plugins
├── eslint.config.js                # Code quality rules
├── .gitignore                      # Git ignore patterns
└── README.md                       # Documentation
```

---

## 🌐 Website Structure

### Layout Hierarchy
1. **Navbar** (Fixed) - Always visible, navigates to sections
2. **Hero** - Main landing with introduction
3. **Experience** - Timeline of roles and positions
4. **Projects** - Horizontal carousel of work samples
5. **Skills** - Interactive circular skill display
6. **Education** - Academic credentials and courses
7. **Contact** - Form and contact information
8. **Footer** - Copyright and social links

----

### Component Architecture

**Navbar Component**
- Fixed header with gradient background
- Section navigation links (anchor-based)
- "Hire Me" CTA button
- Responsive mobile menu

**Hero Section**
- Availability status badge
- Main headline with accent color
- Value proposition text
- Action buttons and social links

**Experience Timeline**
- Expandable job cards
- Git-style commit hashes for visual interest
- Employment status indicator
- Technology stack tags
- Achievement bullets

**Projects Carousel**
- Horizontal scrolling with navigation arrows
- Project cards with descriptions
- Technology tags
- Smart link rendering (only shows if provided)

**Skills Display**
- Central hub with orbiting skill categories
- Click to show related skills in grid
- Smooth animations and transitions

**Education Section**
- Timeline visualization
- Expandable course details
- Certification cards
- Learning status indicator

**Contact Form**
- Name, email, message fields
- Email client integration
- Contact information display

**Footer**
- Social media links

---

### Styling Architecture

**CSS Organization**
- `index.css` - Global styles, Tailwind imports, animations
- `App.css` - Root component styles
- Component inline classes - Tailwind utilities for component-specific styles

**Theme System**
- CSS custom properties defined in `:root`
- Color variables: `--accent`, `--accent-soft`, `--bg-primary`
- Responsive breakpoints via Tailwind

---

### 🛠️ Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.3.1 - Build tool
- **Tailwind CSS** 4.2.1 - Styling
- **Lucide React** 0.575.0 - Icons
- **Framer Motion** 12.34.3 - Animations

---

### 🚀 Getting Started

#### Install & Run

```bash
# Clone and install
git clone https://github.com/SR-Pittu/Portfolio.git
cd Portfolio
npm install

# Development
npm run dev

# Production build
npm run build
```

---

### ✏️ Customize

Update your portfolio content in `src/data/data.js`. Use [data/sample-data.json](data/sample-data.json) as a reference for the data structure.


**Note**: `data/*.json` is ignored in git - maintain your content in `src/data/data.js`


Customize styling by modifying CSS variables in `src/index.css`:
```css
:root {
  --accent: #7c3aed;       /* Main accent color */
  --accent-soft: #a78bfa;  /* Lighter accent */
  --bg-primary: #fafafa;   /* Background */
}
```

---

### 🚀 Deploy

**Netlify**: Push to GitHub → connect repo → auto-deploys  
**Vercel**: Import project → one-click deploy  
**Other**: Build runs `npm run build` → deploy `dist/` folder

---

### 🔧 Troubleshooting

```bash
# Dev server issues
rm -rf node_modules package-lock.json
npm install && npm run dev

# Clear cache
rm -rf .vite && npm run build

# ESLint errors
npm run lint
```
---

### 👤 Author

**Sobhareddy Pittu**
- 🔗 [LinkedIn](https://linkedin.com/in/sobhareddy-pittu/)
- 🐙 [GitHub](https://github.com/SR-Pittu)

---

