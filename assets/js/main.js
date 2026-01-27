/**
 * ============================================
 * MAIN - main.js
 * Application entry point and initialization
 * ============================================
 */

(function () {
    'use strict';

    /**
     * Initialize the Design Playground application
     */
    function init() {
        var DP = window.DesignPlayground;

        // Validate required modules
        if (!DP || !DP.designs || !DP.AppState) {
            console.error('DesignPlayground: Required modules not loaded');
            return;
        }

        // Get DOM elements
        var filterBarEl = document.querySelector('.filter-bar');
        var galleryEl = document.querySelector('.gallery');

        if (!filterBarEl || !galleryEl) {
            console.error('DesignPlayground: Required DOM elements not found');
            return;
        }

        // Initialize components
        try {
            // Initialize FilterBar
            if (DP.FilterBar) {
                new DP.FilterBar(filterBarEl, DP.designs);
            }

            // Initialize GalleryController
            if (DP.GalleryController) {
                new DP.GalleryController(galleryEl, DP.designs);
            }

            // Initialize visual effects (after gallery renders)
            requestAnimationFrame(function () {
                // Initialize Cursor Spotlight
                if (DP.CursorSpotlight) {
                    DP.CursorSpotlight.init();
                }

                // Initialize Card Tilt
                if (DP.CardTilt) {
                    DP.CardTilt.init('.design-card');
                }
            });

            console.log('DesignPlayground: Initialized successfully');

        } catch (error) {
            console.error('DesignPlayground: Initialization error', error);
        }
    }

    // Wait for DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
