/**
 * Simple Observer Pattern for State Management
 * Refactored for file:// compatibility (No ES Modules)
 */
(function () {
    class AppState {
        constructor(initialState = {}) {
            this._state = initialState;
            this._listeners = new Set();
        }

        get state() {
            return { ...this._state };
        }

        setState(updates) {
            this._state = { ...this._state, ...updates };
            this._notify();
        }

        subscribe(listener) {
            this._listeners.add(listener);
            return () => this._listeners.delete(listener);
        }

        _notify() {
            this._listeners.forEach(listener => listener(this.state));
        }
    }

    // Expose to global scope
    window.AppState = AppState;
})();
