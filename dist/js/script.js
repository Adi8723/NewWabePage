const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeEl = document.querySelector('.menu__close');



hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
})


closeEl.addEventListener('click', () =>{
    menu.classList.remove('active');
})