"use strict";

// Hamburger menu
var bar = document.getElementById('bar');
var navbar = document.getElementById('navbar');
var closeMenu = document.getElementById('close');
bar.addEventListener('click', function () {
  bar.classList.add('active');
  navbar.classList.add('active');
});
closeMenu.addEventListener('click', function () {
  navbar.classList.remove('active');
}); // Alert for app installation

var appImage = document.getElementById('appStore');
var playImage = document.getElementById('playStore');
appImage.addEventListener('click', function () {
  alert('Go to App Store');
  window.location.href = window.open("https://www.apple.com/app-store/");
});
playImage.addEventListener('click', function () {
  alert('Go to Google Play Store');
  window.location.href = window.open("https://play.google.com/store", "_blank");
}); // Product Detail showcase

var mainImg = document.getElementById('main-img');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
};

smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};

smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
};

smallImg[3].onclick = function () {
  mainImg.src = smallImg[3].src;
};