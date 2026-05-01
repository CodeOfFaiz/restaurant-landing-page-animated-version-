# Restaurant Landing Page — Upgraded

React 19 + Tailwind CSS v4 + Vite 6

## Get Started

```bash
npm install
npm run dev
```

## What Was Changed & Added

### 🐛 Bug Fixes
- **HowItWorks**: "Easy Payment Methods" step was incorrectly labeled "Free And Fast Delivery" — fixed
- **HowItWorks**: Added missing section title
- **App.jsx**: Fixed incorrect Footer import path (`footer` → `Footer`)
- **Navbar**: `useState` was imported but never used — now powers a real working mobile menu

### 🎬 Animations Added
- **Scroll-reveal** (`useReveal` hook) on every section using `IntersectionObserver` — elements fade up / slide in from left or right as you scroll
- **Hero**: Text slides in from left, burger image slides in from right on page load
- **Burger image**: Continuous smooth floating animation
- **Order Now button**: Pulsing red glow ring animation
- **Navbar**: Slides down from top on page load

### 🎨 UI Improvements
- **Navbar**: Working animated hamburger menu for mobile with smooth open/close, sticky shadow-on-scroll, red CTA button
- **Hero**: Added badge, quick stats (customers/items/rating), two CTA buttons, decorative blur blobs, dark overlay improved
- **Cards (Speciality, Popular, How It Works)**: Hover lift effect (`card-lift`), image zoom on hover, color transitions
- **PopularFoods**: Image zooms on hover with dark overlay; star ratings rendered programmatically instead of emoji
- **Gallery**: Zoom-on-hover for each image with overflow clip
- **Testimonials**: Quote icon, red avatar border, hover border glow
- **OrderNow**: Success state after form submission with 🎉 animation; form fields have red focus ring
- **Footer**: Three-column layout with brand info, quick links, contact details; scroll-to-top button only appears after scrolling 400px

### 🧹 Code Quality
- **PopularFoods & Speciality**: Repetitive card JSX replaced with data arrays + mapped components
- **HowItWorks**: Steps defined as a data array — easy to add/remove/reorder steps
- **Testimonials**: Reviews in a data array — easy to update
- **Footer**: Social links, nav links, contact info all in arrays

### 📦 Stack
- React 19
- Tailwind CSS v4 (CSS-first config via `@theme`)
- Vite 6
- Google Fonts: Poppins
