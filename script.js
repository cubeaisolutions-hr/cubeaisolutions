// index.js
// JavaScript to toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function() {
  var mobileNav = document.getElementById('mobile-nav');
  if (mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none';
  } else {
    mobileNav.style.display = 'block';
  }
});


let currentIndex = 0;
const images = document.querySelectorAll('.background-images img');
const textElements = document.querySelectorAll('.image-text');

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
      textElements[i].classList.add('active');
    } else {
      image.classList.remove('active');
      textElements[i].classList.remove('active');
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Show the first image initially
showImage(currentIndex);

// Automatically switch images every 5 seconds
setInterval(nextImage, 5000);





      