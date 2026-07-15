# Aether Bionics landing Page - AI Usage Declaration

## Project Overview
**Aether Bionics** is a landing page designed and developed for a deep-tech bionics firm specializing in two distinct but technologically convergent domains: **Humanoid Robotics** (Aegis Platform) and **Rehabilitation Devices** (NeuroPulse Platform). The landing page achieves symmetric visual weight, presenting both domains as equal pillars of a unified engineering ecosystem.

- **Stack**: React (v18) + Vite (v5) + CSS3 (Vanilla)
- **Interactive Components**: Canvas Neural Net Background, Split-Screen Resizing Hero, Symmetrical Feature Grid, Specification Comparator Tabs, and a Dynamic Inquiry Form with responsive inputs.
- **Visual Design**: High-fidelity dark mode with neon glow accent states, glassmorphic overlays, custom scrollbar styling, and smooth scroll-triggered entry animations.

---

## Detailed AI Usage Declaration
In accordance with the submission guidelines, this document outlines how and where Antigravity AI was utilized during the design and development phases.

### 1. Architectural Design & Scaffolding
- **Scaffolding**: The AI was used to check `create-vite` CLI options (`npx create-vite@latest --help`) and script the non-interactive React project initialization.
- **Component Design Pattern**: The AI architected a modular React structure, dividing the single-page application into dedicated interactive layout modules (`SplitHero`, `ParticleBackground`, `TechShowcase`, `SpecComparison`, `SynergySection`, `ContactForm`).

### 2. High-Fidelity UI/UX & Styling
- **Interactive Split-Screen**: The AI authored the custom CSS and React state tracking that enables the 50/50 hero layout. Hovering over a domain expands it to 65% width while scaling down the other, shifting a glowing bionic split divider across the screen.
- **Glassmorphism & Neon Shadows**: The AI designed the custom theme variables in `src/index.css`, employing blur backdrops (`backdrop-filter`) and glow shadow transitions (`box-shadow: 0 0 25px rgba(0, 240, 255, 0.35)`).
- **Responsive Systems**: The AI constructed CSS media query break-points converting the horizontal split layout into a mobile vertical stack, maintaining symmetrical visual weight across both columns on smartphones.

### 3. Media Asset Generation (AI Artistry)
To avoid generic template placeholders, the AI's image generation tools were leveraged to build custom high-quality bionic assets:
- **`robot.png`**: A photorealistic, high-resolution render of a humanoid bionic android with soft cyan joint lights.
- **`rehab.png`**: A photorealistic, high-resolution render of an advanced wearable hand/forearm bionic exoskeleton sleeve with soft violet joint lights.
- The prompt structures, lighting definitions (cinematic, 8k), and aesthetics were crafted to align with the deep-tech brand.

### 4. Interactive Logic & Algorithms
- **Neural Net Background**: The AI coded a canvas-based node connection script in React. Particles float inside the viewport and draw glowing vector connectors when near each other, dynamically drawing a connection path to the user's cursor as it moves.
- **Scroll Observer**: The AI wrote a React-based `IntersectionObserver` hook in `src/App.jsx` that automatically flags elements with `.scroll-anim` as `.animated` when they scroll into the viewport, triggering smooth fade-and-rise transitions.
- **Inquiry Form Validation**: The AI wrote the state-driven validation script and responsive feedback alerts for the contact panel, including a simulated network delay and custom success state overlay.

### 5. Submission Packaging
- **PDF Compilation**: The AI engineered a Python script utilizing `fpdf2` to read this markdown file and compile it into a clean, formatted PDF (`ai_usage.pdf`) for upload.

---

## Technical Features Summary
| Metric / Feature | Humanoid Robotics (Aegis Platform) | Rehabilitation Devices (NeuroPulse) |
| --- | --- | --- |
| **Primary Theme Color**| Cyber Cyan (`#00f0ff`) | Radiant Violet/Magenta (`#d946ef`) |
| **Degrees of Freedom**| 44-DoF Actuated Joints | Up to 12-DoF Active Assist |
| **Telemetry Latency**  | < 2.5ms | < 1.2ms (Surface EMG translation) |
| **Compliance Standard**| Industrial Safety Envelope | FDA Class II Medical Compliance |
