$(function () {
    $('.pr-page-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.pr-page-nav'
    });
    $('.pr-page-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.pr-page-slider-for',
    });
    $(".fast-size-block").click(function () {
        $(this).find(".change-size").slideToggle(200);
    });
    $(".more-product-slider").slick({
        autoplay:true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:false,
        arrows: false,
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
});