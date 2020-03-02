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
});

