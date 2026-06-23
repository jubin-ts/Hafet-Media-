# Hafet Media Solutions — Company Website

A stunning, production-quality single-page website for **Hafet Media Solutions**, a UAE-based premium provider of Digital Displays, Printed Media, 3D Signages, Supply, Installation, and Printing Works.

## 🌐 Overview

The website showcases all of Hafet Media Solutions' core business verticals with a dark luxury design theme derived from the company's brand colors (deep purple `#2D1B69` and gold `#C9A227`). It includes animated sections, floating WhatsApp integration, animated particle effects, and a fully responsive layout.

### Business Verticals Covered
- **Digital Displays** — Indoor/outdoor LED screens, video walls, interactive kiosks
- **Printed Media** — Banners, hoardings, vehicle wraps, event graphics
- **3D Signages** — Custom fabricated acrylic, metal, neon letters and illuminated signs
- **Supply** — Premium sourcing from global certified manufacturers
- **Installation** — Professional certified on-site installation
- **Printing Works** — Wide-format UV, solvent, dye-sub, and digital printing

## 📁 Project Structure

```
Hafet-Media-/
├── index.html                        # Main website (single-page)
├── assets/
│   ├── css/
│   │   └── style.css                 # Main stylesheet (dark purple/gold theme)
│   ├── js/
│   │   └── main.js                   # Interactions: particles, scroll reveal, counters, nav
│   └── images/
│       ├── logo.png                  # Company logo (extracted from HAFEET LOGO (1).pdf)
│       ├── led-display-hero.jpg      # Hero LED display full render
│       ├── display-hero-1.jpeg       # Embedded LED screen image from catalog
│       ├── display-outdoor-1.jpeg    # Outdoor LED screen
│       ├── display-flex-1.jpeg       # Flexible/creative LED
│       ├── led-indoor-feature.jpg    # Indoor LED section
│       ├── led-outdoor-feature.jpg   # Outdoor LED section
│       ├── led-flexible-feature.jpg  # Flexible LED section
│       ├── led-transparent.jpeg      # Transparent LED
│       ├── led-product1.jpg          # Product showcase
│       ├── led-application.jpg       # Applications showcase
│       ├── led-product-detail1.jpeg  # Product detail 1
│       ├── led-product-detail2.jpeg  # Product detail 2
│       ├── led-creative.png          # Creative LED/neon signs
│       ├── led-application2.jpeg     # Application photo 2
│       ├── led-outdoor2.png          # Outdoor render
│       └── led-rental.png            # Rental display render
├── Catalog-LED SCREEN-FTV 2026.pdf   # LED Screen Product Catalog (linked as download)
└── HAFEET LOGO (1).pdf               # Original company logo source file
```

## 🚀 How to View Locally

No build tools or server required. Simply open the HTML file in any modern browser:

```bash
# Option 1 — Direct open
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# Option 2 — With a local HTTP server (recommended for full asset loading)
python3 -m http.server 8080
# Then visit: http://localhost:8080

# Option 3 — VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

## ✨ Features

- **Stunning dark luxury design** with animated gradient backgrounds and particle effects
- **Fully responsive** — optimized for mobile, tablet, and desktop
- **Smooth scroll navigation** with active-link highlighting
- **Animated counters** (stats section triggered on scroll)
- **Scroll-reveal animations** for all major sections
- **Floating WhatsApp button** with pulsing ring animation — links directly to `wa.me/971545128212`
- **WhatsApp deep-link CTAs** throughout the page with pre-filled message context
- **Clickable email and phone** links site-wide
- **Downloadable LED catalog** PDF linked from Digital Displays section
- **Semantic HTML5** with ARIA labels for accessibility
- **Lazy loading** on all non-critical images
- **Zero external JS dependencies** — pure vanilla JavaScript

## 📞 Contact Details

| Channel | Details |
|---------|---------|
| Email | [info@hafetmedia.ae](mailto:info@hafetmedia.ae) |
| Phone / WhatsApp | [+971 54 512 8212](https://wa.me/971545128212) |

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#2D1B69` | Brand purple (from logo) |
| `--primary-dark` | `#1a0d3d` | Dark backgrounds |
| `--accent` | `#C9A227` | Gold highlights, CTAs |
| `--dark` | `#0d0720` | Page background |

## 📦 External Resources

- **Google Fonts** — [Inter](https://fonts.google.com/specimen/Inter) (self-loading via Google CDN)
- All images extracted from the company's own LED catalog (`Catalog-LED SCREEN-FTV 2026.pdf`)
- No third-party icon libraries used — SVG icons inlined directly

## 📄 Attribution

- LED display product images are sourced from the **FTV (Feitera Electronics) 2026 LED Screen Catalog** included in this repository, used for demonstration of Hafet Media's product offerings.
- Company logo extracted from `HAFEET LOGO (1).pdf` provided by Hafet Media Solutions.
