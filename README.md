# Preso3D 🌐

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0.0-purple?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

> **"PowerPoint is for information. Preso3D is for impact."**

**Preso3D** is a high-fidelity, spatial presentation platform built for the modern web. It abandons the static constraints of traditional slide decks in favor of an immersive, component-driven architecture powered by **React 19** and **CSS3D Transforms**.

This repository contains the core engine alongside a full production demo deck: *"Mastering DevOps"*.

---

## 💎 Core Philosophy

Traditional presentations treat slides as static images. Preso3D treats them as **spatial experiences**.

1.  **Spatial Depth**: Using a custom parallax engine, elements exist on different Z-axis planes, reacting to mouse movement to create tangible depth.
2.  **Native DOM Rendering**: Unlike WebGL canvas renderers (Three.js), Preso3D uses standard HTML/CSS. This guarantees **100% text selectability**, **accessibility (screen readers)**, and **SEO**.
3.  **Physics-Based Motion**: Transitions are driven by `framer-motion` springs, not linear durations, ensuring animations feel fluid and organic.

---

## 🚀 Features

### 🎨 The Visual Engine
- **Hardware Accelerated CSS3D**: silky smooth 60fps animations on standard hardware.
- **Intelligent Parallax**: Backgrounds, content, and floating elements move at different velocities based on cursor position.
- **Cinematic Transitions**: Staggered entrances and exit animations orchestrated automatically.

### 🛠 Developer Experience
- **Everything is a Component**: Slides are React components. Use `useState`, `useEffect`, or import any npm package directly into your slide.
- **Tailwind Styling**: Rapidly prototype layouts using utility classes.
- **Zero Config Routing**: A simple array-based registry handles slide order and navigation.

### 🎮 Presentation Controls
| Key | Action |
| :--- | :--- |
| `→` / `Space` | Next Slide |
| `←` | Previous Slide |
| `B` | **Blackout Mode** (Focus on speaker) |
| `W` | **Whiteout Mode** (Illumination) |
| `Esc` | Exit Fullscreen |
| `F` | Toggle Fullscreen |

---

## 📦 Project Structure

The project is structured to separate the core engine from the content.

```bash
src/
├── components/
│   ├── slides/            # 📍 Content: Individual Slide Components
│   │   ├── MasteringDevOpsSlide.tsx
│   │   ├── GitFlowWorkflowSlide.tsx
│   │   └── ... (40+ demo slides)
│   ├── pages/             # Website Pages (Landing, About, Docs)
│   ├── Slide3DContainer   # ⚙️ Engine: Parallax & Tilt Logic
│   ├── SlideLayout        # 🎨 UI: Consistent Layout Wrapper
│   └── UIOverlay          # 🎮 UI: Navigation Controls
├── App.tsx                # Routing & State Management
└── types.ts               # TypeScript Interfaces
```

---

## ⚡ Quick Start

Preso3D is built on modern web standards.

### Prerequisites
- Node.js 18+
- NPM or Yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/preso3d.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

---

## 🖌 Creating a Slide

A slide is simply a React Functional Component exported into the `SLIDES` array in `App.tsx`.

```tsx
import React from 'react';
import SlideLayout from '../SlideLayout';
import { motion } from 'framer-motion';

export const MyNewSlide = ({ isPresenting }) => {
  return (
    <SlideLayout title="My Big Idea" id="01" isPresenting={isPresenting}>
      <div className="flex gap-4">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-blue-500 p-10 rounded-xl"
        >
          I can use standard Tailwind classes!
        </motion.div>
      </div>
    </SlideLayout>
  );
};
```

---

## 🗺 Roadmap

- [x] **Core Engine:** CSS3D Parallax & Physics Transitions
- [x] **React 19 Integration:** Concurrent rendering support
- [x] **Dark Mode:** Deep space aesthetic
- [ ] **Visual Editor:** Drag-and-drop builder
- [ ] **Remote Control:** WebSockets for phone-based control
- [ ] **PDF Export:** Server-side rendering to static assets

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  <strong>Preso3D</strong> — Built by <a href="https://sonuthomas.vercel.app/">Sonu Thomas</a>.
</p>