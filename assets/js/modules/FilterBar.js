/**
 * ============================================
 * FILTER BAR - FilterBar.js
 * Renders filter buttons and handles filter logic
 * ============================================
 */

(function () {
    'use strict';

    // Initialize global namespace
    window.DesignPlayground = window.DesignPlayground || {};

    /**
     * FilterBar - Creates and manages filter buttons
     * @param {HTMLElement} containerEl - Container element for filter buttons
     * @param {Array} designs - Array of design data
     */
    function FilterBar(containerEl, designs) {
        this.container = containerEl;
        this.designs = designs;
        this.buttons = [];
        this.categories = this._extractCategories();

        this._render();
        this._bindEvents();
    }

    /**
     * Extract unique tech categories from designs
     * @returns {Array} Array of unique categories
     */
    FilterBar.prototype._extractCategories = function () {
        var categoryMap = {};

        this.designs.forEach(function (design) {
            design.techStack.forEach(function (tech) {
                var normalized = tech.toLowerCase();
                if (!categoryMap[normalized]) {
                    categoryMap[normalized] = tech; // Keep original casing
                }
            });
        });

        // Convert to array and sort
        var categories = Object.keys(categoryMap).map(function (key) {
            return categoryMap[key];
        });

        categories.sort();

        // Add 'All' at the beginning
        return ['All'].concat(categories);
    };

    /**
     * Render filter buttons
     */
    FilterBar.prototype._render = function () {
        var self = this;
        var fragment = document.createDocumentFragment();

        this.categories.forEach(function (category, index) {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'filter-btn';
            button.textContent = category;
            button.setAttribute('data-filter', category.toLowerCase());
            button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

            // Set first button as active
            if (index === 0) {
                button.classList.add('is-active');
            }

            self.buttons.push(button);
            fragment.appendChild(button);
        });

        this.container.appendChild(fragment);
    };

    /**
     * Bind click events to filter buttons
     */
    FilterBar.prototype._bindEvents = function () {
        var self = this;
        var AppState = window.DesignPlayground.AppState;

        this.container.addEventListener('click', function (event) {
            var button = event.target.closest('.filter-btn');
            if (!button) return;

            var filter = button.getAttribute('data-filter');

            // Update UI
            self._setActiveButton(button);

            // Update state
            if (AppState) {
                AppState.setFilter(filter);
            }
        });

        // Handle keyboard navigation
        this.container.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                self._handleArrowNavigation(event);
            }
        });
    };

    /**
     * Set active button styling
     * @param {HTMLElement} activeButton - Button to set as active
     */
    FilterBar.prototype._setActiveButton = function (activeButton) {
        this.buttons.forEach(function (button) {
            var isActive = button === activeButton;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    };

    /**
     * Handle arrow key navigation between buttons
     * @param {KeyboardEvent} event - Keyboard event
     */
    FilterBar.prototype._handleArrowNavigation = function (event) {
        var currentButton = event.target;
        var currentIndex = this.buttons.indexOf(currentButton);

        if (currentIndex === -1) return;

        var nextIndex;
        if (event.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % this.buttons.length;
        } else {
            nextIndex = (currentIndex - 1 + this.buttons.length) % this.buttons.length;
        }

        this.buttons[nextIndex].focus();
        event.preventDefault();
    };

    /**
     * Get current active filter
     * @returns {string} Active filter value
     */
    FilterBar.prototype.getActiveFilter = function () {
        for (var i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i].classList.contains('is-active')) {
                return this.buttons[i].getAttribute('data-filter');
            }
        }
        return 'all';
    };

    // Export to namespace
    window.DesignPlayground.FilterBar = FilterBar;

})();
