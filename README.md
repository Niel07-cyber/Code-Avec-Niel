
# CodewithNiel

A modern, interactive educational platform designed to teach programming skills through engaging courses, hands-on coding exercises, and comprehensive learning tools.

## 🌟 Features

### 🎓 Learning Platform
- **Interactive Course Catalog** - Browse and filter courses by category, difficulty level, and price
- **Video-Based Learning** - Integrated video player with progress tracking
- **Code Editor** - Built-in code editor for practicing programming exercises
- **Progress Tracking** - Monitor learning progress with detailed analytics
- **Achievement System** - Unlock badges and track milestones
- **Leaderboard** - Compete with other learners and see rankings

### 👤 User Experience
- **User Authentication** - Secure login and registration system
- **Personalized Dashboard** - Custom dashboard showing progress, enrolled courses, and recommendations
- **User Profiles** - Manage personal information and track learning journey
- **Shopping Cart** - Add courses to cart with coupon support
- **Subscription Plans** - Multiple subscription tiers with different features

### 🎨 Design & Accessibility
- **Modern UI/UX** - Clean, responsive design with dark/light mode support
- **3D Animations** - Engaging 3D elements and smooth animations
- **Accessibility Features** - Built-in accessibility settings and compliance
- **Mobile Responsive** - Optimized for all device sizes
- **Toast Notifications** - Real-time feedback and notifications

### 🛒 E-commerce
- **Course Purchasing** - Secure checkout process
- **Discount Codes** - Coupon system for promotions
- **Subscription Management** - Handle different membership levels
- **Cart Management** - Add, remove, and modify cart items

## 🚀 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality UI component library

### 3D & Animation
- **React Three Fiber** - 3D graphics and animations
- **Framer Motion** - Smooth animations and transitions

### State Management & Data
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Vite** - Development and build tooling

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/UI components
│   ├── 3d/              # 3D components and animations
│   ├── animations/      # Animation components
│   └── videos/          # Video player components
├── pages/               # Route components
│   ├── Index.tsx        # Landing page
│   ├── Dashboard.tsx    # User dashboard
│   ├── Courses.tsx      # Course catalog
│   ├── Profile.tsx      # User profile
│   └── ...
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── styles/              # Global styles and themes
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
```bash
git clone [repository-url]
cd codewithniel
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
Navigate to `http://localhost:5173` to view the application.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Design System

The application uses a comprehensive design system built with Tailwind CSS and CSS custom properties:

### Color Palette
- **Primary Colors** - Professional blue tones for main interface elements
- **Secondary Colors** - Complementary grays for backgrounds and text
- **Accent Colors** - Bright colors for highlights and call-to-action elements
- **Semantic Colors** - Success, warning, and error states

### Typography
- Modern, readable font stack optimized for learning content
- Consistent heading hierarchy and text sizing
- Proper contrast ratios for accessibility

### Dark Mode Support
Complete dark mode implementation with:
- Automatic system preference detection
- Manual toggle option
- Consistent color schemes across all components

## 🧩 Key Components

### Navigation
- **Responsive Navigation Bar** - Adaptive menu with mobile support
- **User Dropdown** - Quick access to profile and settings
- **Notification System** - Real-time updates and alerts

### Course Management
- **Course Cards** - Rich course previews with images and metadata
- **Course Detail Pages** - Comprehensive course information
- **Video Player** - Custom video player with progress tracking
- **Code Editor** - Integrated development environment for exercises

### User Interface
- **Dashboard Widgets** - Modular dashboard components
- **Progress Indicators** - Visual progress tracking
- **Achievement Badges** - Gamification elements
- **Shopping Cart** - E-commerce functionality

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow React hooks patterns
- Implement proper error boundaries
- Use semantic HTML elements

### Component Architecture
- Create small, focused components
- Use composition over inheritance
- Implement proper prop typing
- Follow single responsibility principle

### Styling Guidelines
- Use Tailwind utility classes
- Leverage design system tokens
- Ensure responsive design
- Maintain accessibility standards

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** - Full-featured experience with sidebar navigation
- **Tablet** - Adapted layouts with touch-friendly interfaces
- **Mobile** - Streamlined mobile experience with bottom navigation

## ♿ Accessibility Features

- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - Proper ARIA labels and roles
- **Color Contrast** - WCAG compliant color combinations
- **Focus Management** - Clear focus indicators
- **Accessibility Settings** - User-customizable accessibility options

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Environment Variables
Configure the following environment variables for production:
- API endpoints
- Authentication keys
- Feature flags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Quality
- All code must pass ESLint checks
- Components should be properly typed with TypeScript
- Follow existing code patterns and conventions

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by best practices in educational technology
- Designed for optimal learning experiences

---

**CodewithNiel** - Empowering the next generation of developers through interactive learning.
