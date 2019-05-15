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
        $('.for-woman-submenu').stop().show().animate({
            marginTop: '0',
        }, 150);
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
        $('.for-woman-submenu').stop().hide().animate({
            marginTop: '20px',
        }, 150);
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
        $('.for-man-submenu').stop().show().animate({
            marginTop: '0',
        }, 150);
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
        $('.for-man-submenu').stop().hide().animate({
            marginTop: '20px',
        }, 150);
        $('.sub-menu-backg').stop().fadeOut(150);
    });








//hover for child
    $('.for-child, .for-child-submenu').hover(function(){
        $('.for-child-submenu').show();
        $('.sub-menu-backg').show();
    }, function(){
        $('.for-child-submenu').hide();
        $('.sub-menu-backg').hide();
    });
//hover header "desire"
    $('.block-header-desire').hover(function(){
        $('.header-desire').css({
            backgroundPosition: '-28px -21px'
        });
    }, function(){
        $('.header-desire').css({
            backgroundPosition: '-58px 0'
        });
    });
//hover header "basket"
    $('.block-header-basket').hover(function(){
        $('.header-basket').css({
            backgroundPosition: '-46px -21px'
        });
    }, function(){
        $('.header-basket').css({
            backgroundPosition: '-76px 0'
        });
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
    });
});