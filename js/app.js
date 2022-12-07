$(document).ready(function () {

    $('.reviews').slick({
        infinite: false,
        appendArrows: $('.reviews__slider-btns'),
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 785,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });

    $('.documents').slick({
        appendArrows: $('.documents__slider-btns'),
        slidesToShow: 4,
        infinite: false,
        // responsive: [{
        //     breakpoint: 1230,
        //     settings: {
        //         slidesToShow: 3
        //     }
        // },
        // {
        //     breakpoint: 992,
        //     settings: {
        //         slidesToShow: 2
        //     }
        // },
        // {
        //     breakpoint: 550,
        //     settings: {
        //         slidesToShow: 1
        //     }
        // }
        // ]
    });

    $('.tariff').slick({
        infinite: false,
        slidesToShow: 4,
        appendArrows: $('.tariff__slider-btns'),
        responsive: [{
            breakpoint: 1230,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 955,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1
            }
        }]
    })

    // 

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

    $('.tariff__overflow').on('click', function (event) {
        event.preventDefault()

        $(this).closest('.tariff__item').toggleClass('opened')
    })

    $('textarea').autoResize();

});

