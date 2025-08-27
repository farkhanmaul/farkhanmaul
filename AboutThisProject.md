# About This Project - Portfolio Farkhan Maul

## 📋 Deskripsi Project
Portfolio website pribadi yang dibangun dengan Next.js untuk showcase skills, experience, dan project-project yang telah dikerjakan. Website ini didesain dengan tampilan modern, animasi smooth, dan optimized untuk performance.

## 🛠️ Tech Stack & Versi

### Core Framework
- **Next.js**: `13.4.19` - React framework untuk production
- **React**: `18.2.0` - Library UI utama
- **TypeScript**: `5.1.6` - Type safety dan developer experience

### Styling & UI
- **Tailwind CSS**: `3.3.3` - Utility-first CSS framework
- **Autoprefixer**: `10.4.15` - CSS vendor prefixing
- **PostCSS**: `8.4.27` - CSS processing

### Animasi & Interaksi
- **GSAP**: `3.12.8` - Professional animation library
- **Lenis**: `1.1.13` - Smooth scrolling library
- **Cobe**: `0.6.4` - 3D interactive globe

### Icons & Assets
- **Phosphor Icons**: `2.1.7` - Icon library
- **React Device Detect**: `2.2.3` - Device detection

### Development Tools
- **ESLint**: `8.47.0` - Code linting
- **ESLint Config Next**: `13.4.19` - Next.js specific linting rules

## 📁 Struktur File & Direktori

```
src/
├── app/                    # Next.js 13 App Router
│   ├── globals.css        # Global CSS styles
│   ├── layout.tsx         # Root layout dengan metadata SEO
│   ├── page.tsx          # Home page utama dengan lazy loading
│   └── favicon.ico       # Website favicon
│
├── components/            # Reusable components
│   ├── home/             # Components spesifik untuk homepage
│   │   ├── Hero.tsx      # Section pembuka dengan greeting
│   │   ├── About.tsx     # Section tentang developer + globe 3D
│   │   ├── Experience.tsx # Timeline experience/education
│   │   ├── Projects.tsx  # Grid showcase project
│   │   └── Footer.tsx    # Contact section + footer
│   │
│   ├── ui/               # UI components reusable
│   │   ├── ContactCard.tsx    # Card untuk informasi kontak
│   │   ├── ProjectCard.tsx    # Card untuk showcase project
│   │   ├── TechBadge.tsx     # Badge untuk tech stack
│   │   └── LoadingFallback.tsx # Loading component untuk lazy loading
│   │
│   ├── sections/         # Layout components
│   │   └── Section.tsx   # Wrapper section dengan consistent styling
│   │
│   ├── PageMarker.tsx    # Component untuk navigation indicator
│   └── Twemoji.tsx      # Emoji component dengan accessibility
│
├── hooks/                # Custom React hooks
│   ├── useAnimation.ts   # GSAP animation hooks (hero, scroll)
│   └── useLenis.ts      # Smooth scrolling hook setup
│
├── lib/                  # Utilities & constants
│   ├── constants.ts      # Data statis (contacts, projects, tech badges)
│   └── mapRange.ts      # Math utility untuk mapping values
│
└── types/               # TypeScript type definitions
    └── global.d.ts      # Global type declarations

Config Files:
├── next.config.js       # Next.js configuration untuk GitHub Pages
├── tailwind.config.js   # Tailwind CSS configuration dengan custom animations
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies dan scripts
└── .eslintrc.json     # ESLint configuration
```

## 🔄 Alur Kerja & Data Flow

### 1. Entry Point (`src/app/page.tsx`)
- **Client Component** dengan `'use client'` directive
- **Lazy Loading**: Komponen About, Experience, Projects, Footer di-lazy load
- **Background**: 5 gradient blob dengan animasi rotate untuk full coverage
- **Smooth Scrolling**: Menggunakan Lenis library untuk UX yang smooth
- **URL-based Navigation**: Support scroll to section via URL parameter

### 2. Layout System (`src/app/layout.tsx`)
- **SEO Optimization**: Comprehensive metadata untuk social media dan search engines
- **PWA Features**: Manifest.json support untuk installable web app
- **Font Loading**: Inter dan JetBrains Mono fonts
- **Global Styles**: CSS reset dan base styles

### 3. Component Architecture

#### Home Components (`src/components/home/`)
- **Hero.tsx**: 
  - Greeting dengan emoji animation
  - Nama dengan typewriter effect menggunakan GSAP
  - CTA button dengan smooth scroll ke About section

- **About.tsx**:
  - Profesi dan lokasi dengan flag Indonesia
  - Interactive 3D Globe menggunakan Cobe library
  - Globe rotation berdasarkan scroll progress
  - Tech stack badges dengan hover effects

- **Experience.tsx**:
  - Vertical timeline design
  - Education dan experience data
  - Animated timeline dots dan connecting lines

- **Projects.tsx**:
  - Grid layout responsive untuk project cards
  - Data projects dari GitHub repositories
  - Hover animations dan visual effects

- **Footer.tsx**:
  - Contact information cards
  - Social media links
  - Copyright information

#### UI Components (`src/components/ui/`)
- **Reusable**: Semua UI components dibuat reusable
- **TypeScript**: Properly typed dengan interfaces
- **Accessibility**: ARIA labels dan semantic HTML
- **Hover Effects**: Consistent hover animations

### 4. Animation System (`src/hooks/useAnimation.ts`)
- **GSAP Integration**: Professional animations dengan ScrollTrigger
- **Performance Optimized**: Animations hanya trigger saat diperlukan
- **Responsive**: Animations work across different screen sizes
- **Smooth Transitions**: Consistent timing dan easing

### 5. Data Management (`src/lib/constants.ts`)
- **Static Data**: Semua data portfolio dalam satu file
- **Type Safety**: Menggunakan `as const` untuk immutable data
- **Easy Maintenance**: Centralized data management
- **Structured**: Terpisah per section (contacts, projects, tech badges)

## 🚀 Build & Deployment Process

### Development
```bash
npm run dev    # Development server di localhost:3000
```

### Production Build
```bash
npm run build  # Build untuk production dengan static export
```

### Deployment
- **Platform**: GitHub Pages
- **Automation**: GitHub Actions workflow
- **Static Export**: Next.js static export untuk hosting
- **Base Path**: `/farkhanmaul/` untuk GitHub Pages subdirectory
- **Asset Prefix**: Proper asset handling untuk GitHub Pages

### GitHub Actions Workflow
1. **Trigger**: Push ke branch `main`
2. **Install Dependencies**: npm install dengan caching
3. **Build**: npm run build dengan Next.js static export
4. **Deploy**: Upload ke GitHub Pages dengan proper configuration

## 🎨 Design System

### Color Palette
- **Primary**: Yellow (`#fbbf24`) - Accent color
- **Background**: Dark gradient dengan animated blobs
- **Text**: White primary, gray secondary untuk hierarchy
- **Cards**: Semi-transparent dengan backdrop blur

### Typography
- **Primary Font**: Inter - Clean dan readable
- **Monospace**: JetBrains Mono - Untuk code dan technical text
- **Hierarchy**: Consistent font sizes dengan responsive scaling

### Animations
- **Duration**: Fast (0.3s), Normal (0.6s), Slow (1.2s)
- **Easing**: Power3.out, back.out, elastic.out
- **Stagger**: 0.05s - 0.2s untuk sequential animations
- **ScrollTrigger**: Animations triggered based on scroll position

### Responsive Design
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile First**: Design prioritas mobile dengan progressive enhancement
- **Flexible Layout**: Flexbox dan Grid untuk responsive layouts

## 🔧 Configuration Files

### `next.config.js`
```javascript
// Konfigurasi untuk GitHub Pages deployment
output: 'export',           // Static export
basePath: '/farkhanmaul',   // GitHub Pages subdirectory  
assetPrefix: '/farkhanmaul/', // Asset URL prefix
distDir: 'out',            // Output directory
images: { unoptimized: true } // Static images untuk GitHub Pages
```

### `tailwind.config.js`
```javascript
// Custom animations untuk gradient blobs
animation: {
  'spin-slow': 'spin 20s linear infinite', // Slow rotation
  'first': 'moveVertical 30s ease infinite',
  'second': 'moveInCircle 20s reverse infinite',
  // ... more custom animations
}
```

## 📈 Performance Optimizations

### Code Splitting
- **Lazy Loading**: Components dimuat saat diperlukan
- **Suspense Boundaries**: Loading states untuk better UX
- **Dynamic Imports**: Reduces initial bundle size

### Bundle Optimization
- **Dependencies**: Hanya essential packages (392 packages total)
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Images dan fonts optimized

### SEO & Accessibility
- **Meta Tags**: Comprehensive social media meta tags
- **Structured Data**: JSON-LD untuk search engines
- **ARIA Labels**: Accessibility untuk screen readers
- **Semantic HTML**: Proper HTML5 semantic elements

## 🐛 Common Issues & Solutions

### Build Issues
- **Problem**: `EISDIR` error pada Windows
- **Solution**: Deploy via GitHub Actions instead of local build

### Animation Performance
- **Problem**: Laggy animations pada low-end devices
- **Solution**: `will-change` CSS property dan GPU acceleration

### Mobile Responsiveness
- **Problem**: Touch interactions pada mobile
- **Solution**: Proper touch events dan responsive breakpoints

## 🔄 Maintenance Guide

### Update Content
1. **Projects**: Edit `PROJECTS` array di `src/lib/constants.ts`
2. **Experience**: Edit `EXPERIENCES` array di `src/components/home/Experience.tsx`
3. **Contacts**: Edit `CONTACTS` array di `src/lib/constants.ts`
4. **Tech Stack**: Edit `TECH_BADGES` array di `src/lib/constants.ts`

### Add New Sections
1. Create component di `src/components/home/`
2. Import dan tambah ke `src/app/page.tsx` dengan Suspense
3. Update navigation jika diperlukan

### Update Dependencies
```bash
npm update          # Update semua dependencies
npm audit fix       # Fix security vulnerabilities
```

### Deploy Changes
```bash
git add .
git commit -m "Update content"
git push origin main  # GitHub Actions akan auto-deploy
```

## 📝 Development Notes

### Code Standards
- **TypeScript**: Strict mode enabled untuk type safety
- **ESLint**: Next.js recommended rules
- **Consistent Naming**: camelCase untuk functions, PascalCase untuk components
- **Comments**: JSDoc untuk functions, inline comments untuk complex logic

### Git Workflow
- **Branch**: `main` untuk production
- **Commits**: Conventional commit messages
- **Auto-deploy**: Push ke main trigger deployment

### Performance Monitoring
- **Lighthouse**: Regular performance audits
- **Bundle Analyzer**: Monitor bundle size growth
- **Core Web Vitals**: Track LCP, CLS, FID metrics

---

**Last Updated**: 27 Agustus 2025  
**Version**: 1.0.0  
**Author**: Farkhan Maul  
**Website**: [https://farkhanmaul.github.io/farkhanmaul/](https://farkhanmaul.github.io/farkhanmaul/)