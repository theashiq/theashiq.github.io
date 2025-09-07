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

        return `With ${years}+ years of experience as a software engineer, I've worked across a range of technologies, with a strong focus on building iOS apps that are not just functional, but delightful to use. I enjoy collaborating with teams to solve tough problems with clean, thoughtful code."`;
    }
    document.getElementById('experience').textContent = getYearsOfExperience(2018);
});