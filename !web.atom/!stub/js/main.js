// preloader
$(window).on('load', function () {
	"use strict";
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(1500).fadeOut('slow');
});
//Hide, click
$(document).mouseup(function (e) {
	"use strict";
    var container = $(".drop-language");
	var language = $(".language-now, .arrow");
    if (container, language.has(e.target).length === 0)
	{
        container.fadeOut();
		language.removeClass('language-now-click');
		language.removeClass('arrow-click');
    }
});
/*----------------------------------------------------------------------------------------------------------*/
$(function() {
	"use strict";
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

});