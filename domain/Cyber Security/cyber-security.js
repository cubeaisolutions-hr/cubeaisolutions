function togglePopup(popupId, icon) {
    const popup = document.getElementById(popupId);
    const isActive = popup.classList.contains("active");

    if (isActive) {
        popup.classList.remove("active");
        popup.classList.add("inactive");
        setTimeout(() => {
            popup.style.display = 'none';
            popup.classList.remove("inactive");
        }, 3); // Match this duration with the animation duration
    } else {
        popup.style.display = 'block';
        setTimeout(() => popup.classList.add("active"), 1); // Allow for display block to take effect
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
                }, 3); // Match this duration with the animation duration
            }
        });
        document.querySelectorAll('.menu-icon').forEach(icon => {
            icon.classList.remove('active');
        });
    }
});
