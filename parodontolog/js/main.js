var lightboxDescription = GLightbox({
    selector: 'glightbox'
});
(function() {
    $('.call_back_button').click(function(){
        $('#call_back_block').fadeIn();
        $('.bg-dark').fadeIn();
        $('body').css({overflow: "hidden"});
    });
    $('.mfp-close').click(function(){
        $('#call_back_block').fadeOut();
        $('.bg-dark').fadeOut();
        $('body').css({overflow: "auto"});
    });
}());

