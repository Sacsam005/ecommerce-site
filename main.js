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


