# Hit Zalavadiya Portfolio

A modern personal portfolio website built to showcase web development, creative design work, technical skills, featured projects, and contact details in a polished single-page experience.

Live website: [https://portfoliohit.netlify.app/](https://portfoliohit.netlify.app/)

## Overview

This project is a static portfolio site centered around a clean glassmorphism-inspired interface, responsive layouts, animated sections, and interactive project previews. It highlights both development work and design work, with a built-in resume viewer and direct links to LinkedIn, GitHub, and email.

## Features

- Responsive single-page portfolio layout
- Animated hero section with rotating role titles
- About, Skills, Projects, and Contact sections
- Interactive project showcase built with `Swiper.js`
- Project detail modal and design preview gallery
- Inline resume modal powered by `PDF.js`
- Mobile-friendly navigation and touch interactions
- Hosted live on Netlify

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- [Swiper.js](https://swiperjs.com/)
- [PDF.js](https://mozilla.github.io/pdf.js/)
- [Font Awesome](https://fontawesome.com/)
- Google Fonts

## Project Structure

```text
MY_PORTFILIO/
|-- index.html
|-- README.md
|-- TODO.md
|-- Resume.pdf
|-- resume/
|   `-- Resume.pdf
|-- icon/
|   `-- portfolio images, logos, favicon
|-- Blur-Slider-main/
|   |-- index.html
|   |-- script.js
|   |-- style.css
|   |-- image/
|   `-- icons/
`-- Glowing Product Card/
    |-- index.html
    |-- style.css
    `-- icon/
```

## Main Sections

- `Home` - introduction and animated role rotator
- `About` - short professional summary
- `Skills` - development and design tools overview
- `Projects` - featured development and design work
- `Contact` - direct links to LinkedIn, GitHub, and email
- `Resume Modal` - embedded PDF viewer with download/open actions

## Featured Work Shown In The Portfolio

- My Portfolio Website
- Booky - Stationery Website
- Image to SVG Converter
- Nexora-Design Platform
- Shivra - Events & Activities Platform
- Softhile Logo Design
- Coming Soon Banner Design

## Run Locally

This is a static frontend project, so there is no build step or package installation required.

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Open the project folder.

3. Run the site using any of these options:

- Open `index.html` directly in your browser
- Use the VS Code `Live Server` extension
- Serve the folder with any simple local static server

## Customization

You can quickly personalize or update the portfolio from these locations:

- `index.html` - main structure, styling, scripts, text content, links, and section layout
- `icon/` - profile image, favicon, and technology/design assets
- `Blur-Slider-main/image/` and `Blur-Slider-main/icons/` - project and preview imagery
- `Resume.pdf` - resume file used by the in-page resume viewer

If you update the live deployment, make sure the resume file path, external links, and preview images stay aligned with the content in `index.html`.

## Contact

- LinkedIn: [Hit Zalavadiya](https://www.linkedin.com/in/hit-zalavadiya-53a9093a0)
- GitHub: [HITZALAVADIYA](https://github.com/HITZALAVADIYA)
- Email: `zalavadiyahit19@gmail.com`

## Notes

- The main portfolio experience is contained in `index.html`.
- This repository also includes additional UI/design experiment folders such as `Blur-Slider-main` and `Glowing Product Card`.

