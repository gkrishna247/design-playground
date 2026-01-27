/**
 * ============================================
 * GALLERY CONTROLLER - GalleryController.js
 * Orchestrates view updates based on state changes
 * ============================================
 */

(function () {
    'use strict';

    // Initialize global namespace
    window.DesignPlayground = window.DesignPlayground || {};

    /**
     * GalleryController - Manages card rendering and filtering
     * @param {HTMLElement} galleryEl - Gallery container element
     * @param {Array} designs - Array of design data
     */
    function GalleryController(galleryEl, designs) {
        this.gallery = galleryEl;
        this.designs = designs;
        this.cards = [];

        this._renderCards();
        this._subscribeToState();
    }

    /**
     * Render all design cards
     */
    GalleryController.prototype._renderCards = function () {
        var self = this;
        var DesignCard = window.DesignPlayground.DesignCard;
        var fragment = document.createDocumentFragment();

        this.designs.forEach(function (design) {
            var card = new DesignCard(design);
            var element = card.render();
            self.cards.push(card);
            fragment.appendChild(element);
        });

        this.gallery.appendChild(fragment);
    };

    /**
     * Subscribe to AppState filter changes
     */
    GalleryController.prototype._subscribeToState = function () {
        var self = this;
        var AppState = window.DesignPlayground.AppState;

        if (AppState) {
            AppState.subscribe(function (state) {
                self._filterCards(state.activeFilter);
            });
        }
    };

    /**
     * Filter cards based on active filter
     * @param {string} filter - Filter value
     */
    GalleryController.prototype._filterCards = function (filter) {
        var self = this;
        var visibleCount = 0;

        // Add filtering class for smooth transitions
        this.gallery.classList.add('gallery--filtering');

        this.cards.forEach(function (card) {
            if (card.matchesFilter(filter)) {
                card.show();
                visibleCount++;
            } else {
                card.hide();
            }
        });

        // Handle no results
        this._toggleNoResults(visibleCount === 0);

        // Remove filtering class after animation
        setTimeout(function () {
            self.gallery.classList.remove('gallery--filtering');
        }, 350);
    };

    /**
     * Show/hide no results message
     * @param {boolean} show - Whether to show the message
     */
    GalleryController.prototype._toggleNoResults = function (show) {
        var existingMessage = this.gallery.querySelector('.no-results');

        if (show && !existingMessage) {
            var message = document.createElement('div');
            message.className = 'no-results';
            message.innerHTML = '<div class="no-results-icon">🔍</div>' +
                '<p class="no-results-text">No designs match this filter</p>';
            this.gallery.appendChild(message);
        } else if (!show && existingMessage) {
            existingMessage.remove();
        }
    };

    /**
     * Get all card elements
     * @returns {Array} Array of card DOM elements
     */
    GalleryController.prototype.getCardElements = function () {
        return this.cards.map(function (card) {
            return card.element;
        });
    };

    /**
     * Refresh cards (for dynamic updates)
     */
    GalleryController.prototype.refresh = function () {
        var AppState = window.DesignPlayground.AppState;
        if (AppState) {
            this._filterCards(AppState.getFilter());
        }
    };

    // Export to namespace
    window.DesignPlayground.GalleryController = GalleryController;

})();
