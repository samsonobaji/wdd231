// Lazy loading function
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img[data-src]');
    const options = {
        root: null, // Viewport
        rootMargin: '0px', // No margin
        threshold: 0.1 // Trigger when 10% of the image is visible
    };

    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
        console.warn('IntersectionObserver not supported. Loading all images immediately.');
        images.forEach(image => {
            image.src = image.dataset.src; // Load image immediately
            image.onload = () => image.classList.add('loaded');
        });
        return;
    }

    // IntersectionObserver callback
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src; // Set the src
                image.onload = () => image.classList.add('loaded'); // Add loaded class
                image.onerror = () => console.error(`Error loading image: ${image.dataset.src}`); // Handle errors
                observer.unobserve(image); // Stop observing the image
            }
        });
    }, options);

    // Observe each image
    images.forEach(image => {
        imageObserver.observe(image);
    });
});