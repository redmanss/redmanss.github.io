$(function () {
// ----- SLIDE FILTER LIST
    $(".filter-title").click(function () {
        $(this).find(".plus").slideToggle(100);
        $(this).parent().find(".filter-box-list").slideToggle(200);
    });
// ----- OPEN FILTER MOB
    $(".fliter-mob-button").click(function () {
        $(".filter-block").animate({
            left: '0'
        });
        $(".wh-background").fadeIn();
        $("body").addClass("block-body");
    });
// ----- CLOSE FILTER MOB
    $(".n-modal-filter-header").click(function () {
        $(".filter-block").animate({
            left: '-340px'
        });
        $(".wh-background").fadeOut();
        $("body").removeClass("block-body");
    });
    //
    $(".fbi-question").click(function(){
        $(this).parent().find('.fbi-answer').slideToggle(100);
        $(this).parent().find('.fbi-question').toggleClass('fbi-turn');
    });
});
//
$(document).on('click', '.checkbox-list', function() {
    console.log('1')
})
$(document).ready(function () {
    var inProcess = false;
    var count = 24;
    let countProduct = $('#count-product').html();
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 1200 && !inProcess) {
            //var language = $('#foo_label').html();
            var language = 'ru';
            if (countProduct>(count-12)) {
                if (location.pathname.indexOf("/filter/") == -1) {
                    $.ajax({
                        url: location.pathname + count + '/',
                        method: 'GET',
                        data: {
                            "language": language,
                        },
                        beforeSend: function () {
                            inProcess = true;
                        }
                    }).done(function (data) {
                        $(".plb-list").last().append(data);
                        inProcess = false;
                        count += 12;
                    });
                }
            }

        }
    });
});

