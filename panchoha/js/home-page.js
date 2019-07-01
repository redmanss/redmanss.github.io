$(function () {
    // main slider home
    $(".slider").slick({
        prevArrow: ".arrow-back-bl",
        nextArrow: ".arrow-next-bl"
    });
// SliderPopular
    $(".slider-popular").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        dotsClass: "dots-pop-slider",
        prevArrow: ".pop-arrow-back-bl",
        nextArrow: ".pop-arrow-next-bl"
    });
});