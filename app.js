const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLinks = document.querySelectorAll('.navbar__links');
const navBtn = document.querySelector('.button');
const missionBlocks = document.querySelectorAll('.mission-block');

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

missionBlocks.forEach(block => {
  appearOnScroll.observe(block);
});

// Toggle menu on hamburger click
menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Auto-close mobile menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 960) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  });
});

// Also close on "Get in Touch" button
if (navBtn) {
  navBtn.addEventListener('click', () => {
    if (window.innerWidth <= 960) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  });
}

// Reset menu when resizing bigger
window.addEventListener('resize', () => {
  if (window.innerWidth > 960) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  }
});
// Close mobile menu when clicking inside the form (input or textarea)
const formElements = document.querySelectorAll('input, textarea');

formElements.forEach(el => {
  el.addEventListener('focus', () => {
    if (window.innerWidth <= 960) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  });
});
// When clicking anywhere OUTSIDE the menu, close it
document.addEventListener('click', function(e) {
  if (window.innerWidth <= 960 && menuLinks.classList.contains('active')) {
    if (!e.target.closest('.navbar__container') && !e.target.closest('#mobile-menu')) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  }
});

const images = [
  "images/images/4730709_2.jpg",
  "images/images/4730709_24_2.jpg",
  "images/images/4730709_37_2.jpg",
  "images/images/4730709_40_2.jpg"
];

let currentIndex = 0;
const heroSection = document.getElementById('hero-section');

heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;

function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
}

setInterval(changeBackground, 3000);

const music = document.getElementById('background-music');
const button = document.getElementById('music-button');

function toggleMusic() {
  if (music.paused) {
    music.volume = 0; // Start volume at 0
    music.play();
    button.textContent = "Pause Music";
    fadeInMusic(); // <- start fading in
  } else {
    music.pause();
    button.textContent = "Play Music";
  }
}

function fadeInMusic() {
  let volume = 0;
  const interval = setInterval(() => {
    if (volume < 0.2) {  // target volume (soft)
      volume += 0.01;   // increase by 0.01
      music.volume = volume;
    } else {
      clearInterval(interval); // stop when reach 20% volume
    }
  }, 100); // every 100 milliseconds
}
