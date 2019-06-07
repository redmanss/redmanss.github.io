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
    });
//hover header "basket"
    $('.block-header-basket').hover(function(){
        $('.header-basket').css({
            backgroundPosition: '-44px -21px'
        });
    }, function(){
        $('.header-basket').css({
            backgroundPosition: '-77px 0'
        });
    }).click(function () {
        $('.basket-block').show().toggleClass('basket-hover');
        $('.white-background').fadeIn(150);
    });
//hover header "login"
    $('.block-header-login').hover(function(){
        $('.header-login').css({
            backgroundPosition: '-65px -21px'
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
    });
//close pop
    $('.close-login').click(function(){
        $('.login-block').hide().toggleClass('login-hover');
        $('.white-background').fadeOut(150);
    });
    //
    $('.close-desire').click(function(){
        $('.desire-block').hide().toggleClass('desire-hover');
        $('.white-background').fadeOut(150);
    });
    //
    $('.close-basket').click(function(){
        $('.basket-block').hide().toggleClass('basket-hover');
        $('.white-background').fadeOut(150);
    });
// search sub
    $('.header-search').click(function () {
        $('.white-background').fadeIn(150);
        $('.search-block').fadeIn(150);
    });
    //
    $('.white-background').click(function () {
        let searchBlock = $('.search-block');
        if (searchBlock.is(':visible')){
            $(this).fadeOut(150);
            searchBlock.fadeOut(150);
        }
    });
//remove-desire
    $('.remove-desire').click(function () {
        $(this).parents('.desire-list-product').remove();
    });
});