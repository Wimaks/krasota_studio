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

});