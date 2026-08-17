// ============================================================
//  RENDER ENGINE — Baca data.js, tampilkan ke DOM
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    initNav();
});

// ---------- RENDER SEMUA ----------
function renderAll() {
    renderStats();
    renderTechBars();
    renderProjects();
    renderSkills();
    renderContributions();
    renderCategories();
    renderExperiences();
    renderContacts();
}

// ---------- STATS ----------
function renderStats() {
    const s = portfolioData.stats;
    document.getElementById('totalProjects').textContent = s.totalProjects;
    document.getElementById('totalRepos').textContent = s.totalRepos;
    document.getElementById('totalSkills').textContent = s.totalSkills;
    document.getElementById('totalExp').textContent = s.totalExp;
}

// ---------- TECH BARS ----------
function renderTechBars() {
    const container = document.getElementById('techBars');
    const data = portfolioData.techDistribution;
    const max = Math.max(...data.map(d => d.value), 1);
    container.innerHTML = data.map(d => `
        <div class="tech-bar-item">
            <span class="label">${d.label}</span>
            <div class="bar-track">
                <div class="bar-fill" style="width: ${(d.value / max) * 100}%;"></div>
            </div>
            <span class="value">${d.value}</span>
        </div>
    `).join('');
}

// ---------- PROJECTS ----------
function renderProjects() {
    const container = document.getElementById('projectsGrid');
    const projects = portfolioData.projects;
    container.innerHTML = projects.map(p => `
        <div class="project-card">
            <div class="project-status ${p.status === 'active' ? 'status-active' : 'status-archived'}">
                ${p.status === 'active' ? '● Active' : '● Archived'}
            </div>
            <h3>${p.title}</h3>
            <p class="project-desc">${p.desc}</p>
            <div class="project-stack">
                ${p.stack.map(s => `<span>${s}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${p.github}" target="_blank">GitHub</a>
                <a href="${p.demo}" target="_blank">Live Demo</a>
            </div>
        </div>
    `).join('');
}

// ---------- SKILLS ----------
function renderSkills() {
    const container = document.getElementById('skillsGrid');
    const skills = portfolioData.skills;
    container.innerHTML = Object.entries(skills).map(([group, items]) => `
        <div class="skill-group">
            <h4>${group}</h4>
            <ul>
                ${items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// ---------- CONTRIBUTIONS ----------
function renderContributions() {
    const container = document.getElementById('contributionBars');
    const data = portfolioData.contributions;
    const max = Math.max(...data, 1);
    container.innerHTML = data.map(val => {
        const pct = (val / max) * 100;
        let cls = 'low';
        if (pct > 70) cls = 'high';
        else if (pct > 40) cls = 'medium';
        return `<div class="bar ${cls}" style="height: ${Math.max(pct, 6)}%;"></div>`;
    }).join('');
}

// ---------- CATEGORIES ----------
function renderCategories() {
    const container = document.getElementById('categoryList');
    const cats = portfolioData.categories;
    container.innerHTML = Object.entries(cats).map(([name, count]) => `
        <div class="category-item">
            <span>${name}</span>
            <span>${count}</span>
        </div>
    `).join('');
}

// ---------- EXPERIENCES ----------
function renderExperiences() {
    const container = document.getElementById('timeline');
    const exps = portfolioData.experiences;
    container.innerHTML = exps.map(exp => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <span class="timeline-date">${exp.date}</span>
                <p>${exp.desc}</p>
            </div>
        </div>
    `).join('');
}

// ---------- CONTACTS ----------
function renderContacts() {
    const c = portfolioData.contacts;
    const container = document.querySelector('.contact-grid');
    if (!container) return;
    container.innerHTML = `
        <a href="mailto:${c.email}" class="contact-card">📧 ${c.email}</a>
        <a href="https://${c.github}" target="_blank" class="contact-card">🐙 ${c.github}</a>
        <a href="https://${c.linkedin}" target="_blank" class="contact-card">🔗 ${c.linkedin}</a>
    `;
}

// ---------- NAVIGATION ----------
function initNav() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.dataset.section;

            // Update nav
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            // Update sections
            sections.forEach(s => {
                s.classList.toggle('active', s.id === target);
            });

            // Scroll ke atas
            document.querySelector('.main-content').scrollTop = 0;
        });
    });
}

// ---------- DOWNLOAD CV ----------
function downloadCV() {
    alert('Fungsi download CV — kamu bisa ganti dengan link ke file CV.pdf di assets/');
    // Contoh: window.location.href = 'assets/cv.pdf';
}
