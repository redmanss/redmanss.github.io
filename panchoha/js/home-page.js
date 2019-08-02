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
        autoplay:true,
        prevArrow: ".arrow-back-bl",
        nextArrow: ".arrow-next-bl"
    });
// SliderPopular
    $(".slider-popular").slick({
        autoplay:true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        dotsClass: "dots-pop-slider",
        prevArrow: ".pop-arrow-back-bl",
        nextArrow: ".pop-arrow-next-bl",
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
//Slider new
    $(".slider-product-block").slick({
        autoplay:true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:false,
        arrows: true,
        nextArrow: '.arrow-npb-next',
        prevArrow: '.arrow-npb-prev',
        responsive: [
            {
                breakpoint: 1201,
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
//Slider SALE
    $(".slider-sale-block").slick({
        autoplay:true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:false,
        arrows: true,
        nextArrow: '.arrow-spb-next',
        prevArrow: '.arrow-spb-prev',
        responsive: [
            {
                breakpoint: 1201,
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