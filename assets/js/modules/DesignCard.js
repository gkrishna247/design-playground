(function () {
    class DesignCard {
        constructor(data, index) {
            this.data = data;
            this.index = index;
        }

        render() {
            const { name, description, techStack, folderPath } = this.data;
            const icon = this.getIcon(name);

            const card = document.createElement('a');
            card.href = folderPath;
            card.className = 'card reveal';
            card.style.animationDelay = `${this.index * 0.1}s`;

            card.setAttribute('aria-label', `View details for ${name}`);

            card.innerHTML = `
                <div class="card__content">
                    <span class="card__icon" aria-hidden="true">${icon}</span>
                    <h3 class="card__title">${name}</h3>
                    <p class="card__desc">${description}</p>
                    <div class="badge-stack">
                        ${techStack.map(tech => `<span class="badge">${tech}</span>`).join('')}
                    </div>
                </div>
            `;

            return card;
        }

        getIcon(name) {
            const icons = ["🎨", "✨", "💎", "🌈", "⚡", "🔮", "🎯", "🌟"];
            return icons[name.length % icons.length];
        }
    }

    window.DesignCard = DesignCard;
})();
