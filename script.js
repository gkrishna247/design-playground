// ===== DESIGNS DATA =====
// Add new designs to this array following the structure below
const designs = [
    {
        name: "Gradient Cards",
        description: "Modern gradient backgrounds with hover effects. Explore beautiful color transitions and dynamic card animations.",
        techStack: ["HTML", "CSS"],
        folderPath: "./gradient-cards/"
    },
    {
        name: "Glassmorphism Button",
        description: "Frosted glass effect button with blur and transparency. A sleek, modern UI element with depth and elegance.",
        techStack: ["HTML", "CSS"],
        folderPath: "./glassmorphism-button/"
    }
];

// ===== CARD ICONS =====
const cardIcons = ["🎨", "✨", "💎", "🌈", "⚡", "🔮", "🎯", "🌟"];

// ===== RENDER CARDS =====
function renderCards(filteredDesigns = designs) {
    const cardsGrid = document.getElementById('cardsGrid');

    if (filteredDesigns.length === 0) {
        cardsGrid.innerHTML = `
            <div class="empty-state">
                <h3>No designs found</h3>
                <p>Try selecting a different filter or add new designs to the collection.</p>
            </div>
        `;
        return;
    }

    cardsGrid.innerHTML = filteredDesigns.map((design, index) => `
        <a href="${design.folderPath}" class="design-card" style="animation-delay: ${index * 0.1}s">
            <div class="card-icon">${cardIcons[index % cardIcons.length]}</div>
            <h2 class="card-title">${design.name}</h2>
            <p class="card-description">${design.description}</p>
            <div class="tech-stack">
                ${design.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
            <div class="card-arrow">→</div>
        </a>
    `).join('');
}

// ===== GENERATE FILTER BUTTONS =====
function generateFilters() {
    const filterBar = document.getElementById('filterBar');
    const allTechs = [...new Set(designs.flatMap(d => d.techStack))];

    allTechs.forEach(tech => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.filter = tech.toLowerCase();
        btn.textContent = tech;
        filterBar.appendChild(btn);
    });
}

// ===== FILTER FUNCTIONALITY =====
function setupFilters() {
    const filterBar = document.getElementById('filterBar');

    filterBar.addEventListener('click', (e) => {
        if (!e.target.classList.contains('filter-btn')) return;

        // Update active state
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        const filter = e.target.dataset.filter;

        if (filter === 'all') {
            renderCards(designs);
        } else {
            const filtered = designs.filter(d =>
                d.techStack.some(tech => tech.toLowerCase() === filter)
            );
            renderCards(filtered);
        }
    });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    generateFilters();
    renderCards();
    setupFilters();
});
