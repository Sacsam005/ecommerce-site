// Hamburger menu
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const closeMenu = document.getElementById('close');

bar.addEventListener('click', () => {
    bar.classList.add('active');
    navbar.classList.add('active');
})


closeMenu.addEventListener('click', () => {
    navbar.classList.remove('active');
})

// Alert for app installation
let appImage = document.getElementById('appStore');
let playImage = document.getElementById('playStore');

appImage.addEventListener('click', () => {
    alert('Go to App Store');
    window.location.href = window.open("https://www.apple.com/app-store/");
})

playImage.addEventListener('click', () => {
    alert('Go to Google Play Store');
    window.location.href = window.open("https://play.google.com/store", "_blank");

})

