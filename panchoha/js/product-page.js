$(function () {
    if ($(window).width() >=768) {

    }
    $('.sidebar-scroll').stick_in_parent({
        offset_top: 50,
    });
    $(document).on('click', '.fast-size-block', function () {
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
        infinite: false,
        asNavFor: '.pr-page-slider-for',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    vertical: false,
                    slidesToShow: 3
                }
            }
        ]
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
    $('[data-fancybox="gallery"]').fancybox({
        thumbs : {
            autoStart : false,
        },
        buttons: [
            "zoom",
            //"share",
            //"slideShow",
            //"fullScreen",
            //"download",
            "thumbs",
            "close",
        ],
        backFocus: false,
        autoFocus: false,
        trapFocus: false,
    });
});
