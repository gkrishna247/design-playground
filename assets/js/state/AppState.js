/**
 * ============================================
 * APP STATE - AppState.js
 * Observer pattern for centralized state management
 * ============================================
 */

(function () {
    'use strict';

    // Initialize global namespace
    window.DesignPlayground = window.DesignPlayground || {};

    /**
     * Simple state management with Observer pattern
     */
    const AppState = {
        // Private state
        _state: {
            activeFilter: 'all'
        },

        // Subscribers list
        _subscribers: [],

        /**
         * Get current filter value
         * @returns {string} Active filter category
         */
        getFilter: function () {
            return this._state.activeFilter;
        },

        /**
         * Set filter and notify subscribers
         * @param {string} filter - New filter value
         */
        setFilter: function (filter) {
            // Skip if no change
            if (this._state.activeFilter === filter) {
                return;
            }

            this._state.activeFilter = filter;
            this._notify();
        },

        /**
         * Subscribe to state changes
         * @param {Function} callback - Function to call on state change
         * @returns {Function} Unsubscribe function
         */
        subscribe: function (callback) {
            if (typeof callback !== 'function') {
                console.error('AppState.subscribe: callback must be a function');
                return function () { };
            }

            this._subscribers.push(callback);

            // Return unsubscribe function
            var self = this;
            return function () {
                var index = self._subscribers.indexOf(callback);
                if (index > -1) {
                    self._subscribers.splice(index, 1);
                }
            };
        },

        /**
         * Notify all subscribers of state change
         * @private
         */
        _notify: function () {
            var state = this._state;
            this._subscribers.forEach(function (callback) {
                try {
                    callback(state);
                } catch (error) {
                    console.error('AppState subscriber error:', error);
                }
            });
        },

        /**
         * Get full state object (for debugging)
         * @returns {Object} Current state
         */
        getState: function () {
            return Object.assign({}, this._state);
        }
    };

    // Export to namespace
    window.DesignPlayground.AppState = AppState;

})();
