$('.close-n-callback-block').click(function() {
    $('.n-callback').hide();
});

//

$('.vacancy-modal').click(function() {
    $('.n-callback').css({
        display: 'flex'
    });
});

//

$(document).ready(function(){
    $(".button-block a").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 777);
        e.preventDefault();
        return false;
        });
    });

    //

$('.burger-menu').click(function() {
    $('.mob-menu-block').show();
    $(".mob-menu").animate({
        left: '0'
    });

});

//

$(".close-mob-menu").click(function () {
    $(".mob-menu").animate({
        left: '-450px'
    });
    $(".mob-menu-block").delay(100).fadeOut(100);
});
