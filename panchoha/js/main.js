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
            background: 'url("img/icon/desire-hv.svg") no-repeat center'
        });
    }, function(){
        $('.header-desire').css({
            background: 'url("img/icon/desire.svg") no-repeat center'
        });
    });
//hover header "basket"
    $('.block-header-basket').hover(function(){
        $('.header-basket').css({
            background: 'url("img/icon/basket-hv.svg") no-repeat center'
        });
    }, function(){
        $('.header-basket').css({
            background: 'url("img/icon/basket.svg") no-repeat center'
        });
    });
//hover header "search"
    $('.header-search').hover(function(){
        $(this).css({
            background: 'url("img/icon/search-hv.svg") no-repeat center'
        });
    }, function(){
        $(this).css({
            background: 'url("img/icon/search.svg") no-repeat center'
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
    }).click(function(){
        $('.login-block').show().toggleClass('login-hover');
        $('.white-background').fadeIn(150);
    });
//close login
    $('.close-login').click(function(){
        $('.login-block').hide().toggleClass('login-hover');
        $('.white-background').fadeOut(150);
    });
});