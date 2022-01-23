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

// Product Detail showcase
let mainImg = document.getElementById('main-img');
let smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
}