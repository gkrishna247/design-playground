/**
 * ============================================
 * DESIGN CARD - DesignCard.js
 * Class to generate card DOM elements
 * ============================================
 */

(function () {
    'use strict';

    // Initialize global namespace
    window.DesignPlayground = window.DesignPlayground || {};

    /**
     * DesignCard - Creates card DOM elements from design data
     * @param {Object} design - Design data object
     */
    function DesignCard(design) {
        this.design = design;
        this.element = null;
    }

    /**
     * Generate tech stack badge class name
     * @param {string} tech - Technology name
     * @returns {string} CSS class for the badge
     */
    DesignCard.prototype._getBadgeClass = function (tech) {
        var techLower = tech.toLowerCase();
        var validClasses = ['html', 'css', 'javascript', 'js'];

        if (validClasses.indexOf(techLower) > -1) {
            return 'tech-badge--' + techLower;
        }
        return '';
    };

    /**
     * Create and return the card DOM element
     * @returns {HTMLElement} The card element
     */
    DesignCard.prototype.render = function () {
        var design = this.design;

        // Create card link
        var card = document.createElement('a');
        card.href = design.folderPath;
        card.className = 'design-card';
        card.setAttribute('data-id', design.id);
        card.setAttribute('data-tech', design.techStack.join(',').toLowerCase());

        // Set accent hue if provided
        if (design.accentHue) {
            card.style.setProperty('--card-accent-hue', design.accentHue);
        }

        // Build inner HTML
        var html = '';

        // Header
        html += '<div class="card-header">';
        html += '<h3 class="card-title">' + this._escapeHtml(design.name) + '</h3>';
        html += '</div>';

        // Description
        html += '<p class="card-description">' + this._escapeHtml(design.description) + '</p>';

        // Footer with tech badges
        html += '<div class="card-footer">';
        html += '<div class="tech-stack">';

        for (var i = 0; i < design.techStack.length; i++) {
            var tech = design.techStack[i];
            var badgeClass = this._getBadgeClass(tech);
            html += '<span class="tech-badge ' + badgeClass + '">' + this._escapeHtml(tech) + '</span>';
        }

        html += '</div>';
        html += '</div>';

        // Arrow icon
        html += '<svg class="card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
        html += '<path d="M5 12h14M12 5l7 7-7 7"/>';
        html += '</svg>';

        card.innerHTML = html;

        this.element = card;
        return card;
    };

    /**
     * Escape HTML to prevent XSS
     * @param {string} str - String to escape
     * @returns {string} Escaped string
     */
    DesignCard.prototype._escapeHtml = function (str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };

    /**
     * Check if card matches a tech filter
     * @param {string} filter - Filter to check ('all' or tech name)
     * @returns {boolean} Whether card matches filter
     */
    DesignCard.prototype.matchesFilter = function (filter) {
        if (filter === 'all') {
            return true;
        }

        var techStack = this.design.techStack.map(function (t) {
            return t.toLowerCase();
        });

        return techStack.indexOf(filter.toLowerCase()) > -1;
    };

    /**
     * Show the card (for filtering)
     */
    DesignCard.prototype.show = function () {
        if (this.element) {
            this.element.classList.remove('is-hidden');
            this.element.classList.add('is-visible');
        }
    };

    /**
     * Hide the card (for filtering)
     */
    DesignCard.prototype.hide = function () {
        if (this.element) {
            this.element.classList.remove('is-visible');
            this.element.classList.add('is-hidden');
        }
    };

    // Export to namespace
    window.DesignPlayground.DesignCard = DesignCard;

})();
