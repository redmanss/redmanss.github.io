// ----
$(".chb-order").click(function() {
    $(".n-consultation-block").show();
    $("body").addClass("block-body");
});
// ----
$(".close-ncb").click(function() {
    $(".n-consultation-block").hide();
    $("body").removeClass("block-body");
});
//
    $(window).scroll(function() {
        let windowsHeight = $(window).height();
        let top = $(document).scrollTop();
        if (top > windowsHeight) 
        {
            $(".chb-header2").fadeIn();
        }
        else {
            $(".chb-header2").fadeOut();
        }
    });
//
$(document).ready(function(){
    $(".ch-menu a").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top}, 777);
        e.preventDefault();
        return false;
        });
    });
    
