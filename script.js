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
    function getYearsOfExperience(startYear) {
        const currentYear = new Date().getFullYear();
        const years = currentYear - startYear;

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
    const targetValue = getYearsOfExperience(2018);

    if (startingValue < targetValue) {
        animateCountUp(experienceEl, startingValue, targetValue, 800);
    } else {
        experienceEl.textContent = `${targetValue}+`;
    }
});