#  Sobhareddy Pittu - Portfolio Website

A modern, fully-responsive portfolio website built with React, Vite, and Tailwind CSS.

**Live Demo**: [View Portfolio](https://sobha-portfolio.netlify.app/)

---

###  Features

-  Lightning fast with Vite HMR
-  Fully responsive design
-  Modern UI with smooth animations
-  Component-based architecture
-  Git-inspired experience timeline
-  Interactive orbit skills display
-  Email servicing with **EmailJS** integration
-  Secure and accessible

---

###  Project Structure

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
├── .env                          # Environment variables (e.g., EmailJS keys)
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
7. **Contact** - Form and contact information with email servicing
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
- **EmailJS integration** for secure email delivery
- Real-time form validation and status feedback
- Success/error messaging
- Contact information display (email, location)

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

###  Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.3.1 - Build tool
- **Tailwind CSS** 4.2.1 - Styling
- **Lucide React** 0.575.0 - Icons
- **Framer Motion** 12.34.3 - Animations
- **EmailJS** - Email service integration for contact forms


---

###  Email Servicing Setup

The portfolio includes **EmailJS integration** for handling contact form submissions directly to your inbox.

#### Configuration

1. **Get EmailJS Credentials**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service (Gmail, Outlook, etc.)
   - Create an email template
   - Copy your Service ID, Template ID, and Public Key

2. **Add Environment Variables**
   
   Create `.env` file in project root:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```


3. **EmailJS Template Variables**
   
   Your EmailJS template should use these variables:
   - `{{from_name}}` - Visitor's name
   - `{{from_email}}` - Visitor's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content



#### Features
- ✅ Real-time form validation
- ✅ Submit status feedback (sending, success, error)
- ✅ Secure credential handling via environment variables
- ✅ Automatic form reset on success
- ✅ Error handling with user-friendly messages
- ✅ Disabled submit button during sending


---

###  Getting Started

#### Install & Run

```bash
# Clone and install
git clone https://github.com/SR-Pittu/Portfolio.git
cd Portfolio
npm install

# Add environment variables
cp .env.example .env  # Update with your EmailJS credentials

# Development
npm run dev

# Production build
npm run build
```

---

###  Customize

Update your portfolio content in `src/data/data.js`. Edit the exported objects for contact, experience, skills, projects, education, and certifications.


Customize styling by modifying CSS variables in `src/index.css`:
```css
:root {
  --accent: #7c3aed;       /* Main accent color */
  --accent-soft: #a78bfa;  /* Lighter accent */
  --bg-primary: #fafafa;   /* Background */
}
```

---

###  Deploy

**Important**: Never commit `.env` with real credentials!

**Netlify**: 
- Push to GitHub → connect repo → auto-deploys
- Add environment variables in Netlify dashboard

**Vercel**: 
- Import project → one-click deploy
- Add environment variables in Vercel project settings

**Other**: Build runs `npm run build` → deploy `dist/` folder


---

###  Troubleshooting

```bash
# Dev server issues
rm -rf node_modules package-lock.json
npm install && npm run dev

# Clear cache
rm -rf .vite && npm run build

# ESLint errors
npm run lint
```

# Email not sending
# 1. Verify .env variables are set correctly
# 2. Check EmailJS dashboard for service/template status
# 3. Ensure email template variables match form field names


---

### 👤 Author

**Sobhareddy Pittu**
- 🔗 [LinkedIn](https://linkedin.com/in/sobhareddy-pittu/)
- 🔗 [GitHub](https://github.com/SR-Pittu)

---

