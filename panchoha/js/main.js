$(function(){
    //hover header "border"
    $('.main-menu a').hover(function(){
        if($(this).find('div').hasClass('border')) {
            $('.border').css({'background-color': '#009fe3'});
        }
        else {

        }
    });
});