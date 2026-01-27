(function () {
    class FilterBar {
        constructor(container, onFilterSelect) {
            this.container = container;
            this.onFilterSelect = onFilterSelect;
            this.filters = [];
        }

        render(designs, currentFilter) {
            const allTechs = [...new Set(designs.flatMap(d => d.techStack))];
            this.filters = ['all', ...allTechs.map(t => t.toLowerCase())];

            this.container.innerHTML = '';

            this.createButton('All', 'all', currentFilter);

            allTechs.forEach(tech => {
                this.createButton(tech, tech.toLowerCase(), currentFilter);
            });
        }

        createButton(label, value, currentFilter) {
            const btn = document.createElement('button');
            btn.textContent = label;
            btn.className = `filter-btn ${value === currentFilter ? 'active' : ''}`;
            btn.dataset.filter = value;
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', value === currentFilter);

            btn.addEventListener('click', () => {
                this.onFilterSelect(value);
            });

            this.container.appendChild(btn);
        }

        updateActiveState(activeFilter) {
            const buttons = this.container.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                const isActive = btn.dataset.filter === activeFilter;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-selected', isActive);
            });
        }
    }

    window.FilterBar = FilterBar;
})();
