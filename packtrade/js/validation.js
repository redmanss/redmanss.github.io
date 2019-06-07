// Validate vacancy form
$(function(){
    $('#vacancy-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
            },
            file: {
                extension: "doc|docx"
            }
        },
        messages: {
            name: {
                required: "Поле 'Имя' обязательно к заполнению",
                minlength: "Введите не менее 2-х символов в поле 'Имя'"
            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Необходим формат адреса email"
            },
            phone: {
                required: "Поле 'Телефон' обязательно к заполнению",
                minlength: "Минимальное количество символов 10",
                format: "test",
            },
            file: {
                accept: "Формат файла должен быть doc, docx",
            }
        }
    });
});