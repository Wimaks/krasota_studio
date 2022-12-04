$(document).ready(function () {

    $('.reviews').slick({
        infinite: false,
        appendArrows: $('.reviews__slider-btns'),
        slidesToShow: 3,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    //* BURGER ACTIVE

    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();

        $('.burger').toggleClass('active'); // появление меню при нажатии на бургер
        $(this).toggleClass('active'); // изменение меню бургер при открытии меню
    });

    // * ACCORDEON ACTIVE

    $('.faq-accordion__item').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
    })

    //* FAQ

    $('.faq__overflow').on('click', function (event) {
        event.preventDefault()

        $('.faq-accordion').toggleClass('active')
    })

});

