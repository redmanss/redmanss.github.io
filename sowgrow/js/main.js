$(document).ready(function(){
    $(".main-page-menu, .footer-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
//
$(document).on('click', '.order-button, .products-item-button', function () {
    $('.consultation').fadeIn();
    $(".background").fadeIn();
});
//
$(document).on('click', '.close-pop-up', function() {
    $(this).parent().fadeOut();
    $(".background").fadeOut();
});
//
$(function () {
    $('.ph-slider-block').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: ".right-arrow",
        prevArrow: ".left-arrow"
    });
    $('.products-item').hover(function () {
        $(this).find(".img-product").hide();
        $(this).find(".img-hover").show();
    }, function () {
        $(this).find(".img-product").show();
        $(this).find(".img-hover").hide();
    });
});