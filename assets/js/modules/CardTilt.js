/**
 * ============================================
 * CARD TILT - CardTilt.js
 * 3D tilt effect on hover using physics
 * ============================================
 */

(function () {
    'use strict';

    // Initialize global namespace
    window.DesignPlayground = window.DesignPlayground || {};

    /**
     * CardTilt - Adds 3D tilt effect to cards
     */
    var CardTilt = {
        cards: [],
        maxRotation: 12, // Maximum rotation in degrees
        perspective: 1000, // Perspective distance

        /**
         * Initialize tilt effect on cards
         * @param {string} selector - CSS selector for cards
         */
        init: function (selector) {
            var self = this;

            // Skip on touch devices
            if (this._isTouchDevice()) {
                return;
            }

            var cardElements = document.querySelectorAll(selector);

            cardElements.forEach(function (card) {
                self._attachTilt(card);
            });
        },

        /**
         * Check if device is touch-only
         * @returns {boolean} True if touch device
         */
        _isTouchDevice: function () {
            return ('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0);
        },

        /**
         * Attach tilt effect to a single card
         * @param {HTMLElement} card - Card element
         */
        _attachTilt: function (card) {
            var self = this;
            var isHovering = false;
            var currentRotateX = 0;
            var currentRotateY = 0;
            var targetRotateX = 0;
            var targetRotateY = 0;
            var rafId = null;

            // Smoothing factor for interpolation
            var smoothing = 0.1;

            /**
             * Animation loop for smooth tilt
             */
            function animate() {
                // Interpolate current rotation towards target
                currentRotateX += (targetRotateX - currentRotateX) * smoothing;
                currentRotateY += (targetRotateY - currentRotateY) * smoothing;

                // Apply transform
                card.style.transform = 'perspective(' + self.perspective + 'px) ' +
                    'rotateX(' + currentRotateX.toFixed(2) + 'deg) ' +
                    'rotateY(' + currentRotateY.toFixed(2) + 'deg)';

                // Continue animation if still significant movement
                if (isHovering ||
                    Math.abs(targetRotateX - currentRotateX) > 0.01 ||
                    Math.abs(targetRotateY - currentRotateY) > 0.01) {
                    rafId = requestAnimationFrame(animate);
                } else {
                    // Reset to zero when animation complete
                    card.style.transform = '';
                    rafId = null;
                }
            }

            /**
             * Start animation if not already running
             */
            function startAnimation() {
                if (!rafId) {
                    animate();
                }
            }

            // Mouse enter
            card.addEventListener('mouseenter', function () {
                isHovering = true;
                startAnimation();
            });

            // Mouse leave
            card.addEventListener('mouseleave', function () {
                isHovering = false;
                targetRotateX = 0;
                targetRotateY = 0;
                startAnimation();
            });

            // Mouse move
            card.addEventListener('mousemove', function (event) {
                if (!isHovering) return;

                var rect = card.getBoundingClientRect();

                // Calculate mouse position relative to card center (-1 to 1)
                var centerX = rect.left + rect.width / 2;
                var centerY = rect.top + rect.height / 2;
                var percentX = (event.clientX - centerX) / (rect.width / 2);
                var percentY = (event.clientY - centerY) / (rect.height / 2);

                // Clamp values
                percentX = Math.max(-1, Math.min(1, percentX));
                percentY = Math.max(-1, Math.min(1, percentY));

                // Calculate target rotation (inverted Y for natural feel)
                targetRotateY = percentX * self.maxRotation;
                targetRotateX = -percentY * self.maxRotation;
            });

            // Store reference for cleanup
            self.cards.push({
                element: card,
                cleanup: function () {
                    if (rafId) {
                        cancelAnimationFrame(rafId);
                    }
                    card.style.transform = '';
                }
            });
        },

        /**
         * Reinitialize tilt on new cards (after dynamic render)
         * @param {string} selector - CSS selector for cards
         */
        refresh: function (selector) {
            this.destroy();
            this.init(selector);
        },

        /**
         * Clean up and remove tilt effects
         */
        destroy: function () {
            this.cards.forEach(function (cardData) {
                cardData.cleanup();
            });
            this.cards = [];
        }
    };

    // Export to namespace
    window.DesignPlayground.CardTilt = CardTilt;

})();
