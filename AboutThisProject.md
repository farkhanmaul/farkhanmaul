# 🌟 Portfolio Website - Technical Documentation

[![Next.js](https://img.shields.io/badge/Next.js-13.4.19-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-181717?style=flat&logo=github&logoColor=white)](https://pages.github.com/)

> A modern, interactive portfolio website built with Next.js, featuring professional experience, skills visualization, and smooth animations.

## 🚀 Live Demo

**[Visit Portfolio →](https://farkhanmaul.github.io/farkhanmaul/)**

## ✨ Features

### 🎨 Design & UX
- **Modern Poppins Typography** - Professional font choice for better readability
- **Responsive Design** - Mobile-first approach optimized for all devices
- **Smooth Animations** - GSAP-powered scroll triggers and transitions
- **Interactive 3D Globe** - Cobe.js integration showing location marker
- **Gradient Backgrounds** - Animated blur effects for visual appeal
- **Dark Theme** - Professional color scheme with yellow accents

### ⚡ Performance
- **Next.js 13.4** - App Router with static site generation
- **Lazy Loading** - Components load on demand for faster initial load
- **Optimized Images** - WebP format with proper sizing
- **Smooth Scrolling** - Lenis integration for butter-smooth navigation
- **Bundle Optimization** - Code splitting and tree shaking

### 🛠 Technical Features
- **Professional Experience Timeline** - Animated timeline with real work experience
- **Skills Visualization** - Interactive skill bars with categories
- **Statistics Counter** - Animated counters showing key achievements
- **Project Showcase** - Featured projects with tech stack highlights
- **Contact Integration** - Direct links to professional profiles
- **About Modal** - Detailed professional information popup

## 🛠 Tech Stack

### Core Technologies
- **Framework**: Next.js 13.4 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS with custom design system
- **Animations**: GSAP with ScrollTrigger
- **3D Graphics**: Cobe.js for interactive globe
- **Smooth Scrolling**: Lenis
- **Font**: Poppins (300-700 weights)

### Development Tools
- **Package Manager**: npm/pnpm
- **Version Control**: Git
- **Deployment**: GitHub Pages
- **Build**: Next.js static export
- **Linting**: ESLint with Next.js config

## 🏗 Project Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Poppins font
│   ├── page.tsx           # Main page with lazy loading
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── home/             # Page-specific components
│   │   ├── Hero.tsx      # Landing section
│   │   ├── About.tsx     # About section with 3D globe
│   │   ├── Experience.tsx # Professional timeline
│   │   ├── Projects.tsx  # Project showcase
│   │   └── Footer.tsx    # Contact section
│   ├── ui/               # UI components
│   │   ├── TechBadge.tsx # Technology badges
│   │   ├── ProjectCard.tsx # Project cards
│   │   ├── ContactCard.tsx # Contact cards
│   │   └── AnimatedCounter.tsx # Statistics counter
│   ├── sections/         # Layout components
│   ├── SkillsSection.tsx # Skills visualization
│   └── StatsSection.tsx  # Statistics section
├── hooks/                # Custom React hooks
│   ├── useAnimation.ts   # GSAP animation hooks
│   └── useLenis.ts       # Smooth scrolling
├── lib/                  # Utilities and constants
│   ├── constants.ts      # Static data (projects, skills, contacts)
│   └── mapRange.ts       # Utility functions
└── styles/               # Additional styles
```

### Key Components

1. **Hero Section** - Animated introduction with GSAP stagger animations
2. **About Section** - Interactive 3D globe with scroll-based rotation
3. **Stats Section** - Animated counters with intersection observer
4. **Experience Timeline** - Professional experience with hover effects
5. **Skills Section** - Interactive progress bars by category
6. **Projects Showcase** - Featured projects with tech stack
7. **Contact Section** - Professional contact information

## 🔧 Code Quality Standards

### DRY (Don't Repeat Yourself)
- Reusable components with proper props interfaces
- Centralized constants in `lib/constants.ts`
- Shared animation configurations
- Common utility functions

### KISS (Keep It Simple, Stupid)
- Simple state management with React hooks
- Clear component hierarchy and naming
- Minimal external dependencies
- Efficient data structures (Set vs Array for performance)

### SOLID Principles
- **Single Responsibility**: Each component has one clear purpose
- **Open/Closed**: Components are extensible without modification
- **Liskov Substitution**: Proper TypeScript interfaces
- **Interface Segregation**: Focused component props
- **Dependency Inversion**: Hooks for external dependencies

## 📱 Responsive Design Strategy

### Breakpoints
```css
/* Mobile First */
sm: '640px'   // Small devices
md: '768px'   // Medium devices  
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large devices
```

### Mobile Optimizations
- Reduced font sizes for better mobile readability
- Touch-friendly interactive elements
- Optimized globe size for small screens
- Simplified animations on mobile devices
- Proper viewport handling

## 🚀 Getting Started

### Prerequisites
```bash
Node.js 18+ 
npm or pnpm
Git
```

### Installation & Development
```bash
# Clone the repository
git clone https://github.com/farkhanmaul/j7portofolio.git

# Navigate to project directory
cd j7portofolio

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
```

### Building & Deployment
```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to GitHub Pages (automatic via GitHub Actions)
git push origin main
```

## 🎯 Performance Optimizations

### Loading Strategy
- **Hero Section**: Immediately loaded for instant interaction
- **Other Sections**: Lazy loaded with React Suspense
- **Images**: WebP format with proper sizing
- **Fonts**: Preloaded Google Fonts with display: swap

### Animation Performance  
- **GSAP**: Hardware-accelerated animations
- **Intersection Observer**: Efficient scroll-based triggers
- **Debounced Events**: Optimized scroll and resize handlers
- **Memory Management**: Proper cleanup of animation instances

## 🌟 Interactive Features

### 3D Globe Integration
```typescript
// Globe with scroll-based rotation
const globe = createGlobe(canvasRef.current, {
  devicePixelRatio: 1.5,
  width: 384 * 1.5,
  height: 384 * 1.5,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 12000,
  mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [255/255, 61/255, 50/255],
  glowColor: [1, 1, 1],
  opacity: 0.7,
  markers: [
    { location: [106.845599, -6.208763], size: 0.05 }, // Indonesia
  ],
  onRender: (state) => {
    state.phi = phi.current; // Controlled by scroll
  },
});
```

### Skills Visualization
- Interactive progress bars with smooth animations
- Categorized by Frontend, Backend, Database, Tools
- Intersection Observer for performance
- Set-based state management for efficiency

## 📊 Statistics & Metrics

### Key Numbers
- 🚀 **1+ Years** of professional development experience
- ⚡ **40+ REST APIs** built and maintained  
- 📚 **26+ Courses** completed in cloud computing and web development
- 🎓 **3.88 GPA** in Bachelor of Computer Science

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p><strong>Portfolio Website</strong> - Built with modern web technologies</p>
  <p>Showcasing professional experience and technical skills</p>
</div>