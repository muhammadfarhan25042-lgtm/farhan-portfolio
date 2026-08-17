## 📁 **README.md**

# 🚀 Portfolio Dashboard — Personal Command Center

> **Data-driven professional portfolio** built with vanilla HTML, CSS, and JavaScript.  
> Designed as a SaaS-style dashboard, not just a static portfolio.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-6c5ce7?style=for-the-badge&logo=githubpages&logoColor=white)](https://your-username.github.io/portfolio)
[![Made with](https://img.shields.io/badge/Made%20with-HTML%20%26%20CSS%20%26%20JS-0f1117?style=for-the-badge&logo=html5&logoColor=white)](https://)
[![License](https://img.shields.io/badge/License-MIT-4ade80?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](https://github.com/your-username/portfolio/pulls)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture & Data Flow](#-architecture--data-flow)
- [Use Case Diagram](#-use-case-diagram)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Deployment](#-installation--deployment)
- [Customization Guide](#-customization-guide)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 📖 Overview

**Portfolio Dashboard** is a modern, data-driven personal portfolio designed to look like a **professional command center**. It presents your professional identity, projects, skills, and activity analytics in a single, clean interface — perfect for developers, designers, and tech professionals who want to stand out.

Unlike traditional static portfolios, this dashboard is **fully configurable via a single data file** (`data.js`), making it easy to update content without touching HTML or CSS.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📊 **Overview Stats** | Quick glance at projects, repos, skills, and experience |
| 👤 **About Section** | Professional bio with tech tags |
| 📁 **Featured Projects** | Cards with status (active/archived), tech stack, and live links |
| ⚡ **Tech Stack** | Grouped by category (Frontend, Backend, DevOps, etc.) |
| 📈 **Activity Analytics** | Contribution bars & project category distribution |
| 💼 **Experience Timeline** | Work history with visual timeline |
| 🎨 **SaaS-Style UI** | Dark mode, sidebar navigation, smooth animations |
| 📱 **Fully Responsive** | Works on all screen sizes |
| 🔄 **Data-Driven** | Update `data.js` → dashboard updates instantly |
| 📄 **Download CV** | One-click CV download (configurable) |

---

## 🏗️ Architecture & Data Flow

```mermaid
flowchart TB
    subgraph DATA["📦 Data Layer"]
        D1[data.js<br/>Central Configuration]
    end

    subgraph LOGIC["⚙️ Logic Layer"]
        L1[app.js<br/>Render Engine]
        L2[Navigation Controller]
        L3[Event Handlers]
    end

    subgraph UI["🎨 UI Layer"]
        U1[index.html<br/>Structure]
        U2[style.css<br/>Styling]
        U3[Dynamic DOM<br/>Rendered Content]
    end

    subgraph USER["👤 User"]
        U4[Visitor / Recruiter]
    end

    D1 -->|Reads| L1
    L1 -->|Renders| U3
    L2 -->|Controls| U3
    U2 -->|Styles| U3
    U4 -->|Interacts with| U3
    U3 -->|Triggers| L2
    
    style DATA fill:#232733,stroke:#6c5ce7,color:#f0f2f8
    style LOGIC fill:#232733,stroke:#6c5ce7,color:#f0f2f8
    style UI fill:#232733,stroke:#6c5ce7,color:#f0f2f8
    style USER fill:#1a1d27,stroke:#4ade80,color:#f0f2f8
```

---

## 📊 Use Case Diagram

```mermaid
flowchart LR
    subgraph ACTORS["👤 Actors"]
        V[Visitor / Recruiter]
        O[Owner / Developer]
    end

    subgraph DASHBOARD["📊 Portfolio Dashboard"]
        UC1["View Overview Stats"]
        UC2["Browse Projects"]
        UC3["View Experience"]
        UC4["Explore Tech Stack"]
        UC5["See Activity Analytics"]
        UC6["Download CV"]
        UC7["Contact via Links"]
        UC8["Update Content<br/>(Edit data.js)"]
        UC9["Deploy to GitHub Pages"]
    end

    V --> UC1
    V --> UC2
    V --> UC3
    V --> UC4
    V --> UC5
    V --> UC6
    V --> UC7
    
    O --> UC8
    O --> UC9
    O --> UC6

    style ACTORS fill:#1a1d27,stroke:#4ade80,color:#f0f2f8
    style DASHBOARD fill:#232733,stroke:#6c5ce7,color:#f0f2f8
```

### Detailed Use Case Description

| Use Case | Actor | Description |
|----------|-------|-------------|
| **View Overview Stats** | Visitor | See key metrics (projects, repos, skills, experience) at a glance |
| **Browse Projects** | Visitor | Explore featured projects with tech stack, status, and live demos |
| **View Experience** | Visitor | Read work history in a visual timeline |
| **Explore Tech Stack** | Visitor | Discover technologies grouped by category |
| **See Activity Analytics** | Visitor | View contribution graph and project category distribution |
| **Download CV** | Visitor / Owner | Download the professional CV in PDF format |
| **Contact via Links** | Visitor | Access social links (GitHub, LinkedIn, Email) |
| **Update Content** | Owner | Modify `data.js` to update all dashboard content |
| **Deploy to GitHub Pages** | Owner | Deploy the dashboard to GitHub Pages for public access |

---

## 🛠️ Tech Stack

```mermaid
pie title Technology Distribution
    "HTML5" : 20
    "CSS3" : 25
    "JavaScript (Vanilla)" : 30
    "Mermaid.js" : 5
    "Google Fonts (Inter)" : 10
    "GitHub Pages" : 10
```

| Layer | Technology |
|-------|------------|
| **Markup** | HTML5 (Semantic Elements) |
| **Styling** | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Font** | Google Fonts — Inter |
| **Icons** | Emoji / Unicode (no external icon library) |
| **Hosting** | GitHub Pages |
| **Diagram** | Mermaid.js (for documentation) |

---

## 📂 Project Structure

```
portfolio/
├── index.html                    # Main HTML entry point
├── README.md                     # This documentation
├── LICENSE                       # MIT License
├── assets/
│   ├── images/                   # Screenshots, profile pics
│   ├── icons/                    # Custom icons (optional)
│   └── cv.pdf                    # Your downloadable CV
├── css/
│   └── style.css                 # All styles (dark theme, responsive)
└── js/
    ├── data.js                   # 🔥 CENTRAL DATA — edit this only!
    └── app.js                    # Render engine & navigation logic
```

---

## 🚀 Installation & Deployment

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Open with Live Server** (VS Code extension) or simply open `index.html` in your browser.

3. **Edit `data.js`** with your personal information.

4. **Preview** changes instantly — no build step required!

### Deploy to GitHub Pages

1. **Create a repository** named `your-username.github.io` or `portfolio`.

2. **Push the code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio Dashboard"
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository **Settings → Pages**
   - Select branch: `main`, folder: `/root`
   - Click **Save**

4. **Access your dashboard**
   ```
   https://your-username.github.io/portfolio/
   ```

---

## 🎨 Customization Guide

### 1. Update Personal Data
Edit `js/data.js` — all content is centralized here:

```javascript
const portfolioData = {
  stats: { totalProjects: 12, ... },
  about: { name: "Your Name", bio: "...", ... },
  techDistribution: [ ... ],
  projects: [ ... ],
  skills: { Frontend: [...], ... },
  contributions: [ ... ],
  categories: { ... },
  experiences: [ ... ],
  contacts: { ... },
};
```

### 2. Change Theme Colors
Edit CSS variables in `css/style.css`:

```css
:root {
  --bg-primary: #0f1117;      /* Main background */
  --accent: #6c5ce7;          /* Primary accent color */
  --accent-light: #8b7cf7;    /* Hover state */
  /* ... more variables */
}
```

### 3. Add/Remove Sections
Modify `index.html` — each section is a `<section>` with `id` matching the sidebar navigation.

### 4. Update CV
Replace `assets/cv.pdf` with your own PDF, and update the link in `app.js`:

```javascript
function downloadCV() {
  window.location.href = 'assets/cv.pdf';
}
```

---

## 📸 Screenshots

### Dashboard Overview
```
┌─────────────────────────────────────────────────────────────┐
│ ANDRE SAPUTRA              Available ●    GitHub  LinkedIn │
├──────────────┬──────────────────────────────────────────────┤
│              │  📊 Overview                                │
│  📊 Overview │  ┌────────┐ ┌────────┐ ┌────────┐ ┌──────┐ │
│  📁 Projects │  │Projects│ │ GitHub │ │ Skills │ │Exp.  │ │
│  💼 Experience│  │   12   │ │   35   │ │   18   │ │  3y  │ │
│  ⚡ Skills   │  └────────┘ └────────┘ └────────┘ └──────┘ │
│  📈 Activity │                                              │
│  ✉️ Contact  │  About                        Tech Dist.     │
│              │  Fullstack developer...       JavaScript ████│
│              │  #React #Node #TS             TypeScript ███│
├──────────────┴──────────────────────────────────────────────┤
│  📁 Featured Projects                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐         │
│  │ ● Project Alpha     │  │ ● Project Beta      │         │
│  │ React · Node · WS   │  │ Python · AI · React │         │
│  │ [GitHub] [Live]     │  │ [GitHub] [Live]     │         │
│  └─────────────────────┘  └─────────────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🗺️ Roadmap

- [x] ✅ Core dashboard layout
- [x] ✅ Data-driven architecture
- [x] ✅ Responsive design
- [x] ✅ Dark theme
- [x] ✅ Navigation sidebar
- [x] ✅ Project cards with status
- [x] ✅ Tech distribution chart
- [x] ✅ Contribution graph
- [ ] 🔲 Dark/Light mode toggle
- [ ] 🔲 GitHub API integration (fetch repos automatically)
- [ ] 🔲 Search & filter projects
- [ ] 🔲 Blog/Articles section
- [ ] 🔲 Interactive 3D background
- [ ] 🔲 PDF export of portfolio
- [ ] 🔲 Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create a branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Use semantic HTML5 elements
- Write clean, commented CSS
- Follow ES6+ JavaScript conventions
- Keep `data.js` as the single source of truth

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions...
```

---

## 📬 Contact

**Andre Saputra**  
📧 [andresaputra@dev.com](mailto:andresaputra@dev.com)  
🐙 [github.com/andresaputra](https://github.com/andresaputra)  
🔗 [linkedin.com/in/andresaputra](https://linkedin.com/in/andresaputra)  

---

## 🙏 Acknowledgments

- Built with ❤️ using vanilla technologies — no frameworks, no dependencies.
- Inspired by modern SaaS dashboards and data-driven design principles.
- Special thanks to the open-source community for continuous inspiration.

---

<div align="center">
  <sub>Built with ⚡ by <a href="#">Andre Saputra</a></sub>
  <br />
  <sub>⭐ Star this repo if you find it useful!</sub>
</div>
```

---

## 🏷️ Badge Pilihan (Tambahan)

Kalau mau tambah badge yang lebih keren lagi, ini beberapa opsi tambahan yang bisa kamu pakai:

```markdown
<!-- Badge tambahan yang bisa disisipkan di bagian atas README -->

[![Website](https://img.shields.io/website-up-down-green-red/https/your-username.github.io/portfolio?style=for-the-badge&label=Website%20Status)](https://your-username.github.io/portfolio)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-4ade80?style=for-the-badge)](https://github.com/your-username/portfolio/graphs/commit-activity)
[![GitHub last commit](https://img.shields.io/github/last-commit/your-username/portfolio?style=for-the-badge&color=6c5ce7)](https://github.com/your-username/portfolio/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/your-username/portfolio?style=for-the-badge&color=0f1117)](https://github.com/your-username/portfolio)
[![GitHub stars](https://img.shields.io/github/stars/your-username/portfolio?style=for-the-badge&color=ffd700)](https://github.com/your-username/portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/your-username/portfolio?style=for-the-badge&color=ff6b6b)](https://github.com/your-username/portfolio/network)
[![wakatime](https://wakatime.com/badge/user/your-wakatime-id/project/your-project-id.svg?style=for-the-badge)](https://wakatime.com/@your-username)
```

---

## 📊 Mermaid Diagram Tambahan (Flowchart Interaksi User)

Kalau mau tambahan diagram untuk **interaksi user dengan dashboard**, ini bisa dimasukkan juga:

```mermaid
sequenceDiagram
    participant Visitor
    participant Dashboard
    participant data.js
    participant GitHubPages

    Visitor->>Dashboard: Opens URL
    Dashboard->>data.js: Loads configuration
    data.js-->>Dashboard: Returns data
    Dashboard->>Dashboard: Renders UI
    Dashboard-->>Visitor: Displays portfolio
    
    Visitor->>Dashboard: Clicks "Projects"
    Dashboard->>Dashboard: Navigates to Projects section
    Dashboard-->>Visitor: Shows project cards
    
    Visitor->>Dashboard: Clicks "Download CV"
    Dashboard->>GitHubPages: Request CV PDF
    GitHubPages-->>Dashboard: Sends PDF
    Dashboard-->>Visitor: Downloads CV
    
    Visitor->>Dashboard: Clicks social link
    Dashboard-->>Visitor: Redirects to GitHub/LinkedIn
```
