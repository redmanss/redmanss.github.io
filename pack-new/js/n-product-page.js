$(function() {
    $(".ppop-slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:false,
        prevArrow: '.ppop-arrows-next',
        nextArrow: '.ppop-arrows-prev',
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
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".pp-callback").click(function() {
        $(".n-callback").css({
            display: 'flex'
        });
    });
    $(".close-n-callback-block").click(function() {
        $(".n-callback").hide();
    });
});