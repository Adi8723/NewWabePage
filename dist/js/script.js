let hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeEl = document.querySelector('.menu__close');




hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})


closeEl.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__progressiv-counter');
const lines = document.querySelectorAll('.skills__progressiv-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});



$('form').submit(function (e) {
    e.preventDefault();
    if (!$(this).valid()) {
        return;
    }
    $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize()
    }).done(function () {
        $(this).find('input, textarea').val('')

        $('form').trigger('reset');

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

