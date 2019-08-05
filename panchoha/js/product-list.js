$(function () {
    $(".filter-title").click(function () {
        $(this).parent().find(".plus").toggle();
        $(this).parent().find(".hide-filter-box").toggle();
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
        $(".sort-block-price").toggle();
    });
});