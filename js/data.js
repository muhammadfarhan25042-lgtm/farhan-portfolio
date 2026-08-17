// ============================================================
//  DATA CENTRAL — Ubah isinya, dashboard otomatis berubah
// ============================================================

const portfolioData = {
  // ---- STATISTIK UTAMA ----
  stats: {
    totalProjects: 12,
    totalRepos: 35,
    totalSkills: 18,
    totalExp: 3,
  },

  // ---- TENTANG DIRI ----
  about: {
    name: "Andre Saputra",
    role: "Fullstack Developer",
    bio: "Fullstack developer with 3+ years of experience building scalable web applications. Passionate about clean code, system design, and open source. I work at the intersection of engineering and product thinking.",
    tags: ["React", "Node.js", "TypeScript", "Python", "AWS"],
  },

  // ---- TEKNOLOGI & DISTRIBUSI (untuk chart) ----
  techDistribution: [
    { label: "JavaScript", value: 8 },
    { label: "TypeScript", value: 6 },
    { label: "Python", value: 5 },
    { label: "React", value: 7 },
    { label: "Node.js", value: 4 },
  ],

  // ---- PROYEK UNGGULAN ----
  projects: [
    {
      title: "Project Alpha",
      desc: "Real-time collaboration dashboard with WebSocket and React.",
      stack: ["React", "Node.js", "Socket.io", "MongoDB"],
      status: "active",
      github: "#",
      demo: "#",
    },
    {
      title: "Project Beta",
      desc: "AI-powered sentiment analysis for social media feeds.",
      stack: ["Python", "FastAPI", "TensorFlow", "React"],
      status: "active",
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Platform",
      desc: "Full-featured online store with payment gateway integration.",
      stack: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      status: "archived",
      github: "#",
      demo: "#",
    },
    {
      title: "DevOps Dashboard",
      desc: "Monitoring tool for CI/CD pipelines and server metrics.",
      stack: ["Go", "Grafana", "Prometheus", "React"],
      status: "active",
      github: "#",
      demo: "#",
    },
  ],

  // ---- SKILLS (dikelompokkan) ----
  skills: {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Vue.js"],
    Backend: ["Node.js", "Python", "Go", "FastAPI", "Express"],
    Database: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    DevOps: ["Docker", "AWS", "GitHub Actions", "Nginx"],
    Tools: ["Git", "Figma", "Postman", "Linux"],
  },

  // ---- AKTIVITAS KONTRIBUSI (6 bulan terakhir) ----
  contributions: [8, 12, 5, 18, 22, 14],

  // ---- KATEGORI PROYEK ----
  categories: {
    "Web App": 5,
    "Mobile": 2,
    "AI/ML": 3,
    "DevOps": 2,
  },

  // ---- PENGALAMAN KERJA ----
  experiences: [
    {
      title: "Fullstack Developer — PT Tech Solutions",
      date: "2023 – Present",
      desc: "Built internal dashboard with React + Node.js, improved API response time by 40%, led 3 junior developers.",
    },
    {
      title: "Frontend Engineer — Startup Kita",
      date: "2021 – 2023",
      desc: "Developed product landing pages and e-commerce UI with Next.js & Tailwind. Increased conversion by 20%.",
    },
    {
      title: "Freelance Web Developer",
      date: "2020 – 2021",
      desc: "Built custom websites for 15+ clients using WordPress, Vue.js, and Laravel.",
    },
  ],

  // ---- KONTAK ----
  contacts: {
    email: "andresaputra@dev.com",
    github: "github.com/andresaputra",
    linkedin: "linkedin.com/in/andresaputra",
  },
};
