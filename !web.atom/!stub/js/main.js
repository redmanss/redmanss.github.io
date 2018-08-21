(function() {
"use strict";
// VIDEO
var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
	if (isIOS) {
		var canvasVideo = new CanvasVideoPlayer({
			videoSelector: '.video',
			canvasSelector: '.canvas',
			timelineSelector: false,
			autoplay: true,
			makeLoop: true,
			pauseOnClick: false,
			audio: false
		});
		
	}else {
		// Use HTML5 video
		document.querySelectorAll('.canvas')[0].style.display = 'none';
	}
// HEADER
if ($(window).width() >=768) {
	 $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 1100) {
			$(".head-1").css({top: '0px', position: 'fixed'});
		}
		else {
			$(".head-1").css({top: '1100px', position: 'absolute'});
		}
    });
}
else {
	$(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 700) {
			$(".head-1").css({top: '0px', position: 'fixed'});
		}
		else {
			$(".head-1").css({top: '700px', position: 'absolute'});
		}
    });
}
if ($(window).width() <=374) {
	 $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > 600) {
			$(".head-1").css({top: '0px', position: 'fixed'});
		}
		else {
			$(".head-1").css({top: '600px', position: 'absolute'});
		}
    });
}
//language
	$('.language').click(function(){
         $('.drop-language').stop().fadeToggle(250);
		 $('.language-now').toggleClass('language-now-click');
	     $('.arrow').toggleClass('arrow-click');		
        });
	
// Slider ------------	
  $('.slider').slick({
	  //autoplay:true,
	  prevArrow: '.prev',
	  nextArrow: '.next',  
  });
// Filter-Slider ------------	
  $('.filter-slider').slick({
  variableWidth: true,
  infinite: false,
  prevArrow: '.filter-prev',
  nextArrow: '.filter-next',
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
      }
	}, 
	  {
      breakpoint: 811,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
      }
	},
	  {
      breakpoint: 683,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
      }
	},
	   {
      breakpoint: 524,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
      }
	},
	  {
      breakpoint: 359,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
	},
	  {
      breakpoint: 322,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      }
	}
  ]
  });
// Click filter-home
	$('.filter-category').click(function(){
		$(this).toggleClass('filter-hover');
	});
	$('.filter-button').click(function(){
		$(this).toggleClass('filter-hover');
	});
// Click proposition
	$('.proposition1').click(function() {
		$(this).find('.serv-img1, .serv-img1-active').hide();
		$(this).find('.serv-img2, .serv-img2-active').css({display: 'inline-block'}).show();
		$(this).find('h3').css({color: '#009fe3'}).show();
		$('.proposition2, .proposition3, .proposition4').find('.serv-img2, .serv-img2-active').hide();
		$('.proposition2, .proposition3, .proposition4').find('.serv-img1, .serv-img1-active').css({display: 'inline-block'}).show();
		$('.proposition2, .proposition3, .proposition4').find('h3').css({color: '#000'});
		$('.text-proposition1').delay(600).show( "drop", { direction: "down" }, 500 );
		$('.text-proposition2, .text-proposition3, .text-proposition4').fadeOut(400);
		if(document.documentElement.clientWidth <=767) {
			$('.proposition2, .proposition3, .proposition4').find('h3').hide();
		}
	});
	$('.proposition2').click(function() {
		$(this).find('.serv-img1, .serv-img1-active').hide();
		$(this).find('.serv-img2, .serv-img2-active').css({display: 'inline-block'}).show();
		$(this).find('h3').css({color: '#009fe3'}).show();
		$('.proposition1, .proposition3, .proposition4').find('.serv-img2, .serv-img2-active').hide();
		$('.proposition1, .proposition3, .proposition4').find('.serv-img1, .serv-img1-active').css({display: 'inline-block'}).show();
		$('.proposition1, .proposition3, .proposition4').find('h3').css({color: '#000'});
		$('.text-proposition2').delay(600).show( "drop", { direction: "down" }, 500 );
		$('.text-proposition1, .text-proposition3, .text-proposition4').fadeOut(400);
		if(document.documentElement.clientWidth <=767) {
			$('.proposition1, .proposition3, .proposition4').find('h3').hide();
		}
	});
	$('.proposition3').click(function() {
		$(this).find('.serv-img1, .serv-img1-active').hide();
		$(this).find('.serv-img2, .serv-img2-active').css({display: 'inline-block'}).show();
		$(this).find('h3').css({color: '#009fe3'}).show();
		$('.proposition2, .proposition1, .proposition4').find('.serv-img2, .serv-img2-active').hide();
		$('.proposition2, .proposition1, .proposition4').find('.serv-img1, .serv-img1-active').css({display: 'inline-block'}).show();
		$('.proposition2, .proposition1, .proposition4').find('h3').css({color: '#000'});
		$('.text-proposition3').delay(600).show( "drop", { direction: "down" }, 500 );
		$('.text-proposition1, .text-proposition2, .text-proposition4').fadeOut(400);
		if(document.documentElement.clientWidth <=767) {
			$('.proposition2, .proposition1, .proposition4').find('h3').hide();
		}
	});
	$('.proposition4').click(function() {
		$(this).find('.serv-img1, .serv-img1-active').hide();
		$(this).find('.serv-img2, .serv-img2-active').css({display: 'inline-block'}).show();
		$(this).find('h3').css({color: '#009fe3'}).show();
		$('.proposition2, .proposition3, .proposition1').find('.serv-img2, .serv-img2-active').hide();
		$('.proposition2, .proposition3, .proposition1').find('.serv-img1, .serv-img1-active').css({display: 'inline-block'}).show();
		$('.proposition2, .proposition3, .proposition1').find('h3').css({color: '#000'});
		$('.text-proposition4').delay(600).show( "drop", { direction: "down" }, 500 );
		$('.text-proposition1, .text-proposition3, .text-proposition2').fadeOut(400);
		if(document.documentElement.clientWidth <=767) {
			$('.proposition2, .proposition3, .proposition1').find('h3').hide();
		}
	});
// Click equipment
	$('.equip-tab1').click(function(){
		$(this).addClass('active-equip-tab', 100);
		$('.equip-tab2, .equip-tab3, .equip-tab4').removeClass('active-equip-tab');
		$('.equipment-right').find('.characteristics1').fadeIn(1000);
		$('.equipment-right').find('.characteristics2, .characteristics3, .characteristics4').fadeOut(400);
	});
	$('.equip-tab2').click(function(){
		$(this).addClass('active-equip-tab', 100);
		$('.equip-tab1, .equip-tab3, .equip-tab4').removeClass('active-equip-tab');
		$('.equipment-right').find('.characteristics2').fadeIn(1000);
		$('.equipment-right').find('.characteristics1, .characteristics3, .characteristics4').fadeOut(400);
	});
	$('.equip-tab3').click(function(){
		$(this).addClass('active-equip-tab', 100);
		$('.equip-tab2, .equip-tab1, .equip-tab4').removeClass('active-equip-tab');
		$('.equipment-right').find('.characteristics3').fadeIn(1000);
		$('.equipment-right').find('.characteristics2, .characteristics1, .characteristics4').fadeOut(400);
	});
	$('.equip-tab4').click(function(){
		$(this).addClass('active-equip-tab', 100);
		$('.equip-tab2, .equip-tab3, .equip-tab1').removeClass('active-equip-tab');
		$('.equipment-right').find('.characteristics4').fadeIn(1000);
		$('.equipment-right').find('.characteristics2, .characteristics3, .characteristics1').fadeOut(400);
	});	
	//drop-search
	$('.search').click(function(){
		$('.drop-search').fadeIn(300);
	});
	$('.button-search').click(function(){
		$('.drop-search').fadeOut(300);
	});
	//click menu-mobile
	$('.open-menu').click(function(){
		$('.drop-menu').toggle("slide", { direction: "right" },500);
	});
	$('.close-menu').click(function(){
		$('.drop-menu').toggle("slide", { direction: "right" },500);
	});
//STATS
	var show = true;
	var countbox = ".text-proposition";
	$(window).on("scroll load resize", function(){
		if(!show) {
			return false; 						  // Отменяем показ анимации, если она уже была выполнена
		}                  
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 0 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
		$(".stats-number1").spincrement({
			to: 367,
			duration: 10000
		});
		$(".stats-number2").spincrement({
		to: 25,
		duration: 10000
		});
		$(".stats-number3").spincrement({
		to: 7000,
		duration: 10000
		});
			show = false;
		}
	});
}());
/*// preloader
$(window).on('load', function () {
	"use strict";
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(1000).fadeOut('slow');
});*/
//Hide, click
$(document).mouseup(function (e) {
    var container = $(".drop-language");
	var language = $(".language-now, .arrow");
    if (container, language.has(e.target).length === 0)
	{
        container.fadeOut();
		language.removeClass('language-now-click');
		language.removeClass('arrow-click');
    }
});