$(document).ready(function(){
    $(".header-block, .footer-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
//
$(function () {
    $('.works-slider-h').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '.next-h',
        prevArrow: '.prev-h',
        infinite: false,
    });
    //
    $('.works-slider-w').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '.next-w',
        prevArrow: '.prev-w',
        infinite: false,
    });
    //
    $('.works-slider-s').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '.next-s',
        prevArrow: '.prev-s',
        infinite: false,
    });
    //
    $('.ts-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '.next-ts',
        prevArrow: '.prev-ts',
        infinite: false,
        variableWidth: true,
    });
});