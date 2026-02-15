// IntersectionObserver for stagger animations
// Animations only play when elements scroll into view
document.addEventListener('DOMContentLoaded', function() {
    var staggerElements = document.querySelectorAll('.stagger-children');

    staggerElements.forEach(function(el) {
        el.classList.add('stagger-hidden');
    });

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.remove('stagger-hidden');
                entry.target.classList.add('stagger-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    staggerElements.forEach(function(el) {
        observer.observe(el);
    });
});
