<div align="center"> <br /> <img src="https://raw.githubusercontent.com/your‑username/blanco‑cafe/main/public/readme/banner.png" alt="Blanco Cafe Banner" /> <br /> <div> <img src="https://img.shields.io/badge/-React-blue?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" /> <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /> </div> <h3 align="center">Blanco Café Interactive Menu & Site</h3> <div align="center"> A modern, animated café website showcasing our full menu and signature drinks, built with React, GSAP, and Tailwind CSS. </div> </div>
📋 Table of Contents
Introduction

Tech Stack

Features

Quick Start

Menu Data

Assets & Links

License

🤖 Introduction
Welcome to Blanco Café, your go‑to spot for gourmet burgers, hand‑cut fries, artisanal matcha, and specialty coffees. This repository powers our public site—complete with scroll‑triggered animations, a two‑tier tabbed menu, and slick GSAP effects to bring your browsing experience to life. Whether you’re craving a Double Smash Burger or a Signature Pistachio Latte, you’ll find it here in style.

⚙️ Tech Stack
React – A component‑based library for building our interactive UI and menu carousel.

GSAP – Drives all animations: fade‑ins, slide‑ins, leaf parallax, and menu tab transitions.

Tailwind CSS – Utility‑first styling ensures rapid, consistent design across breakpoints.

Vite – Lightning‑fast dev server and build tool for instant HMR and optimized production bundles.

🔋 Features
Two‑Tier Tab Navigation – Select a category (e.g., Burgers, Matcha, Mojitos) then dive into individual items with animated tab transitions.

GSAP Animations – Smooth fade/slide‑in of images and text whenever you switch tabs or scroll into a section.

Responsive Design – Fluid layouts for mobile, tablet, and desktop with Tailwind’s mobile‑first utilities.

Parallax Leaf Overlays – Decorative leaves subtly move as you scroll to add depth and branding flair.

Accessible Markup – Semantic HTML, ARIA labels on navigation, and keyboard‑focusable buttons.

Radial & Text Gradients – Eye‑catching backgrounds and heading treatments powered by CSS custom properties.

🤸 Quick Start
Get up and running locally in seconds:

Prerequisites
Git

Node.js (v16+)

npm or Yarn

Installation
bash
Copy
Edit
git clone https://github.com/ammar1zahid/Blanco.git
cd blanco‑cafe
npm install

# or

yarn install
Development
bash
Copy
Edit
npm run dev

# or

yarn dev
Open http://localhost:5173 to explore the site in your browser. Any code changes will hot‑reload immediately.

Production Build
bash
Copy
Edit
npm run build

# or

yarn build
🥗 Menu Data
All menu categories and items are stored in src/constants/menuCategories.js. Each entry includes:

name – Display name for the tab.

price – Item price in PKR.

title – Headline title shown in the details panel.

description – Item description.

image – High‑res Unsplash URLs for placeholder imagery.

Feel free to swap in your own images and adjust prices directly in the constants file.



📄 License
This project is open‑source under the MIT License. See LICENSE for details.

Enjoy exploring the flavors at Blanco Café—and happy coding! 😊
