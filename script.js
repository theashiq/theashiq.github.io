/* Ashiqur Rahman — portfolio
   No third-party runtime dependencies: everything here degrades to a
   perfectly readable page if any single piece fails. */

(function () {
    'use strict';

    // Marks that JS is alive, so the reveal styles only apply when something
    // is actually going to reveal them.
    document.documentElement.classList.add('js');

    var THEME_KEY = 'ar-theme';

    function storedTheme() {
        try {
            return localStorage.getItem(THEME_KEY);
        } catch (err) {
            return null; // private mode, blocked storage — not worth failing over
        }
    }

    function storeTheme(value) {
        try {
            localStorage.setItem(THEME_KEY, value);
        } catch (err) {
            /* ignore */
        }
    }

    function systemPrefersDark() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function currentTheme() {
        return document.documentElement.getAttribute('data-theme') || (systemPrefersDark() ? 'dark' : 'light');
    }

    // Applied before first paint by the inline head script where possible;
    // this keeps the button in sync.
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        var btn = document.getElementById('themeToggle');
        if (btn) {
            var dark = theme === 'dark';
            btn.setAttribute('aria-pressed', String(dark));
            btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
        }
    }

    function ready(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    ready(function () {
        try {
            init();
        } catch (err) {
            // Never let a scripting failure leave the page hidden behind the
            // reveal styles.
            document.documentElement.classList.remove('js');
        }
    });

    function init() {
        var saved = storedTheme();
        applyTheme(saved === 'light' || saved === 'dark' ? saved : (systemPrefersDark() ? 'dark' : 'light'));

        var toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.addEventListener('click', function () {
                var next = currentTheme() === 'dark' ? 'light' : 'dark';
                applyTheme(next);
                storeTheme(next);
            });
        }

        // Follow the system until the visitor has expressed a preference.
        if (window.matchMedia) {
            var mq = window.matchMedia('(prefers-color-scheme: dark)');
            var onSystemChange = function (e) {
                if (!storedTheme()) { applyTheme(e.matches ? 'dark' : 'light'); }
            };
            if (mq.addEventListener) { mq.addEventListener('change', onSystemChange); }
            else if (mq.addListener) { mq.addListener(onSystemChange); }
        }

        // Hairline under the bar, only once it has something above it.
        var topbar = document.querySelector('.topbar');
        if (topbar) {
            var onScroll = function () {
                topbar.classList.toggle('is-stuck', window.pageYOffset > 8);
            };
            onScroll();
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        // Years of experience, counted from the actual Dec 2018 start so the
        // figure never runs ahead of the CV.
        var yearsEl = document.getElementById('years');
        if (yearsEl) {
            var now = new Date();
            var years = now.getFullYear() - 2018;
            if (now.getMonth() + 1 < 12) { years -= 1; }
            var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
                         'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
            yearsEl.textContent = words[years] || String(years);
        }

        var footerYear = document.getElementById('footerYear');
        if (footerYear) { footerYear.textContent = new Date().getFullYear(); }

        // Copy email
        var copyBtn = document.getElementById('copyEmail');
        var emailLink = document.getElementById('emailLink');
        if (copyBtn && emailLink) {
            copyBtn.addEventListener('click', function () {
                var address = emailLink.getAttribute('href').replace('mailto:', '');
                var done = function () {
                    copyBtn.textContent = 'copied';
                    copyBtn.classList.add('is-copied');
                    setTimeout(function () {
                        copyBtn.textContent = 'copy';
                        copyBtn.classList.remove('is-copied');
                    }, 1600);
                };
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(address).then(done).catch(function () {
                        copyBtn.textContent = 'failed';
                    });
                } else {
                    copyBtn.textContent = 'failed';
                }
            });
        }

        // Reveal on scroll. If IntersectionObserver is missing, show everything.
        var revealables = document.querySelectorAll('.reveal');
        var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!('IntersectionObserver' in window) || reduced) {
            for (var i = 0; i < revealables.length; i++) { revealables[i].classList.add('is-in'); }
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

        revealables.forEach(function (el) { observer.observe(el); });

        // Anything already on screen at load shows immediately.
        requestAnimationFrame(function () {
            revealables.forEach(function (el) {
                if (el.getBoundingClientRect().top < window.innerHeight) {
                    el.classList.add('is-in');
                }
            });
        });
    }
}());
