
let hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeEl = document.querySelector('.menu__close');




// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// })



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

closeEl.addEventListener('click', () => {
    menu.classList.remove('active');
});

document.querySelectorAll('.menu__link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');

}));



const counters = document.querySelectorAll('.skills__progressiv-counter');
const lines = document.querySelectorAll('.skills__progressiv-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
//Modal



$('.modal__close').on('click', function () {
    $('.overlay, #thanks').fadeOut('slow');
});



$('.contacts__form').submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }
    $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize()
    }).done(function () {
        $(this).find('input').val('')
        $(this).find('textarea').val('')

        $('.overlay, #thanks').fadeIn('slow');
        $('.contacts__form').trigger('reset');




    })
    return false;
})



$(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
})


