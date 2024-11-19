function togglePopup(popupId, icon) {
    const popup = document.getElementById(popupId);
    const isActive = popup.style.display === "block";
    popup.style.display = isActive ? "none" : "block";
    icon.classList.toggle("active", !isActive);
}

document.addEventListener('click', function(event) {
    const isClickOnIcon = event.target.closest('.menu-icon');
    if (!isClickOnIcon) {
        document.querySelectorAll('.popup, #header-popup').forEach(popup => {
            popup.style.display = 'none';
        });
        document.querySelectorAll('.menu-icon').forEach(icon => {
            icon.classList.remove('active');
        });
    }
});