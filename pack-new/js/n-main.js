$(document).ready(function(){

    var body = $("body");

    // ----- Search
        $(document).on('click', '.h-search', function () {
            $('.h-search-block').show(200);
        });
        $(document).on('click', '.h-close-search', function () {
            $('.h-search-block').hide(200);
        });
    // ----- Hover Sale
        $(".sale-b").hover(function () {
            $(this).toggleClass("sale-b-hover");
        });

    // ----- Basket
    $(document).on('click', '#open-product-cart', function() {
        $(".n-modal-basket-block").show();
        $(body).addClass("block-body");
    })
    $(document).on('click', '.n-close-modal-basket', function() {
        $(".n-modal-basket-block").hide();
        $(body).removeClass("block-body");
    })
    $(document).on('click', '.n-modal-item-close', function () {
        $(this).parent().remove();
    });
    // ----- Footer
    if (document.documentElement.clientWidth <= 767) {
        $(".title-footer-info, .title-main-social").click(function () {
            $(this).toggleClass("active-footer");
            $(this).next().slideToggle(200);
        });
    }
    // ----- MENU
    if (document.documentElement.clientWidth >= 1601) {
        let catalogBlock = $(".catalog-block");
        let catalogB = $(".catalog-b");
            $(".wh-bckg-c").click(function() {
                $(catalogBlock).toggleClass("catalog-block-hover");
                $(catalogB).toggleClass("catalog-b-hover");
            });
            $(catalogB).click(function () {
                $(catalogBlock).toggleClass("catalog-block-hover");
                $(this).toggleClass("catalog-b-hover");
            });
        
    } else {
        $(".catalog-b").click(function () {
            $(body).addClass("block-body");
            $(".mob-menu-block").show();
            $(".mob-menu").animate({
                left: '0'
            });
        });
    }
    //
    $(".close-mob-menu").click(function () {
        $(body).removeClass("block-body");
        $(".catalog-b").removeClass("catalog-b-hover");
        $(".mob-menu").animate({
            left: '-450px'
        });
        $(".mob-menu-block").delay(100).fadeOut(100);
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
    // ----- END MENU     
});