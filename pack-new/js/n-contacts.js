$(function(){
    //
    $(".cp-manager-tabs div").click(function () {
        let indexdata = $(this).data("numbercontacts");
        $(".cp-manager-tabs div").removeAttr("id");
        $(this).attr("id", "active-cp-manager");
        $(".cp-manager-item-block").css({
            display: 'none'
        });
        $(".cp-manager-item-list .cp-manager-item-block:nth-child("+ indexdata +")").css({
            display: 'flex'
        });
    });
    //
    if ($(window).width() <=767) {
        $(".cp-manager-tabs-block").click(function(){
            $(this).find(".cp-manager-tabs").slideToggle();
        });
        $(".cp-manager-tabs div").click(function(){
            let test = $(this).html();
            $(".cp-manager-tabs-button").empty().html(test);
        });
    }
});
