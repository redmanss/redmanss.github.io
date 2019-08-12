$(function () {
    $(".filter-title").click(function () {
        $(this).parent().find(".plus").slideToggle(100);
        $(this).parent().find(".hide-filter-box").slideToggle(200);
    });
    $(".filter-show-all").click(function () {
        $(this).parent().find(".filter-box-list").css({
            height: 'auto',
        });
        $(this).hide();
        $(this).parent().find(".filter-hide").show();
    });
    $(".filter-hide").click(function () {
        $(this).parent().find(".filter-box-list").css({
            height: '110px',
        });
        $(this).hide();
        $(this).parent().find(".filter-show-all").show();
    });
    $(".sort-price").click(function () {
        $(".sort-block-price").slideToggle(100);
    });
    $(".mini-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    });
    $('.fast-img-slide-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.fast-img-slide-nav'
    });
    $('.fast-img-slide-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.fast-img-slide-for',
    });
    $(".product").hover(function () {
        $(this).find(".product-mini-sllider").toggleClass("product-mini-sllider-vs");
    });
    $(".fast-size-block").click(function () {
        $(this).find(".change-size").slideToggle(200);
    });
    $(".close-fast-view").click(function () {
        $(".fast-view-block").toggleClass("fast-view-block-show");
        $('.white-background').fadeOut(150);
    });
    $(".product-fast-view").click(function () {
        $(".fast-view-block").toggleClass("fast-view-block-show");
        $('.white-background').fadeIn(150);
    });
});