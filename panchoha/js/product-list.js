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
    $(".product").hover(function () {
        $(this).find(".product-mini-sllider").toggleClass("product-mini-sllider-vs");
    });
});