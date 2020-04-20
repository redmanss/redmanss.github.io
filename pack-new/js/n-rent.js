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
