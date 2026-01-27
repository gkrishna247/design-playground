/**
 * Main Entry Point
 * Refactored for file:// compatibility
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing Design Playground...');

    // 1. Initialize State
    const appState = new window.AppState({
        filter: 'all',
        designs: window.designs
    });

    // 2. Initialize Controller
    const galleryController = new window.GalleryController(appState);
    galleryController.init();

    // 3. Initialize Global Effects
    window.initCursorSpotlight();

    // 4. Initialize Physics on Grid (Tilt)
    const grid = document.getElementById('gallery');
    if (grid) {
        window.initCardTilt(grid);
    }

    console.log('✨ Design Playground Initialized (Classic Mode)');
});
