$(document).on('click', '.h-search', function () {
    $('.h-search-block').show(200);
});
$(document).on('click', '.h-close-search', function () {
    $('.h-search-block').hide(200);
});
$(".sale-b").hover(function () {
    $(this).toggleClass("sale-b-hover");
});

// PRODUCT MENU
$(".catalog-b, .catalog-block").hover(function(){
    $(".catalog-block").stop().fadeIn(100);
    $(".catalog-b").addClass("catalog-b-hover");
    if (document.documentElement.clientWidth <= 1600) {
        $("body").addClass("block-body");
    }
    $(".catalog-modal").mouseleave(function () {
        $(".catalog-block").stop().fadeOut(100);
        $(".catalog-b").removeClass("catalog-b-hover");
        $("body").removeClass("block-body");
    })
}, function(){
    $(".catalog-block").stop().fadeOut(100);
    $(".catalog-b").removeClass("catalog-b-hover");
    $("body").removeClass("block-body");
});
//
$(".catalog-main-menu-item").hover(function () {
    let indexdata = $(this).data("numbermain");
    $(".catalog-main-menu-item").removeClass("active-catalog-main-menu");
    $(this).addClass("active-catalog-main-menu");
    $(".catalog-submenu .catalog-submenu-list").hide();
    $(".catalog-submenu .catalog-submenu-list:nth-child("+ indexdata +")").show();
});
//
$(".close-catalog-block").click(function () {
    $(".catalog-block").stop().fadeOut(100);
    $("body").removeClass("block-body");
});
