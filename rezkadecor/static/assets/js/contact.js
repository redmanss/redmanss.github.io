$('#call-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2,
            maxlength: 16
        },
        phone: {
            required: true,
            minlength: 8,
            maxlength: 16
        }
    },
    messages: {
        name: {
            required: "Ваше имя очень важно для нас, заполните пожалуйста поле.",
            minlength: "Минимальная длинна 2 символа.",
            maxlength: "Максимальная длинна 16 символов."
        },
        phone: {
            required: "Ваш номер телефона очень важен для нас, заполните пожалуйста поле.",
            minlength: "Минимальная длинна 8 символов",
            maxlength: "Максимальная длинна 16 символов"
        }
    }
});
$('#call-submit').on('click', function (e) {
    e.preventDefault();
    if ($('#call-form').valid()) {
        $('#call-submit').toggleClass('btn-wait');
        $.ajax({
            url: $('#call-form').attr('action'),
            type: "POST",
            data: $('#call-form').serialize(),
            success: function (response) {
                if (response === 'success') {
                    $('#call-submit').toggleClass('btn-wait');
                    $('#callModal').addClass('success');
                    $('#callModal p.modal-form-notice').text('Ваша заявка на звонок принята, мы свяжемся с вами в ближайшее время.');
                    //clear all fields
                    $('#call-form').trigger("reset");
                }else{
                    $('#call-submit').toggleClass('btn-wait');
                    $('#callModal').addClass('fail');
                    $('#callModal p.modal-form-notice').text('Произошла ошибка, попробуйте позже.');
                    //clear all fields
                    $('#call-form').trigger("reset");
                }
            }
        })
    }
    //('#OrderModal').modal('toggle');
});
$('#order-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2,
            maxlength: 16
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            minlength: 8,
            maxlength: 16
        }
    },
    messages: {
        name: {
            required: "Ваше имя очень важно для нас, заполните пожалуйста поле.",
            minlength: "Минимальная длинна 2 символа.",
            maxlength: "Максимальная длинна 16 символов."
        },
        email: {
            required: "Ваша электронная почта очень важна для нас, заполните пожалуйста поле.",
            email: "Неверный формат электронной почты."
        },
        phone: {
            required: "Ваш номер телефона очень важен для нас, заполните пожалуйста поле.",
            minlength: "Минимальная длинна 8 символов",
            maxlength: "Максимальная длинна 16 символов"
        }
    }
});

$('#OrderModal').on('show.bs.modal', function (e) {

    //get data-id attribute of the clicked element
    var product_id = $(e.relatedTarget).data('product');
    // alert(product_id);
    //populate the textbox
    $(e.currentTarget).find('input[name="product-code"]').val(product_id);
});
$('#order-submit').on('click', function (e) {
    e.preventDefault();
    if ($('#order-form').valid()) {
        $('#order-submit').toggleClass('btn-wait');
        $.ajax({
            url: $('#order-form').attr('action'),
            type: "POST",
            data: $('#order-form').serialize(),
            success: function (response) {
                if (response === 'success') {
                    $('#order-submit').toggleClass('btn-wait');
                    $('#OrderModal').addClass('success');
                    $('#order-form+p.modal-form-notice').text('Ваша заявка принята, мы свяжемся с вами.');
                    //clear all fields
                    $('#order-form').trigger("reset");
                }else{
                    $('#order-submit').toggleClass('btn-wait');
                    $('#OrderModal').addClass('fail');
                    $('#order-form+p.modal-form-notice').text('Произошла ошибка, попробуйте позже.');
                    //clear all fields
                    $('#order-form').trigger("reset");
                }
            }
        })
    }
    //('#OrderModal').modal('toggle');
});
$('.close').on('click', function () {
    $('#OrderModal').removeClass('success');
    $('#OrderModal').removeClass('fail');
    $('p.modal-form-notice').text('');
});
$('#rsvp-form-submit').on('click', function () {
    if ($("#rsvpForm").valid()) {
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#msg").val();
        var firstName = name;
        if (firstName.indexOf(' ') >= 0) {
            firstName = name.split(' ').slice(0, -1).join(' ');
        }
        $.ajax({
            url: $('#rsvpForm').attr('action'),
            type: "POST",
            data: $('#rsvpForm').serialize(),
            success: function (response) {
                console.log(response);
                if (response == 'success') {
                    $('#submitMessage').html("<div class='alert alert-success'>");
                    $('#submitMessage > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#submitMessage > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#submitMessage > .alert-success')
                        .append('</div>');
                    $('#submitMessage').delay(3000).fadeOut();
                    //clear all fields
                    $('#rsvpForm').trigger("reset");
                }
                else {
                    $('#submitMessage').html("<div class='alert alert-danger'>");
                    $('#submitMessage > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#submitMessage > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#submitMessage > .alert-danger').append('</div>');
                    $('#submitMessage').delay(3000).fadeOut();
                    //clear all fields
                    $('#rsvpForm').trigger("reset");
                }
            }
        })
    }
});