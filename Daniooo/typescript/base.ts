/* JS file used for code that is used across multiple pages */

declare const bootstrap: any;

// Update the progress bar based on how much the user has scrolled on the page
window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / windowHeight) * 100;
    
    document.getElementById('progress-bar')!.style.width = progress + '%';
});

// Toggle the visibility of the back to top button
window.addEventListener('scroll', function() {
    let scrollToTopBtn = document.getElementById('scroll-to-top')!;
    
    // Make button visible after certain threshold, hide it when the user reaches bottom of the page
    if (window.pageYOffset >= 200 && window.pageYOffset < (document.documentElement.scrollHeight - window.innerHeight)) 
    {
        scrollToTopBtn.classList.add('visible');
    }
    
    // Hides the button
    else 
    {
        scrollToTopBtn.classList.remove('visible');
        scrollToTopBtn.style.animation = 'none';
        void scrollToTopBtn.offsetWidth;
        scrollToTopBtn.style.animation = "null";
    }
});

// Take user back to the top of the page
document.getElementById('scroll-to-top')!.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize all tooltips
document.addEventListener('DOMContentLoaded', function() {
    let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});