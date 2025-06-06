document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, observerOptions);

    // Observe all elements that should animate
    const elements = document.querySelectorAll('.about-container, .project-card');
    elements.forEach(el => observer.observe(el));
});