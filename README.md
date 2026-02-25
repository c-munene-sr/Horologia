# Haute Horlogerie - Parallax Scrolling Experience

Live Demo: https://c-munene-sr.github.io/Horologia/
## Project Overview
This project is an advanced implementation of parallax scrolling, inspired by the macro-photography and high-end aesthetic of the Moooi "A Life Extraordinary" benchmark. The theme focuses on *Haute Horlogerie* (High-End Watchmaking), inviting the user to scroll deep into the mechanical heart of a luxury timepiece.

## Technical Improvements Over the Base Sample
To ensure a premium, performant user experience, several architectural upgrades were made from the original sample repository:

1. **Vanilla JavaScript Engine:** Removed jQuery dependency in favor of modern, vanilla JavaScript.
2. **60FPS Hardware Acceleration:** Replaced CPU-heavy `top` positioning with GPU-accelerated CSS `transform: translate3d()` to eliminate layout thrashing and ensure buttery smooth scrolling.
3. **Data-Attribute Architecture:** Parallax speed and rotation values are decoupled from the JS and stored in HTML `data-speed` and `data-rotate` attributes, making the engine highly scalable for adding new elements.
4. **requestAnimationFrame:** Scroll events are throttled using the browser's native `requestAnimationFrame` to prevent stuttering.
5. **Intersection Observer API:** Implemented for performant, scroll-triggered fade-in animations on editorial content, replacing standard scroll-height checks.
6. **Depth of Field & Atmospheric Lighting:** Utilized CSS `filter: blur()`, `mix-blend-mode: screen`, and `drop-shadow` to simulate macro lens depth-of-field and realistic lighting environments.

## How to View
Simply visit the live deployment link above to experience the parallax universe.
