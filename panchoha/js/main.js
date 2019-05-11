$(function(){
    //hover main header
    $('.main-menu a').hover(function(){
        if($(this).find('div').hasClass('border')) {
            $(this).find('.border').animate({
                backgroundColor: '#009fe3',
            }, 250);
        }
        if($(this).hasClass('for-woman')){
            $('.for-woman-submenu').show()
            $('.sub-menu-backg').show();
        }
        $('.for-woman-submenu').mouseleave(function(){
            $('.for-woman-submenu').stop().hide();
        });
        $(this).find('span').animate({
            color: '#009fe3'
        }, 250);
        $(this).find('.main-menu-icon').animate({
            backgroundPositionX: '0',
            backgroundPositionY: '-21px'
        }, 250);
    }, function(){
        if($(this).find('div').hasClass('border')) {
            $(this).find('.border').animate({
                backgroundColor: '#000',
            }, 250);
        }
        $(this).find('span').animate({
            color: '#000'
        }, 250);
        $(this).find('.main-menu-icon').animate({
            backgroundPositionX: '-30px',
            backgroundPositionY: '0'
        }, 250);
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