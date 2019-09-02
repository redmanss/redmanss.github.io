$(function () {
    $(document).on('click', 'fast-size-block', function () {
        $(this).find(".change-size").slideToggle(200);
    });
    //
    $('.pr-page-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.pr-page-nav',
        infinite: false
    });
    //
    $('.pr-page-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical: true,
        asNavFor: '.pr-page-slider-for',
    });
    //
    $(".more-product-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:false,
        prevArrow: '.more-pr-prev',
        nextArrow: '.more-pr-next',
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
    //
    $('.pr-page-slider').stick_in_parent({
        offset_top: 50,
    });
    //
    $(".fast-size-block").click(function () {
        $(this).find(".change-size").slideToggle(200);
    });
});
