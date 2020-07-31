$(document).ready(function(){
    var body = $("body");

    //------ Manager
    $(document).on('click','.consultation',function() {
        $(".n-consultation-block").show();
        $("body").addClass("block-body");
    });
    $(document).on('click','.close-ncb',function() {
        $(".n-consultation-block").hide();
        $("body").removeClass("block-body");
    });
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
    $(document).on('click', '.basket-return', function () {
        $(".n-modal-basket-block").hide();
        $(body).removeClass("block-body");
    });
    $(document).on('click', '#open-product-cart', function () {
        let language = $('#foo_label').html();
        $.ajax({
            type: 'GET',
            url: '/cart-product/show-cart/',
            data: {
                language: language
            },
            success: function (data) {
                document.querySelector(".n-modal-basket-block").innerHTML = data;
                $(".n-modal-basket-block").show();
                $(body).addClass("block-body");
            }
        });
    });
    
    $(document).on('click', '.n-modal-item-close', function () {
        let id = $(this).attr('data-basketvalue');
        let language = $('#foo_label').html();
        $.ajax({
            type: 'GET',
            url: '/cart-product/remove/?id=' + id,
            data: {
                language: language
            },
            success: function (data) {
                document.querySelector(".n-modal-basket-block").innerHTML = data;
                $(".n-modal-basket-block").show();
                $(body).addClass("block-body");
                $.ajax({
                    type: 'GET',
                    url: '/cart-product/count-variation/',
                    success: function (data) {
                        $('#basket-number span').text(data);
                    }
                });
            }
        });

    });
 
    $('.add-product-to-cart').click(function () {
        let id = $(this).attr('data-id');
        let language = $('#foo_label').html();

        $.ajax({
            type: 'GET',
            url: '/cart-product/add-to-cart/?id=' + id,
            data: {
                language: language
            },
            success: function (data) {
                document.querySelector(".n-modal-basket-block").innerHTML = data;
                $(".n-modal-basket-block").show();
                $(body).addClass("block-body");
                $.ajax({
                    type: 'GET',
                    url: '/cart-product/count-variation/',
                    success: function (data) {
                        $('#basket-number span').text(data);
                    }
                });
            }
        });
    });
    
    $(document).on('click', '.basket-del', function () {

        let id = $(this).attr("data-id");
        let count = Number($(this).parent().find('.quantity-num').val());
        let language = $('#foo_label').html();
        if (count > 1) {
            let $quantityNum = $(this).parent().find('.quantity-num');
            $quantityNum.val(+$quantityNum.val() - 1);
            $.ajax({
                data: {
                    language: language
                },
                type: 'GET',
                url: '/cart-product/ajax-decrement/?id=' + id,
                success: function (data) {
                    document.querySelector(".n-modal-basket-block").innerHTML = data;
                    $(".n-modal-basket-block").show();
                    $(body).addClass("block-body");
                    $.ajax({
                        type: 'GET',
                        url: '/cart-product/count-variation/',
                        success: function (data) {
                            $('#basket-number span').text(data);
                        }
                    });
                }
            });
        }

    });
    
    $(document).on('click', '.n-modal-basket .basket-add', function () {
        let id = $(this).attr('data-id');
        let data = parseInt($(this).parents('.n-modal-item-quantity').find('.quantity-num').attr("data-basketvalue"));
        let language = $('#foo_label').html();
        if (data < 6) {
            $.ajax({
                type: 'GET',
                url: '/cart-product/ajax-increment/?id=' + id,
                data: {
                    language: language
                },
                success: function (data) {
                    document.querySelector(".n-modal-basket-block").innerHTML = data;
                    $(".n-modal-basket-block").show();
                    $(body).addClass("block-body");

                }
            });
        };
    });
    
    $(document).on('blur', '.quantity-num', function () {
        let $dataavailability = 6;
        let countInput = parseInt($(this).val());
        console.log(countInput);
        let language = $('#foo_label').html();
        if (Math.sign(countInput)==1) {
            if (countInput > $dataavailability) {
                countInput = $dataavailability;
                $(this).val(countInput);
            }
        }
        else {
            countInput = 1;
            $(this).val(countInput);
        }
        let id = Number($(this).attr('data-id'));
        $.ajax({
            data: {
                language: language
            },
            type: 'GET',
            url: '/cart-product/ajax-upd-sum/?id=' + id + '&quantity=' + countInput,
            success: function (data) {
                document.querySelector(".n-modal-basket-block").innerHTML = data;
                $(".n-modal-basket-block").show();
                $(body).addClass("block-body");
            }
        });
    });
    
    $(document).on('click', '.n-close-modal-basket', function() {
        $(".n-modal-basket-block").hide();
        $(body).removeClass("block-body");
    })
    // ----- END BASKET
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
        $(".catalog-main-menu-item, .catalog-main-menu-item-a").removeClass("active-catalog-main-menu");
        $(this).addClass("active-catalog-main-menu");
        $(".catalog-submenu .catalog-submenu-list").hide();
        $(".catalog-submenu .catalog-submenu-list:nth-child("+ indexdata +")").show();
    });
    //
    $(".catalog-main-menu-item-a").hover(function(){
        $(".catalog-main-menu-item-a, .catalog-main-menu-item").removeClass("active-catalog-main-menu");
        $(this).addClass("active-catalog-main-menu");
        $(".catalog-submenu .catalog-submenu-list").hide();
    });
    //
    $(".mob-title").click(function () {
        $(this).parent().find(".sublistmenu").slideToggle(200);
        $(this).toggleClass("active-catalog-main-menu");
    });
    // ----- END MENU
    // ----- ScrollTop
  $(function() {
    $.fn.scrollToTop = function() {
        let scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250")
            {
                $(scrollDiv).fadeOut("slow")
            }
            else {
                $(scrollDiv).fadeIn("slow")
            }
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});
    $(function() {
        $(".go-top").scrollToTop();
    });   
//
    $(".close-n-login").click(function() {
        $(".n-login-block-modal").hide();
    });
    $(".n-login").click(function() {
        $(".n-login-block-modal").css({
            display: 'flex'
        });
    });
});