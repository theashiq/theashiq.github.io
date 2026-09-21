document.addEventListener('DOMContentLoaded', function() {
    // Guarded: if the AOS CDN fails to load, an uncaught ReferenceError here
    // would abort the rest of this handler and take every other behaviour on
    // the page down with it.
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }

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

            const targetId = 'highlights'; // Always scroll to the first section
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Copy email to clipboard
    const emailLink = document.getElementById('emailLink');
    if (emailLink) {
        const copyIcon = emailLink.nextElementSibling; // Get the next sibling
        if (copyIcon && copyIcon.classList.contains('copy-icon')) {
            copyIcon.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent the mailto link from triggering
                e.stopPropagation(); // Stop event bubbling to the parent link

                const emailAddress = emailLink.getAttribute('href').replace('mailto:', ''); // Extract email address

                navigator.clipboard.writeText(emailAddress).then(() => {
                    // Optional: Provide visual feedback
                    const originalIcon = copyIcon.innerHTML;
                    copyIcon.innerHTML = '<i class="fas fa-check"></i>'; // Change to check icon
                    setTimeout(() => {
                        copyIcon.innerHTML = '<i class="fas fa-copy" style="font-size: 0.7em;"></i>'; // Revert to copy icon
                    }, 1500);
                }).catch(err => {
                    console.error('Failed to copy email: ', err);
                });
            });
        }
    }

    // Number of years of experience calculation
    // Counts whole years elapsed since the start date, so the figure never
    // runs ahead of the CV (e.g. a Dec 2018 start reads 7+ until Dec 2026).
    function getYearsOfExperience(startYear, startMonth) {
        const now = new Date();
        let years = now.getFullYear() - startYear;

        if (now.getMonth() + 1 < startMonth) {
            years -= 1;
        }

        return years;
    }

    function animateCountUp(el, start, end, duration = 800) {
        const range = end - start;
        const stepTime = Math.max(duration / range, 50); // ensure a smooth but fast update
        let current = start;
        const increment = 1;

        const timer = setInterval(() => {
            current += increment;
            el.textContent = `${current}+`;

            if (current >= end) {
            clearInterval(timer);
            }
        }, stepTime);
    }

    const experienceEl = document.getElementById('experience');
    const startingValue = 1;
    const targetValue = getYearsOfExperience(2018, 12); // Career start: December 2018

    if (startingValue < targetValue) {
        animateCountUp(experienceEl, startingValue, targetValue, 800);
    } else {
        experienceEl.textContent = `${targetValue}+`;
    }

    // Footer copyright year
    const footerYearEl = document.getElementById('footerYear');
    if (footerYearEl) {
        footerYearEl.textContent = new Date().getFullYear();
    }

    // The nav links scroll horizontally on narrow screens; fade the right edge
    // while any of them are still out of view.
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        const updateNavFade = () => {
            const remaining = navLinks.scrollWidth - navLinks.clientWidth - navLinks.scrollLeft;
            navLinks.classList.toggle('can-scroll-right', remaining > 1);
        };

        updateNavFade();
        navLinks.addEventListener('scroll', updateNavFade);
        window.addEventListener('resize', updateNavFade);
    }

    // Solidify the nav background once the hero is scrolled past
    const siteNav = document.getElementById('siteNav');
    if (siteNav) {
        const toggleNavBackground = () => {
            siteNav.classList.toggle('scrolled', window.pageYOffset > 50);
        };

        toggleNavBackground();
        window.addEventListener('scroll', toggleNavBackground);
    }
});
