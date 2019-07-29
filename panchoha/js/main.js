$(function(){
//hover for woman
    $('.for-woman, .for-woman-submenu').hover(function(){
        $('.for-woman').find('.main-menu-icon').css({
             backgroundPositionX: '0',
             backgroundPositionY: '-21px'
         });
        $('.for-woman .border').css({
            backgroundColor: '#009fe3'
        });
        $('.for-woman span').css({
            color: '#009fe3'
        });
        $('.for-woman-submenu').stop().css({display: 'block'}).animate({
            opacity: '1',
            marginTop: '0'
        }, 300);
        $('.sub-menu-backg').stop().fadeIn(150);
    }, function(){
        $('.for-woman').find('.main-menu-icon').css({
            backgroundPositionX: '-30px',
            backgroundPositionY: '0'
        });
        $('.for-woman .border').css({
            backgroundColor: '#000'
        });
        $('.for-woman span').css({
            color: '#000'
        });
        $('.for-woman-submenu').stop().css({display: 'none'}).animate({
            opacity: '0',
            marginTop: '20px'
        }, 300);
        $('.sub-menu-backg').stop().fadeOut(150);
    });
//hover for man
    $('.for-man, .for-man-submenu').hover(function(){
        $('.for-man').find('.main-menu-icon').css({
            backgroundPositionX: '0',
            backgroundPositionY: '-21px'
        });
        $('.for-man .border').css({
            backgroundColor: '#009fe3'
        });
        $('.for-man span').css({
            color: '#009fe3'
        });
        $('.for-man-submenu').stop().css({display: 'block'}).animate({
            opacity: '1',
            marginTop: '0'
        }, 300);
        $('.sub-menu-backg').stop().fadeIn(150);
    }, function(){
        $('.for-man').find('.main-menu-icon').css({
            backgroundPositionX: '-30px',
            backgroundPositionY: '0'
        });
        $('.for-man .border').css({
            backgroundColor: '#000'
        });
        $('.for-man span').css({
            color: '#000'
        });
        $('.for-man-submenu').stop().css({display: 'none'}).animate({
            opacity: '0',
            marginTop: '20px'
        }, 300);
        $('.sub-menu-backg').stop().fadeOut(150);
    });
//hover for child
    $('.for-child, .for-child-submenu').hover(function(){
        $('.for-child').find('.main-menu-icon').css({
            backgroundPositionX: '0',
            backgroundPositionY: '-21px'
        });
        $('.for-child .border').css({
            backgroundColor: '#009fe3'
        });
        $('.for-child span').css({
            color: '#009fe3'
        });
        $('.for-child-submenu').stop().css({display: 'block'}).animate({
            opacity: '1',
            marginTop: '0'
        }, 300);
        $('.sub-menu-backg').stop().fadeIn(150);
    }, function(){
        $('.for-child').find('.main-menu-icon').css({
            backgroundPositionX: '-30px',
            backgroundPositionY: '0'
        });
        $('.for-child .border').css({
            backgroundColor: '#000'
        });
        $('.for-child span').css({
            color: '#000'
        });
        $('.for-child-submenu').stop().css({display: 'none'}).animate({
            opacity: '0',
            marginTop: '20px'
        }, 300);
        $('.sub-menu-backg').stop().fadeOut(150);
    });

//hover header "desire"
    $('.block-header-desire').hover(function(){
        $('.header-desire').css({
            backgroundPosition: '-26px -21px'
        });
    }, function(){
        $('.header-desire').css({
            backgroundPosition: '-58px 0'
        });
    }).click(function () {
        $('.desire-block').show().toggleClass('desire-hover');
        $('.white-background').fadeIn(150);
        $("body").css(
            'overflow', 'hidden'
        );
    });
//hover header "basket"
    $('.block-header-basket').hover(function(){
        $('.header-basket').css({
            backgroundPosition: '-44px -21px'
        });
    }, function(){
        $('.header-basket').css({
            backgroundPosition: '-76px 0'
        });
    }).click(function () {
        $('.basket-block').show().toggleClass('basket-hover');
        $('.white-background').fadeIn(150);
        $("body").css(
            'overflow', 'hidden'
        );
    });
//hover header "login"
    $('.block-header-login').hover(function(){
        $('.header-login').css({
            backgroundPosition: '-62.8px -21px'
        });
        $(this).find('span').css({
            textDecoration: 'underline'
        });
    }, function(){
        $('.header-login').css({
            backgroundPosition: '-95px 0'
        });
        $(this).find('span').css({
            textDecoration: 'none'
        });
    }).click(function(){
        $('.login-block').show().toggleClass('login-hover');
        $('.white-background').fadeIn(150);
        $("body").css(
            'overflow', 'hidden'
        );
    });
    $(".burger-login").click(function(){
        $('.login-block').show().toggleClass('login-hover');
        $('.white-background').fadeIn(150);
        $("body").css(
            'overflow', 'hidden'
        );
    });
//close pop
    $('.close-login').click(function(){
        $('.login-block').hide().toggleClass('login-hover');
        if ($(".burger-menu-sub").is(':visible')) {} else {
            $('.white-background').fadeOut(150);
            $("body").css(
                'overflow', 'auto'
            );
        }
    });
    //
    $('.close-desire').click(function(){
        $('.desire-block').hide().toggleClass('desire-hover');
        $('.white-background').fadeOut(150);
        $("body").css(
            'overflow', 'auto'
        );
    });
    //
    $('.close-basket').click(function(){
        $('.basket-block').hide().toggleClass('basket-hover');
        $('.white-background').fadeOut(150);
        $("body").css(
            'overflow', 'auto'
        );
    });
// search sub
    $('.block-header-search').click(function () {
        $('.white-background').fadeIn(150);
        $('.search-block').fadeIn(150);
        $("body").css(
            'overflow', 'hidden'
        );
    });
    //
    $('.white-background').click(function () {
        let searchBlock = $('.search-block');
        if (searchBlock.is(':visible')){
            $(this).fadeOut(150);
            searchBlock.fadeOut(150);
            $("body").css(
                'overflow', 'auto'
            );
        }
        $(".myprofile-sub").hide();
    });
//remove-desire
    $('.remove-desire').click(function () {
        $(this).parents('.desire-list-product').fadeOut(function () {
            $(this).remove()
        });
    });
//remove-desire
    $('.remove-basket').click(function () {
        $(this).parents('.basket-list-product').fadeOut(function () {
            $(this).remove()
        });
    });
//quantity------------------------------------------
    $(document).on('blur', '.quantity-num', function () {
        let $dataavailability = parseInt($(this).parents('.quantity-block').find('.availability').attr("data-availability"));
        if ($(this).val() > $dataavailability) {
            $(this).val('1');
            $(this).attr("data-quantityvalue", 1);
        } else {
            $(this).attr("data-quantityvalue", $(this).val());
        }
    });
    //
    $(document).on('click', '.quantity-num', function () {
        let $dataavailability = parseInt($(this).parents('.quantity-block').find('.availability').attr("data-availability"));
        let $databasket = parseInt($(this).attr("data-quantityvalue"));
        if ($databasket > $dataavailability) {
            $(this).attr("data-quantityvalue", 1);
            $(this).val('1');
        }
    });
    //
    $(document).on('click', '.quantity-add', function () {
        let $quantityNum = $(this).parent().find('.quantity-num');
        let $databasket = parseInt($(this).parent().find('.quantity-num').attr("data-quantityvalue"));
        let $dataavailability = parseInt($(this).parent().find('.availability').attr("data-availability"));

        if ($databasket < $dataavailability) {
            $quantityNum.val(+$quantityNum.val() + 1);
            $quantityNum.attr("data-quantityvalue", $quantityNum.val());
        }
    });
    //
    $(document).on('click', '.quantity-del', function () {
        let $quantityNum = $(this).parent().find('.quantity-num');

        if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
            $quantityNum.attr("data-quantityvalue", $quantityNum.val());
        }
    });
//-----------------------------------------------------
// Scroll basket + desire
    $(".basket-list, .desire-list").scrollBox();
// burger-menu
    $(".header-burger").click(function () {
        $(".burger-menu-sub").toggle("slide", {direction: "right"}, 400);
        $('.white-background').fadeIn(150);
        $("body").css(
            'overflow', 'hidden'
        );
    });
    //
    $(".close-burger-menu").click(function () {
        $(".burger-menu-sub").toggle("slide", {direction: "right"}, 400);
        $('.login-block').hide().removeClass('login-hover');
        $('.white-background').fadeOut(150);
        $("body").css(
            'overflow', 'auto'
        );
    });
// my profile
    $(".my-profile").hover(function () {
        $(".myprofile-sub").show();
        $(".plus").hide();
    }, function () {
        $(".myprofile-sub").hide();
        $(".plus").show();
    });
// mobile menu
    $('.main-menu-mob div').click(function () {
        $(this).next().slideToggle(400);
        $(this).toggleClass('arrow-hover');
    });
// footer-mobile
    $('.footer-social-title, .footer-pay-title, .footer-info-title').click(function () {
        $(this).next().slideToggle(200);
    });
});
