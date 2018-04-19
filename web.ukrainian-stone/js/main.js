$(document).ready(function() 
{
// Search-drop-menu ----------------------------------
	  $('.search').click(function()
		{
      $('.search-drop-down').stop().fadeToggle();
    	});
// Language-drop-menu --------------------------------
	  $('.language').click(function()
		{
      $('.language-drop-menu').stop().fadeToggle();
    	});
// Open menu -----------------------------------------
	$('.burger-menu-head').click(function()
		{
           $('.drop-burger-menu').fadeToggle(250);
		   $('.burger-menu-head').css({display:'none'});
  	       $('.close-burger-menu-head').css({display:'inline-block'});
        });
// Close menu ----------------------------------------
	$('.close-burger-menu-head').click(function()
		{
           $('.drop-burger-menu').fadeToggle(250);
		   $('.close-burger-menu-head').css({display:'none'});
		   $('.burger-menu-head').css({display:'inline-block'});
        });
// Modal feedback ------------------------------------
	$('.feedback').click(function()
		{
		  $('.modal-feedback').slideToggle(250);
		  $('.modal-feedback-bg').css('display', 'block');
		  $('.modal-feedback').css('display', 'flex');
		});
// Header --------------------------------------------
	$(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 1000) $(".menu").css({top: '0', position: 'relative'});
        else $(".menu").css({top: '0px', position: 'fixed'});
    });
// About us ------------------------------------------
	$(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 1000) $(".about-us").css({margin: '150px 0px'});
        else $(".about-us").css({margin: '246px 0px 0px'});
    });
// Input-file ------------------------------------------
	$(".modal-file-change input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").val(filename);
    });
});

/*----Feedback-----------------------------------*/
if(document.documentElement.clientWidth >= 1000) {
	$(function(f){
    var element = f('.feedback');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 800 ? 'In': 'Out')](1000);           
    });
});
}

/*----Hide, click-----------------------------------*/
$(document).mouseup(function (e) {
    var container = $(".search-drop-down, .language-drop-menu, .modal-feedback, .modal-feedback-bg");
    if (container.has(e.target).length === 0)
	{
        container.hide();
    }
});


					//go top
$(document).ready(function(){
  $('body').append('<a href="#" class="go-top"</a>');
});
$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});
$(function() {
 $(".go-top").scrollToTop();
});