document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Scroll to Top Button Logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) { // Show button after scrolling 200px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    });

    // Smooth scroll for hero scroll target
    const heroScrollTarget = document.querySelector('.hero-scroll-target');
    if (heroScrollTarget) {
        heroScrollTarget.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior

            const targetId = 'skills'; // Always scroll to the skills section
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});