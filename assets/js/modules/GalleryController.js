(function () {
    class GalleryController {
        constructor(appState) {
            this.appState = appState;
            this.galleryContainer = document.getElementById('gallery');
            this.filterContainer = document.getElementById('filterBar');

            // Access global FilterBar
            this.filterBar = new window.FilterBar(this.filterContainer, (filter) => {
                this.handleFilterChange(filter);
            });
        }

        init() {
            const { designs, filter } = this.appState.state;
            this.renderGallery(designs, filter);
            this.filterBar.render(designs, filter);

            this.appState.subscribe((state) => {
                this.renderGallery(state.designs, state.filter);
                this.filterBar.updateActiveState(state.filter);
            });
        }

        handleFilterChange(newFilter) {
            this.appState.setState({ filter: newFilter });
        }

        renderGallery(designs, filter) {
            const filteredDesigns = filter === 'all'
                ? designs
                : designs.filter(d => d.techStack.some(tech => tech.toLowerCase() === filter));

            this.galleryContainer.innerHTML = '';

            if (filteredDesigns.length === 0) {
                this.galleryContainer.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--color-text-muted);">
                        <h3>No experiments found</h3>
                        <p>Try selecting a different filter.</p>
                    </div>
                `;
                return;
            }

            const fragment = document.createDocumentFragment();
            filteredDesigns.forEach((design, index) => {
                // Access global DesignCard
                const card = new window.DesignCard(design, index);
                fragment.appendChild(card.render());
            });

            this.galleryContainer.appendChild(fragment);
        }
    }

    window.GalleryController = GalleryController;
})();
