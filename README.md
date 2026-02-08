# Preso3D 🌐

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-19.2.4-61DAFB.svg)
![Framer Motion](https://img.shields.io/badge/motion-12.0.0-purple.svg)

**Preso3D** is a next-generation, browser-based presentation platform that transforms static slides into immersive, cinematic 3D experiences. Built for the modern web, it leverages hardware-accelerated graphics to deliver parallax depth, fluid transitions, and interactive storytelling capabilities that captivate audiences.

> *"PowerPoint is for information. Preso3D is for impact."*

---

## ✨ Key Features

### 🚀 **Cinematic 3D Experience**
- **Parallax Depth Engine:** Slides react to mouse movement, creating a tangible sense of depth and layering.
- **3D Transitions:** Smooth, physics-based transitions between slides using spring animations.
- **Immersive Mode:** Distraction-free, full-screen presentation capability.

### 🛠 **Modern SaaS Architecture**
- **Component-Based Slides:** Modular slide architecture allowing for infinite scalability and easy content updates.
- **Responsive Design:** Fluid layouts that look stunning on desktops, tablets, and large displays.
- **Presentation Controls:**
  - **Keyboard Navigation:** Arrow keys, Spacebar, PageUp/Down.
  - **Focus Tools:** 'B' for Black screen, 'W' for White screen to shift focus to the speaker.
  - **Cursor Management:** Intelligent cursor hiding during presentation mode.

### 🎨 **Developer Experience**
- **Built with React 19:** Utilizing the latest concurrent features.
- **Tailwind CSS:** Utility-first styling for rapid UI development.
- **Framer Motion:** Production-grade animation library for complex gestures and layout transitions.

---

## 🎮 Controls

| Key / Action | Function |
|--------------|----------|
| `→` / `Space` | Next Slide |
| `←` | Previous Slide |
| `B` | Toggle Black Screen (Speaker focus) |
| `W` | Toggle White Screen (Illumination) |
| `Esc` | Exit Presentation Mode |
| `Mouse Move` | 3D Parallax Tilt (Standard Mode) |

---

## 🏗️ Technical Overview

Preso3D avoids heavy 3D libraries (like Three.js) for standard slides, instead opting for performant CSS3D transforms managed by Framer Motion. This ensures:
1.  **Lower Bundle Size:** Faster load times compared to WebGL-heavy decks.
2.  **Crisp Text Rendering:** Native DOM text rendering for perfect accessibility and SEO.
3.  **Ease of Customization:** Slides are just React components; if you know HTML/CSS, you can build a slide.

### Directory Structure

```
src/
├── components/
│   ├── slides/          # Individual slide components
│   ├── Slide3DContainer # The parallax physics engine
│   ├── SlideLayout      # HOC for consistent branding/layout
│   └── UIOverlay        # Navigation controls
├── App.tsx              # Main routing and state logic
└── types.ts             # TypeScript definitions
```

---

## 🚀 Roadmap

- [ ] **Visual Editor:** Drag-and-drop slide builder for non-technical users.
- [ ] **Cloud Sync:** Real-time collaboration via WebSockets.
- [ ] **Asset Library:** Integrated Unsplash and Icon search.
- [ ] **Export:** PDF and Video export pipelines.
- [ ] **Themes:** One-click theme switching (Dark/Light/Corporate).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by the Preso3D Team
</p>
