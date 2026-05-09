# 🚀 AI Developer Portfolio - Bharath Kumar

A premium, futuristic AI Developer Portfolio Website built with React, Vite, Tailwind CSS, Framer Motion, and Three.js. Features stunning 3D animations, glassmorphism UI, neon glow effects, and smooth interactions.

## ✨ Features

- 🎨 **Modern Dark Theme** with neon blue/purple gradients
- 🌟 **3D Animations** using React Three Fiber
- ✨ **Smooth Animations** with Framer Motion
- 💎 **Glassmorphism UI** cards and effects
- 🎯 **Fully Responsive** design for all devices
- ⚡ **Fast Performance** with Vite
- 🎭 **Custom Cursor** with mouse-follow effects
- 📊 **Interactive Sections**: Hero, About, Skills, Experience, Projects, Contact
- 📧 **Contact Form** with EmailJS integration
- 🔝 **Scroll Progress** indicator
- 🎪 **Particle Background** with Three.js
- 📱 **Mobile-Friendly** navigation

## 🛠️ Technologies Used

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - 3D Graphics
- **Three.js** - 3D Library
- **React Icons** - Icon Library
- **EmailJS** - Email Service
- **React Type Animation** - Typing Effects

## 📦 Installation

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Steps

1. **Clone or navigate to the project**
   ```bash
   cd ai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎯 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 EmailJS Setup (Optional)

To enable the contact form:

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Update `src/components/Contact.jsx`:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formData,
     'YOUR_PUBLIC_KEY'
   )
   ```

## 🎨 Customization

### Personal Information

Update your details in these files:

1. **`src/components/Hero.jsx`** - Name, title, description
2. **`src/components/About.jsx`** - About section content
3. **`src/components/Skills.jsx`** - Your skills and expertise
4. **`src/components/Experience.jsx`** - Work experience and education
5. **`src/components/Projects.jsx`** - Your projects
6. **`src/components/Contact.jsx`** - Contact information
7. **`src/components/Footer.jsx`** - Footer details

### Colors

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  neon: {
    blue: '#00f0ff',
    purple: '#a855f7',
    pink: '#ec4899',
    cyan: '#06b6d4',
  }
}
```

### Fonts

Change fonts in `index.html` (Google Fonts link) and `tailwind.config.js`

## 📁 Project Structure

```
ai-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── FloatingCube.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── BackToTop.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md           # Documentation
```

## 🚀 Deployment

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy `dist` folder to Netlify

3. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/ai-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/ai-portfolio/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🎯 Features Breakdown

### Hero Section
- Animated typing effect
- 3D floating cube
- Social media links
- CTA buttons
- Statistics cards

### About Section
- Profile image with glow effect
- Professional description
- Feature cards
- Statistics

### Skills Section
- Animated progress bars
- Skill categories
- Technology icons
- Hover effects

### Experience Section
- Timeline layout
- Work experience
- Education
- Certifications

### Projects Section
- Project cards with hover effects
- Tech stack tags
- GitHub and demo links
- Featured projects

### Contact Section
- Contact form with validation
- EmailJS integration
- Contact information
- Social links

## 🎨 Design Features

- **Glassmorphism** - Frosted glass effect on cards
- **Neon Glow** - Glowing borders and text
- **Gradient Text** - Colorful gradient text effects
- **Smooth Animations** - Framer Motion animations
- **3D Elements** - Three.js 3D objects
- **Particle Background** - Animated particles
- **Custom Cursor** - Interactive cursor
- **Scroll Progress** - Progress bar on scroll
- **Loading Screen** - Animated loading screen

## 📱 Responsive Design

- **Desktop** - Full features with 3D elements
- **Tablet** - Optimized layout
- **Mobile** - Touch-friendly navigation

## ⚡ Performance

- Lazy loading components
- Optimized images
- Code splitting
- Fast build with Vite
- Minimal bundle size

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

MIT License - feel free to use this template for your portfolio!

## 👨‍💻 Author

**Bharath Kumar**
- Email: yourmail@gmail.com
- GitHub: [@yourgithub](https://github.com/yourgithub)
- LinkedIn: [yourlinkedin](https://linkedin.com/in/yourlinkedin)

## 🙏 Acknowledgments

- React Team
- Vite Team
- Tailwind CSS
- Framer Motion
- Three.js Community

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Email: yourmail@gmail.com

---

**⭐ If you like this portfolio, please give it a star!**

**Made with ❤️ using React, Vite, and Tailwind CSS**
