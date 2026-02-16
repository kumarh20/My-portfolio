# 🎨 Customization Guide

Quick reference for personalizing your portfolio.

## 📝 Content Updates

### 1. Home Page (Hero Section)
**File**: `src/app/pages/home/home.component.ts`

```typescript
// Update these properties:
name = 'Your Name';
title = 'Your Job Title';
description = 'Your description...';
profileImage = 'assets/images/your-photo.jpeg';
```

### 2. About Page
**File**: `src/app/pages/about/about.component.ts`

```typescript
// Update bio
bio = {
  title: 'About Me',
  paragraphs: [
    'Your bio paragraph 1...',
    'Your bio paragraph 2...',
    'Your bio paragraph 3...'
  ]
};

// Update experiences array
experiences: Experience[] = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'What you did...'
  }
];

// Update education
education: Education[] = [
  {
    degree: 'Your Degree',
    institution: 'University Name',
    period: '2014 - 2018',
    description: 'Details...'
  }
];

// Update stats
stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  // ... more stats
];
```

### 3. Projects Page
**File**: `src/app/pages/projects/projects.component.ts`

```typescript
projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description...',
    image: 'assets/images/project-image.jpeg',
    techStack: ['Angular', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-project.com',
    featured: true
  }
];
```

### 4. Skills Page
**File**: `src/app/pages/skills/skills.component.ts`

```typescript
skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'Angular', level: 95, category: 'frontend', icon: '🅰️' },
      // ... add your skills
    ]
  }
];
```

### 5. Contact Page
**File**: `src/app/pages/contact/contact.component.ts`

```typescript
contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+1 (123) 456-7890',
    link: 'tel:+11234567890'
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Your City, Country',
    link: null
  }
];
```

### 6. Footer
**File**: `src/app/shared/components/footer/footer.component.ts`

```typescript
socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin'
  },
  // ... more social links
];
```

## 🎨 Design Customization

### Colors
**File**: `src/styles.scss`

```scss
:root {
  // Change these values
  --primary: #6366F1;        // Main brand color
  --accent: #22D3EE;         // Accent color
  --bg-primary: #0F172A;     // Main background
  --bg-secondary: #1E293B;   // Card background
  --text-primary: #F8FAFC;   // Main text color
}
```

### Typography
**File**: `src/styles.scss`

```scss
// Change the Google Font import
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap');

// Update the font family
:root {
  --font-family: 'YourFont', sans-serif;
}
```

### Spacing
**File**: `src/styles.scss`

```scss
:root {
  // Adjust section padding
  --section-padding-mobile: 60px;
  --section-padding-tablet: 80px;
  --section-padding-desktop: 120px;
}
```

## 🖼️ Image Updates

### Replace Images
1. Add your images to `src/assets/images/`
2. Update the image paths in component files:
   - Home: `home.component.ts` → `profileImage`
   - About: `about.component.ts` → `profileImage`
   - Projects: `projects.component.ts` → `image` property

### Image Naming Convention
- Use descriptive names: `profile-photo.jpg`, `project-1.jpg`
- Recommended formats: JPEG for photos, PNG for graphics
- Optimize images before adding (compress to reduce size)

## 🎭 Animation Customization

### Disable Animations
To disable specific animations, remove or comment out the animation in the component:

```typescript
// Before
@Component({
  animations: [fadeInUp, listAnimation]
})

// After (no animations)
@Component({
  animations: []
})
```

### Adjust Animation Speed
**File**: `src/styles.scss`

```scss
:root {
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🔧 Advanced Customization

### Add New Page
1. Create new component: `ng generate component pages/blog`
2. Add route in `app.routes.ts`:
```typescript
{
  path: 'blog',
  loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
}
```
3. Add to navbar in `navbar.component.ts`:
```typescript
navLinks: NavLink[] = [
  // ...existing links
  { label: 'Blog', path: '/blog' }
];
```

### Change Layout Width
**File**: `src/styles.scss`

```scss
:root {
  --max-width: 1200px;  // Change to your preferred width
}
```

### Modify Button Styles
**File**: `src/app/shared/components/button/button.component.scss`

Customize colors, sizes, hover effects, etc.

## 📱 Responsive Adjustments

Breakpoints are defined in media queries:
- Mobile: `@media (max-width: 480px)`
- Tablet: `@media (max-width: 768px)`
- Desktop: `@media (max-width: 1024px)`

Adjust values in component SCSS files as needed.

## 🚀 Performance Tips

1. **Optimize Images**: Use tools like TinyPNG or ImageOptim
2. **Lazy Load Images**: Already implemented with `loading="lazy"`
3. **Minimize Animations**: Remove unnecessary animations on slower devices
4. **Bundle Analysis**: Run `ng build --stats-json` and analyze with webpack-bundle-analyzer

## 💡 Pro Tips

1. **Consistency**: Maintain consistent spacing and sizing throughout
2. **Content First**: Update all placeholder content before deploying
3. **Testing**: Test on multiple devices and browsers
4. **Accessibility**: Keep color contrast ratios above 4.5:1
5. **SEO**: Add meta tags in `index.html` for better SEO

## 📞 Need Help?

Check the main `README.md` for more detailed documentation.

---

**Happy Customizing! 🎉**
