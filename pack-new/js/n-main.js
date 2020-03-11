$(function () {
    //
    $(document).on('click', '.h-search', function () {
        $('.h-search-block').show(200);
    });
    $(document).on('click', '.h-close-search', function () {
        $('.h-search-block').hide(200);
    });
    $(".sale-b").hover(function () {
        $(this).toggleClass("sale-b-hover");
    });
// ------------------ MENU
    if (document.documentElement.clientWidth >= 1220) {
        $(".catalog-b, .catalog-block").hover(function(){
            $(".catalog-block").stop().fadeIn(100);
            $(".catalog-b").addClass("catalog-b-hover");
            $(".catalog-modal").mouseleave(function () {
                $(".catalog-block").stop().fadeOut(100);
                $(".catalog-b").removeClass("catalog-b-hover");
            })
        }, function(){
            $(".catalog-block").stop().fadeOut(100);
            $(".catalog-b").removeClass("catalog-b-hover");
        });
    } else {
        $(".catalog-b").click(function () {
            $(".wh-background").fadeIn();
            $("body").addClass("block-body");
            $(".catalog-b").addClass("catalog-b-hover");
            $(".mob-menu").animate({
                left: '0'
            });

        });
    }
//
    $(".close-mob-menu").click(function () {
        $(".wh-background").fadeOut();
        $("body").removeClass("block-body");
        $(".catalog-b").removeClass("catalog-b-hover");
        $(".mob-menu").animate({
            left: '-450px'
        });
    });
//
    $(".close-catalog-block").click(function () {
        $(".catalog-block").stop().fadeOut(100);
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
    $(".mob-title").click(function () {
        $(this).parent().find(".sublistmenu").slideToggle(200);
        $(this).toggleClass("active-catalog-main-menu");
    });
//------------------ END MENU
    if (document.documentElement.clientWidth <= 767) {
        $(".title-footer-info, .title-main-social").click(function () {
            $(this).toggleClass("active-footer");
            $(this).next().slideToggle(200);
        });
    }
});