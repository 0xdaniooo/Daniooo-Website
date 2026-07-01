"use strict";
window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / windowHeight) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
});
window.addEventListener('scroll', function () {
    let scrollToTopBtn = document.getElementById('scroll-to-top');
    if (window.pageYOffset >= 200 && window.pageYOffset < (document.documentElement.scrollHeight - window.innerHeight)) {
        scrollToTopBtn.classList.add('visible');
    }
    else {
        scrollToTopBtn.classList.remove('visible');
        scrollToTopBtn.style.animation = 'none';
        void scrollToTopBtn.offsetWidth;
        scrollToTopBtn.style.animation = "null";
    }
});
document.getElementById('scroll-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.addEventListener('click', function (event) {
    const target = event.target;
    const anchor = target.closest('a');
    if (!anchor || !anchor.href)
        return;
    const url = new URL(anchor.href);
    const isInternal = url.origin === window.location.origin;
    const isHashLink = anchor.getAttribute('href')?.startsWith('#');
    const opensNewTab = anchor.target === '_blank';
    if (isInternal && !isHashLink && !opensNewTab) {
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            event.preventDefault();
            progressBar.classList.add('loading-flash');
            setTimeout(() => {
                window.location.href = anchor.href;
            }, 300);
        }
    }
});
document.addEventListener('DOMContentLoaded', function () {
    let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
document.addEventListener("DOMContentLoaded", () => {
    const copyrightElement = document.getElementById("copyright-text");
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© ${currentYear} Daniel Kasprzyk`;
    }
});
