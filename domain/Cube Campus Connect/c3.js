document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.count');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const count = parseInt(element.getAttribute('data-count'), 10);
                let start = 0;
                const end = count;
                const duration = 2000; // Duration of the animation in ms
                const stepTime = Math.abs(Math.floor(duration / end));
                
                const timer = setInterval(() => {
                    start += 1;
                    element.textContent = start;
                    if (start === end) {
                        clearInterval(timer);
                    }
                }, stepTime);
                
                observer.unobserve(element); // Stop observing once animation is done
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}
const toggleButton = document.getElementById('toggle-button');
const additionalCards = document.getElementById('additional-cards');

toggleButton.addEventListener('click', function() {
    if (additionalCards.style.display === 'none' || additionalCards.style.display === '') {
        additionalCards.style.display = 'flex';
        toggleButton.textContent = 'View Less';
    } else {
        additionalCards.style.display = 'none';
        toggleButton.textContent = 'View All';
    }
});
// intership,session,workshop popup
document.querySelectorAll('.apply-now-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        document.body.classList.add('no-scroll');
        document.getElementById('image-popup').style.display = 'block';
    });
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.body.classList.remove('no-scroll');
    document.getElementById('image-popup').style.display = 'none';
});


function setActive(button) {
    // Optionally, remove 'active' class from other buttons or cards
    const buttons = document.querySelectorAll('.apply-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');
}

// This function handles redirection
function redirectToForm() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdlKGDikYy7b-5Gjxg4GjIfcHPiy2_3Gdhg03WXpxSlf6g1NQ/viewform"; // URL has been updated to google forms
}