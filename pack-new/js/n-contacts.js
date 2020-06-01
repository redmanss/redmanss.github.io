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