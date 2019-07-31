$(function () {
//click desire
    $(".default-desire").click(function () {
        $(this).toggle();
        $(this).parent().find(".active-desire").toggle();
    });
    $(".active-desire").click(function () {
        $(this).toggle();
        $(this).parent().find(".default-desire").toggle();
    });
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
        nextArrow: ".pop-arrow-next-bl",
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
// NEW Block
    $(".slider-product-block, .slider-sale-block").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
//seo button
    $('.seo-button').click(function () {
        $(".home-seo-text").toggleClass("seo-button-click", 400);
    });
});