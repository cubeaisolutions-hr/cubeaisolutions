document.getElementById('what-to-do-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('what-to-do').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('solutions-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('solutions').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('trending-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('trending').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('future-plan-link').addEventListener('click', function (event) {
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

document.querySelectorAll('.sidebar-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var sectionId = this.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

document.getElementById("sidebarToggle").onclick = function () {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("show")) {
        sidebar.classList.remove("show");
    } else {
        sidebar.classList.add("show");
    }
};


function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}


document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('show');
});