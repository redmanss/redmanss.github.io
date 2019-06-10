$(function(){
    //
    $(document).on('blur', '.quantity-num', function () {
        let $dataavailability = parseInt($(this).parents('.parts-product-quantity').find('.basket-availability').attr("data-availability"));
        if ($(this).val() > $dataavailability) {
            $(this).val('1');
            $(this).attr("data-basketvalue", 1);
        } else {
            $(this).attr("data-basketvalue", $(this).val());
        }
    });
//
    $(document).on('click', '.close-basket', function () {
        $(this).parent().remove();
    });
//
    $('.icon-sidebar').click(function () {
        $('.parts-sidebar').show("slide", { direction: "left" }, 500);
        $('.white-background').fadeIn(150);
    });
//
    $('.close-sidebar').click(function () {
        $('.parts-sidebar').hide("slide", { direction: "left" }, 500);
        $('.white-background').fadeOut(150);
    });
    // login parts
    $('.parts-login').click(function(){
        $('.login-block').show().toggleClass('login-hover');
        $('.white-background').fadeIn(150);
    });
    //close login
    $('.close-login').click(function(){
        $('.login-block').hide().toggleClass('login-hover');
        $('.white-background').fadeOut(150);
    });
    //registration
    $('.parts-reg').click(function(){
        $('.registration').show().toggleClass('login-hover');
        $('.white-background').fadeIn(150);
    });
    //close login
    $('.close-reg').click(function(){
        $('.registration').hide().toggleClass('login-hover');
        $('.white-background').fadeOut(150);
    });
    // registration
    $('.select-reg-title').click(function(){
       $('.reg-drop').toggle();
    });
    // ---------
    $('.reg-drop div').click(function(){
            var regdr = $(this).data('reg1');
            var text = $(this).text();
            $('.reg-direction-title').text(text);
            $('.reg-phone div').hide();
            $(".reg-phone div:nth-child("+ regdr +")").show();
            $('.reg-drop').hide();
        });
    $('.mycabinet').hover(function () {
        $('.parts-accaunt-sub').show();
    }, function () {
        $('.parts-accaunt-sub').hide();
    });
    $('.mybasket').click(function () {
        $('.white-background').fadeIn(150);
        $('.modal-basket').fadeIn(150);
    });
    //
    $('.close-basket-modal').click(function () {
        $('.white-background').fadeOut(150);
        $('.modal-basket').fadeOut(150);
    });
});
$(function () {
    //
    $(document).on('click', '.quantity-num', function () {
            let $dataavailability = parseInt($(this).parents('.parts-product-quantity').find('.basket-availability').attr("data-availability"));
            let $databasket = parseInt($(this).attr("data-basketvalue"));
            if ($databasket > $dataavailability) {
                    $(this).attr("data-basketvalue", 1);
                    $(this).val('1');
                }
            });
    //
    $(document).on('click', '.basket-add', function () {
        let $quantityNum = $(this).parent().find('.quantity-num');
        let $databasket = parseInt($(this).parent().find('.quantity-num').attr("data-basketvalue"));
        let $dataavailability = parseInt($(this).parent().find('.basket-availability').attr("data-availability"));

        if ($databasket < $dataavailability) {
            $quantityNum.val(+$quantityNum.val() + 1);
            $quantityNum.attr("data-basketvalue", $quantityNum.val());
        }
    });
    //
    $(document).on('click', '.basket-del', function () {
        let $quantityNum = $(this).parent().find('.quantity-num');

        if ($quantityNum.val() > 1) {
            $quantityNum.val(+$quantityNum.val() - 1);
            $quantityNum.attr("data-basketvalue", $quantityNum.val());
        }
    });
});
//--------------------------------------------------