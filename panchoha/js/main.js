$(function(){
    //hover header "border"
    $('.main-menu a').hover(function(){
        if($(this).find('div').hasClass('border')) {
            $(this).find('.border').animate({
                backgroundColor: '#009fe3',
            }, 250);
        }
    }, function(){
        if($(this).find('div').hasClass('border')) {
            $(this).find('.border').animate({
                backgroundColor: '#000',
            }, 250);
        }
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