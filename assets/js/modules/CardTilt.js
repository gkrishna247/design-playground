(function () {
    function initCardTilt(container) {
        let AnimationId = null;

        container.addEventListener('mousemove', (e) => {
            const card = e.target.closest('.card');
            if (!card) return;

            if (AnimationId) cancelAnimationFrame(AnimationId);

            AnimationId = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.setProperty('--rx', `${rotateX}deg`);
                card.style.setProperty('--ry', `${rotateY}deg`);
            });
        });

        container.addEventListener('mouseout', (e) => {
            const card = e.target.closest('.card');
            if (card) {
                card.style.setProperty('--rx', '0deg');
                card.style.setProperty('--ry', '0deg');
            }
        });
    }

    window.initCardTilt = initCardTilt;
})();
