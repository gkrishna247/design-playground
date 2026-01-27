(function () {
    function initCursorSpotlight() {
        let AnimationId = null;

        document.addEventListener('mousemove', (e) => {
            if (AnimationId) cancelAnimationFrame(AnimationId);

            AnimationId = requestAnimationFrame(() => {
                const x = e.clientX;
                const y = e.clientY;

                document.documentElement.style.setProperty('--cursor-x', `${x}px`);
                document.documentElement.style.setProperty('--cursor-y', `${y}px`);
            });
        });
    }

    window.initCursorSpotlight = initCursorSpotlight;
})();
