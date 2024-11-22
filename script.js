// Scroll Animation for Property Cards
window.addEventListener('scroll', () => {
    document.querySelectorAll('.property-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.classList.add('visible');
        }
    });
});
