document.getElementById('what-to-do-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('what-to-do').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('solutions-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('solutions').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('trending-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('trending').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('future-plan-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('future-plan').scrollIntoView({
        behavior: 'smooth'
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelectorAll('.sidebar-nav .nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var sectionId = this.getAttribute('href').substring(1); 
        scrollToSection(sectionId); 
    });
});

function togglePopup(popupId, icon) {
    const popup = document.getElementById(popupId);
    const isActive = popup.classList.contains("active");

    if (isActive) {
        popup.classList.remove("active");
        popup.classList.add("inactive");
        setTimeout(() => {
            popup.style.display = 'none';
            popup.classList.remove("inactive");
        }, 30); // Match this duration with the animation duration
    } else {
        popup.style.display = 'block';
        setTimeout(() => popup.classList.add("active"), 10); // Allow for display block to take effect
    }

    icon.classList.toggle("active", !isActive);
}

document.addEventListener('click', function(event) {
    const isClickOnIcon = event.target.closest('.menu-icon');
    if (!isClickOnIcon) {
        document.querySelectorAll('.popup-container').forEach(popup => {
            if (popup.classList.contains('active')) {
                popup.classList.remove('active');
                popup.classList.add('inactive');
                setTimeout(() => {
                    popup.style.display = 'none';
                    popup.classList.remove("inactive");
                }, 300); // Match this duration with the animation duration
            }
        });
        document.querySelectorAll('.menu-icon').forEach(icon => {
            icon.classList.remove('active');
        });
    }
});
