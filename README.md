# Premium Angular Portfolio

A modern, production-ready, pixel-perfect developer portfolio built with Angular 19, featuring advanced animations, smooth interactions, and a premium dark theme design.

## 🚀 Features

- ✨ **Modern Angular 19** - Built with standalone components
- 🎨 **Premium Dark Theme** - Beautiful gradient backgrounds and smooth transitions
- 🎭 **Advanced Animations** - GSAP and Angular Animations for smooth, professional motion
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized** - Lazy loading, OnPush strategy, optimized bundles
- ♿ **Accessible** - ARIA compliant with keyboard navigation
- 🎯 **SEO Ready** - Semantic HTML and meta tag support
- 🎪 **Interactive Components** - Animated navigation, progress bars, form validation

## 📂 Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── animations/           # Reusable animation definitions
│   │   │   ├── fade-in.animation.ts
│   │   │   ├── route.animation.ts
│   │   │   └── stagger.animation.ts
│   │   ├── services/             # Core services
│   │   │   ├── scroll.service.ts
│   │   │   └── theme.service.ts
│   │   └── models/               # TypeScript interfaces
│   │       ├── project.model.ts
│   │       └── skill.model.ts
│   ├── shared/                   # Shared components
│   │   └── components/
│   │       ├── navbar/
│   │       ├── footer/
│   │       ├── button/
│   │       └── section-title/
│   ├── pages/                    # Feature pages (lazy loaded)
│   │   ├── home/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── skills/
│   │   └── contact/
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── assets/
│   └── images/
└── styles.scss                   # Global design system
```

## 🎨 Design System

### Color Palette
- **Primary**: `#6366F1` (Indigo)
- **Accent**: `#22D3EE` (Cyan)
- **Background**: `#0F172A` (Dark Slate)
- **Surface**: `#1E293B` (Slate)
- **Text Primary**: `#F8FAFC` (White)
- **Text Muted**: `#94A3B8` (Gray)

### Typography
- **Font Family**: Inter
- **Scale**: 8px base system
- **Weights**: 400, 500, 600, 700, 800

### Spacing
- Uses an 8px spacing scale for consistency
- Section padding: 120px (desktop) / 80px (tablet) / 60px (mobile)

## 🛠️ Technologies

- **Angular 19** - Framework
- **TypeScript** - Language
- **SCSS** - Styling
- **GSAP** - Advanced animations
- **Angular Animations** - Route transitions and component animations
- **RxJS** - Reactive programming

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
ng serve

# Build for production
ng build --configuration production
```

## 🌐 Pages

### 1. Home
- Full-screen hero section with animated gradient background
- Floating profile image with GSAP animations
- Particle glow effects
- Smooth scroll indicator
- Call-to-action buttons

### 2. About
- Two-column layout with image and bio
- Animated stats cards
- Work experience timeline
- Education section
- Download CV functionality

### 3. Projects
- Responsive grid layout (3 columns → 2 → 1)
- Project cards with hover effects
- Image zoom on hover
- Tech stack tags
- GitHub and live demo links
- Stagger animations on scroll

### 4. Skills
- Categorized skills (Frontend, Backend, Tools)
- Animated progress bars with percentage
- Shimmer effects on progress fills
- Scroll-triggered animations
- Skill icons and proficiency levels

### 5. Contact
- Clean, centered form layout
- Floating label inputs with focus states
- Form validation with error messages
- Success/error notifications
- Contact information cards
- Input glow effects

## 🎭 Animations

### Angular Animations
- **Route Transitions**: Smooth fade and slide between pages
- **Fade In**: Components fade in as they enter the viewport
- **Stagger**: List items animate in sequence

### GSAP Animations
- **Floating Elements**: Continuous floating motion for hero image
- **Gradient Background**: Animated background gradients
- **Scroll Triggers**: Elements animate when scrolled into view
- **Progress Bars**: Animated fill with smooth easing

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 480px
- **Tablet**: < 768px
- **Desktop**: < 1024px
- **Large Desktop**: < 1200px

All components are fully responsive with optimized layouts for each breakpoint.

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Alt text for images
- Proper heading hierarchy

## ⚡ Performance

- **Lazy Loading**: All routes are lazy-loaded
- **OnPush Strategy**: Change detection optimization
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Lazy loading with `loading="lazy"`
- **Bundle Size**: Optimized chunks for faster loading

## 🎯 Customization

### Update Content

1. **Personal Information**: Edit `home.component.ts`
2. **Projects**: Update `projects.component.ts` data array
3. **Skills**: Modify `skills.component.ts` skill categories
4. **About**: Edit `about.component.ts` bio and experience
5. **Contact**: Update `contact.component.ts` contact info

### Update Images
Replace images in `src/assets/images/` directory

### Update Colors
Modify CSS variables in `src/styles.scss`

### Update Typography
Change font import and variables in `src/styles.scss`

## 🚀 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Netlify / Vercel
1. Connect your repository
2. Build command: `ng build --configuration production`
3. Publish directory: `dist/my-portfolio/browser`

### Custom Server
Build the project and serve the `dist/my-portfolio/browser` directory.

## 📝 Scripts

```bash
# Development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

## 🐛 Known Issues

None currently. Please report any issues you encounter.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Your Name - Full Stack Developer

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- GSAP for powerful animation library
- Google Fonts for Inter typeface
- Community for inspiration and resources

---

**Built with ❤️ using Angular**

*Last Updated: February 2026*
