/**
 * ============================================
 * CURSOR SPOTLIGHT - CursorSpotlight.js
 * Mouse-following glow effect
 * ============================================
 */

(function () {
    'use strict';

    // Initialize global namespace
    window.DesignPlayground = window.DesignPlayground || {};

    /**
     * CursorSpotlight - Creates a spotlight effect following the mouse
     */
    var CursorSpotlight = {
        element: null,
        isActive: false,
        mouseX: 0,
        mouseY: 0,
        currentX: 0,
        currentY: 0,
        rafId: null,

        /**
         * Initialize the cursor spotlight
         */
        init: function () {
            // Skip on touch devices
            if (this._isTouchDevice()) {
                return;
            }

            this.element = document.querySelector('.cursor-spotlight');

            if (!this.element) {
                console.warn('CursorSpotlight: Element .cursor-spotlight not found');
                return;
            }

            this._bindEvents();
            this._startAnimation();
        },

        /**
         * Check if device is touch-only
         * @returns {boolean} True if touch device
         */
        _isTouchDevice: function () {
            return ('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0);
        },

        /**
         * Bind mouse events
         */
        _bindEvents: function () {
            var self = this;

            document.addEventListener('mousemove', function (event) {
                self.mouseX = event.clientX;
                self.mouseY = event.clientY;

                if (!self.isActive) {
                    self.isActive = true;
                    self.element.classList.add('is-active');
                }
            });

            document.addEventListener('mouseleave', function () {
                self.isActive = false;
                self.element.classList.remove('is-active');
            });

            document.addEventListener('mouseenter', function () {
                self.isActive = true;
                self.element.classList.add('is-active');
            });
        },

        /**
         * Start the animation loop
         */
        _startAnimation: function () {
            var self = this;

            // Smoothing factor (lower = smoother, slower)
            var smoothing = 0.15;

            function animate() {
                // Interpolate position for smooth movement
                self.currentX += (self.mouseX - self.currentX) * smoothing;
                self.currentY += (self.mouseY - self.currentY) * smoothing;

                // Update CSS custom properties
                self.element.style.setProperty('--mouse-x', Math.round(self.currentX));
                self.element.style.setProperty('--mouse-y', Math.round(self.currentY));

                self.rafId = requestAnimationFrame(animate);
            }

            animate();
        },

        /**
         * Stop the animation loop
         */
        destroy: function () {
            if (this.rafId) {
                cancelAnimationFrame(this.rafId);
                this.rafId = null;
            }
        }
    };

    // Export to namespace
    window.DesignPlayground.CursorSpotlight = CursorSpotlight;

})();
