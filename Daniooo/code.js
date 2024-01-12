/* JS file used for code that is used across multiple pages */

// Update the progress bar based on how much the user has scrolled on the page
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / windowHeight) * 100;
    
    document.getElementById('progress-bar').style.width = progress + '%';
});

// Toggle the visibility of the back to top button
window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scroll-to-top');
    
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
        scrollToTopBtn.style.animation = null;
    }
});

// Take user back to the top of the page
document.getElementById('scroll-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize all tooltips
document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
