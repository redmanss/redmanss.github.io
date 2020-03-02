$(function () {
//
    $(".name-filter").click(function () {
        $(this).toggleClass("name-filter-a");
    });
//
    $(".cbx-bg").click(function () {
        $(this).next().toggleClass("name-filter-a");
    });
//
    $(".filter-title").click(function () {
        $(this).find(".plus").slideToggle(100);
        $(this).parent().find(".filter-box-list").slideToggle(200);
    });
//
    $(".sort-price, .sort-block-price").click(function () {
        $(".sort-block-price").stop().slideToggle(150);
    });
//
    $(".fliter-mob-button").click(function () {
        $(".filter-block").animate({
            left: '0'
        });
        $(".wh-background").fadeIn();
        $("body").addClass("block-body");
    });
//
    $(".close-filter-block").click(function () {
        $(".filter-block").animate({
            left: '-340px'
        });
        $(".wh-background").fadeOut();
        $("body").removeClass("block-body");
    });
});

