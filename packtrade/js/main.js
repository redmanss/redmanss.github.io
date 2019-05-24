$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(200).fadeOut('slow');
});

	$('.input-range input').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);
		if(!/\d/.test(keyChar)) return false;
	});


if($(window).width() < 371) {
	$('.search-top label').click(function() {
		$('.search-top input').toggle(500);
		setTimeout(function() { $('.language').toggle()}, 270);
		// $('.search-top').toggleClass('click-search-top');
	});
} else {
	$(function() {
		$('.search-top label').click(function() {
			$('.search-top input').toggle(1000);
			setTimeout(function() { $('.language').toggle()}, 300);
			// $('.search-top').toggleClass('click-search-top');
		});
	});
}


					// change images
if(document.documentElement.clientWidth >= 1000) {
$(function() {
	// $('.directions .classification .img2').hide();
	$('.directions .classification').hover(function() {
		$(this).find('.img1').hide();
		$(this).find('.img2').show();
		$(this).find('span').css('color','#0070ba');
	}, function() {
		$(this).find('.img1').show();
		$(this).find('.img2').hide();
		$(this).find('span').css('color','#5e5f5e');
	});

	$('.menu-cat .section').hover(function() {
			$(this).find('.img1').hide();
			$(this).find('.img2').show();
			$(this).find('span').css('color','#0070ba');
		}, function() {
			$(this).find('.img1').show();
			$(this).find('.img2').hide();
			$(this).find('span').css('color','#5e5f5e');
		});

	// $('.species .section .img2').hide();
	$('.species .section').hover(function() {
			$(this).find('.img1').hide();
			$(this).find('.img2').show();
			$(this).find('span').css('color','#0070ba');
		}, function() {
			$(this).find('.img1').show();
			$(this).find('.img2').hide();
			$(this).find('span').css('color','#5e5f5e');
		});
});
}

					// menu catalog and menu right

if(document.documentElement.clientWidth > 1024) {
	$(function() {
		$('.nav-catalog').click(function(){
			$('.menu-cat .container').slideToggle();
			$('.menux').toggle();
			$('.cloak').css({'background':'#000','opacity':'0.7', 'position':'absolute'});
			var hDoc = $(document).height();
			$('.cloak').height(hDoc);
			$('.cloak').toggleClass('cloak-menu');
			$('.cloak').toggle();
			$('html, body').toggleClass('no-scroll');
			$('.nav-menu-top .inf-hover').toggleClass('inf-hover-db');
			});

		$('.cloak').click(function () {
			$('.menu-cat .container').slideToggle();
			$('.menux').toggle();
			var hDoc = $(document).height();
			$('.cloak').height(hDoc);
			$('.cloak').toggleClass('cloak-menu');
			$('.cloak').toggle();
			$('html, body').toggleClass('no-scroll');
			$('.nav-menu-top .inf-hover').removeClass('inf-hover-db');
		});

	/*	$('.cloak').hover(function () {
			$('.sections-cat').hide();
			$('.menu-cat .container .sections-cat').css({'z-index':'-1'});
		});

		$('header').hover(function () {
			$('.sections-cat').hide();
		});

		$('.items-cat .item9').hover(function () {
			$('.sections-cat').hide();
		});*/
		$('.items-cat .item1').hover(function() {
		   
		    $('.item1').addClass('item-cat-hover');
		    $('.item2, .item3, .item4, .item5, .item6').removeClass('item-cat-hover');
			$('.sections1').show();
			$('.item1-cat .row').css({'visibility':'visible'});
			$('.section-cat').css({'display':'inline'});
			$('.sections2').hide();
			$('.sections3').hide();
			$('.sections4').hide();
			$('.sections5').hide();
			$('.sections6').hide();
			$('.sections7').hide();
			$('.sections8').hide();
		});

		$('.items-cat .item2').hover(function() {
		$('.item2').addClass('item-cat-hover');
		    $('.item1, .item3, .item4, .item5, .item6').removeClass('item-cat-hover');
			$('.sections2').show();
			$('.item2-cat .row').css({'visibility':'visible'});
			$('.section-cat').css({'display':'inline'});
			$('.sections1').hide();
			$('.sections3').hide();
			$('.sections4').hide();
			$('.sections5').hide();
			$('.sections6').hide();
			$('.sections7').hide();
			$('.sections8').hide();
		});

		$('.items-cat .item3').hover(function() {
		    $('.item3').addClass('item-cat-hover');
		    $('.item2, .item1, .item4, .item5, .item6').removeClass('item-cat-hover');
			$('.sections3').show();
			$('.item3-cat .row').css({'visibility':'visible'});
			$('.section-cat').css({'display':'inline'});
			$('.sections2').hide();
			$('.sections1').hide();
			$('.sections4').hide();
			$('.sections5').hide();
			$('.sections6').hide();
			$('.sections7').hide();
			$('.sections8').hide();
		});

		$('.items-cat .item4').hover(function() {
		$('.item4').addClass('item-cat-hover');
		    $('.item2, .item3, .item1, .item5, .item6').removeClass('item-cat-hover');
			$('.sections4').show();
			$('.item4-cat .row').css({'visibility':'visible'});
			$('.section-cat').css({'display':'inline'});
			$('.sections2').hide();
			$('.sections3').hide();
			$('.sections1').hide();
			$('.sections5').hide();
			$('.sections6').hide();
			$('.sections7').hide();
			$('.sections8').hide();
		});

		$('.items-cat .item5').hover(function() {
		   $('.item5').addClass('item-cat-hover');
		    $('.item2, .item3, .item4, .item1, .item6').removeClass('item-cat-hover');
			$('.sections5').show();
			$('.item5-cat .row').css({'visibility':'visible'});
			$('.section-cat').css({'display':'inline'});
			$('.sections2').hide();
			$('.sections3').hide();
			$('.sections4').hide();
			$('.sections1').hide();
			$('.sections6').hide();
			$('.sections7').hide();
			$('.sections8').hide();
		});

		$('.items-cat .item6').hover(function() {
		   $('.item6').addClass('item-cat-hover');
		    $('.item2, .item3, .item4, .item5, .item1').removeClass('item-cat-hover');
			$('.sections6').show();
			$('.item6-cat .row').css({'visibility':'visible'});
			$('.section-cat').css({'display':'inline'});
			$('.sections2').hide();
			$('.sections3').hide();
			$('.sections4').hide();
			$('.sections5').hide();
			$('.sections1').hide();
			$('.sections7').hide();
			$('.sections8').hide();
		});

		$('.items-cat .item7').hover(function() {
		    
			$('.sections7').show();
			$('.item7-cat .row').css({'visibility':'visible'});
			$('.section-cat').css({'display':'inline'});
			$('.sections2').hide();
			$('.sections3').hide();
			$('.sections4').hide();
			$('.sections5').hide();
			$('.sections6').hide();
			$('.sections1').hide();
			$('.sections8').hide();
		});

		$('.items-cat .item8').hover(function() {
		    
			$('.sections8').show();
			$('.item8-cat .row').css({'visibility':'visible'});
			$('.section-cat').css({'display':'inline'});
			$('.sections2').hide();
			$('.sections3').hide();
			$('.sections4').hide();
			$('.sections5').hide();
			$('.sections6').hide();
			$('.sections7').hide();
			$('.sections1').hide();
		});

	});
} else {
		$(function() {
			$('.nav-catalog').click(function(){
			    $(this).css('display','none');
			    $('body').css('position','fixed');
				$('.menu-right').css('display', 'unset');
				$('.menu-right').animate({right: '0'});
				$('.back').show();
				$('.wrapper').animate({margin: '0 260px 0 -260px'});
				$('.cloak').css({'opacity':'0.2'});
				$('.cloak').show();
				$('.menux').css('z-index', '-1');
			});
	});
}

$(function () {
    $('.back').click(function () {
        $(this).hide();
        $('.nav-catalog').css('display', 'block');
        $('body').css('position', 'static');
        $('.menu-right').animate({right: '-260px'});
        setTimeout(function () {
            $('.menu-right').css('display', 'none')
        }, 700);
        $('.wrapper').animate({margin: '0'});
        $('.nav-catalog').css('margin', '15px 10px 0 0')
        $('.nav-catalog img').show();
        $('.cloak').hide();
    });
    $('.menu-right .item ul').hide();
    $('.menu-right .item-add-block ul').show();
    $('h5').click(function () {
        $(this).parent().toggleClass('item-click');
        $(this).next().slideToggle();
        $(this).children('.arrow-items').toggleClass('arrow-items-click');
    });
    $(document).ready(function () {
        $('.arrow-up-down').click(function () {
            $(this).toggleClass('arrow-up-down-click');
        });
    });
    $('.inf-hover li').hover(function () {
        $(this).next('li').find('a').css('box-shadow', 'none');
    }, function () {
        $(this).next('li').find('a').css('box-shadow', '0 -1px #eee');
    });
})



    $(function() {
        $('.species .row').hide();
        $('.species #category0').show();

        $('.species .category0').click(function() {
            $('.species .row').hide();
            $('.species #category0').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category1').click(function() {
            $('.species .row').hide();
            $('.species #category1').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category2').click(function() {
            $('.species .row').hide();
            $('.species #category2').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category3').click(function() {
            $('.species .row').hide();
            $('.species #category3').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category4').click(function() {
            $('.species .row').hide();
            $('.species #category4').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category5').click(function() {
            $('.species .row').hide();
            $('.species #category5').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category6').click(function() {
            $('.species .row').hide();
            $('.species #category6').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category7').click(function() {
            $('.species .row').hide();
            $('.species #category7').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category8').click(function() {
            $('.species .row').hide();
            $('.species #category8').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category9').click(function() {
            $('.species .row').hide();
            $('.species #category9').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species .category10').click(function() {
            $('.species .row').hide();
            $('.species #category10').css('display','flex');
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
    });
    
    if ( $(window).width() <= 570 ) {
	$('.nav-species span').appendTo('.drop-tab-mobile');
	};

$(function() {
    $('.species-rental .row').hide();
    $('.species-rental #category0').show();

    $('.species-rental .category0').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category0').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category1').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category1').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category2').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category2').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category3').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category3').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category4').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category4').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category5').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category5').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category6').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category6').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category7').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category7').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category8').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category8').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category9').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category9').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
    $('.species-rental .category10').click(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category10').css('display','flex');
        $(this).addClass('active-species');
        $(this).parents().nextAll().find('h3').removeClass('active-species');
        $(this).parents().prevAll().find('h3').removeClass('active-species');
    });
});

if ( $(window).width() <= 570 ) {
    $('.nav-species span').appendTo('.drop-tab-mobile');
};




// species-rental

if ($(window).width() > 570) {
    $(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category0').show();

        $('.species-rental .category0').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category0').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category1').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category1').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category2').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category2').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category3').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category3').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category4').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category4').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category5').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category5').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category6').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category6').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category7').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category7').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category8').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category8').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category9').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category9').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
        $('.species-rental .category10').click(function() {
            $('.species-rental .row').hide();
            $('.species-rental #category10').show();
            $(this).addClass('active-species');
            $(this).parents().nextAll().find('h3').removeClass('active-species');
            $(this).parents().prevAll().find('h3').removeClass('active-species');
        });
    });
} else {
    $(function() {
        $('.species-rental .row').hide();
        $('.species-rental #category0').show();

        $('.species-rental ul h3').appendTo('.species-rental select');
        $('.species-rental select h3').replaceWith(function (index, oldHTML) {
            return $("<option>").html(oldHTML);
        });
    })
}


					// filter

$(function() {
	$('h4').click(function() {
		$(this).children().toggleClass('h4-click');
		$(this).children('.arrow-items').toggleClass('arrow-click-filter');
		$(this).next().slideToggle();
	});
});


$(function() {
	$('.filter-button').click(function() {
	    $('body').css('position','fixed');
		$('.filter').animate({left: '0'});
		$('.wrapper').animate({margin: '0 -250px 0 250px'});
		$('.filter-menux').css('visibility','visible');
		$('.filter-button').css('visibility','hidden');
		$('body, html').css('overflow-x','hidden');
		$('.cloak').show();
	})
})

$(function() {
	$('.filter-menux').click(function() {
	    $('body').css('position','static');
		$('.filter').animate({left: '-250px'});
		$('.wrapper').animate({margin: '0'});
		$('.filter-menux').css('visibility','hidden');
		$('.filter-button').css('visibility','visible');
		$('.cloak').hide();
	})
})


					// sorting

if(document.documentElement.clientWidth <= 768) {
$(function() {
	$('.sorting').click(function() {
		$('.sorting ul').slideToggle();
		$('.sorting .arrow-items').toggleClass('sorting-arrow');
	});
});
}


					// list-equipment

if(document.documentElement.clientWidth > 1200) {
	$(function() {
		$('.list-equipment .section').hover(function() {
			$(this).find('.characteristics').fadeIn(100);
			$(this).find('.more-info').show();
		}, function() {
			$(this).find('.characteristics').hide();
			$(this).find('.more-info').hide();
		});
	});
} 
					// about

$(function() {
	$('.about .read-news').click(function() {
		$('.about-hide').slideToggle();
		$('.read-news').hide();
		$('.hide-news').show();
	});
});
$(function() {
	$('.about .hide-news').click(function() {
		$('.about-hide').slideToggle();
		$('.read-news').show();
		$('.hide-news').hide();
	});
});


					// social

$(function() {
	// $('.fb .img2').hide();
	$(function() {
		$('.fb').hover(function() {
			$('.fb .img2').toggle();
			$('.fb .img1').toggle();
		})
	});

		// $('.youtube .img2').hide();
		$(function() {
		$('.youtube').hover(function() {
			$('.youtube .img2').toggle();
			$('.youtube .img1').toggle();
		});
	});
});


					// share

$(function() {
	$('.share-img').click(function() {
		$(this).hide();
		// $('.share a img').show('slide', {direction: 'left'}, 500);
		// $('.share div').show('slide', {direction: 'left'}, 500);
		$('.share a img').fadeIn();
		$('.share div').fadeIn();
		$('.share-click').show();
	});
	$('.share-click').click(function() {
		$(this).hide();
		// $('.share a img').hide('slide', {direction: 'right'}, 500);
		// $('.share div').hide('slide', {direction: 'right'}, 500);
		$('.share a img').hide();
		$('.share div').hide();
		$('.share-img').show();
	});
});

	$(function() {
		$('.info').click(function() {
			$('#equip-info').show();
			$(this).find('.img1').show();
			$(this).find('.img2').hide();
			$('#equip-video').hide();
			$('#equip-files').hide();
			$('#equip-spares').hide();
			$('#equip-tires').hide();
			$('#equip-attachments').hide();
		});
		$('.video').click(function() {
			$('#equip-video').show();
			$('#equip-info').hide();
			$(this).prevAll().find('.img1').hide();
			$(this).prevAll().find('.img2').show();
			$('#equip-files').hide();
			$('#equip-spares').hide();
			$('#equip-tires').hide();
			$('#equip-attachments').hide();
		});
		$('.files').click(function() {
			$('#equip-files').show();
			$('#equip-info').hide();
			$(this).prevAll().find('.img1').hide();
			$(this).prevAll().find('.img2').show();
			$('#equip-video').hide();
			$('#equip-spares').hide();
			$('#equip-tires').hide();
			$('#equip-attachments').hide();
		});
		$('.spares').click(function() {
			$('#equip-spares').show();
			$('#equip-info').hide();
			$(this).prevAll().find('.img1').hide();
			$(this).prevAll().find('.img2').show();
			$('#equip-files').hide();
			$('#equip-video').hide();
			$('#equip-tires').hide();
			$('#equip-attachments').hide();
		});
		$('.tires').click(function() {
			$('#equip-tires').show();
			$('#equip-info').hide();
			$(this).prevAll().find('.img1').hide();
			$(this).prevAll().find('.img2').show();
			$('#equip-files').hide();
			$('#equip-spares').hide();
			$('#equip-video').hide();
			$('#equip-attachments').hide();
		});
		$('.attachments').click(function() {
			$('#equip-attachments').show();
			$('#equip-info').hide();
			$(this).prevAll().find('.img1').hide();
			$(this).prevAll().find('.img2').show();
			$('#equip-files').hide();
			$('#equip-spares').hide();
			$('#equip-tires').hide();
			$('#equip-video').hide();
		});
		$('.equipment-info').click(function() {
			$(this).find('h3').css('color','#0070ba');
			$(this).find('.count').css('background','#0070ba');
			$(this).find('.count').css('color','#fff');
			$(this).nextAll().find('h3').css('color','#9c9b9b');
			$(this).nextAll().find('.count').css('background','#eee');
			$(this).nextAll().find('.count').css('color','#9c9b9b');
			$(this).prevAll().find('h3').css('color','#9c9b9b');
			$(this).prevAll().find('.count').css('background','#eee');
			$(this).prevAll().find('.count').css('color','#9c9b9b');
			$(this).css({'border-top':'1px solid #eee','border-bottom':'none','border-left':'1px solid #eee','border-right':'1px solid #eee'})
			$(this).nextAll().css({'border-top':'none','border-bottom':'1px solid #eee','border-left':'none','border-right':'none'})
			$(this).prevAll().css({'border-top':'none','border-bottom':'1px solid #eee','border-left':'none','border-right':'none'})
		});
	});


					// manager

$(function() {
	$('.consultation').click(function() {
		$('.cloak-manager').fadeIn();
		$('.manager').fadeIn();
		$('html, body').css({'overflow':'hidden'});
		$('body, html').animate({scrollTop: 0}, 0);
	});
	$('.manager .manager-mail img').click(function() {
		$('.cloak-manager').fadeOut('slow');
		$('.manager').hide();
		$('html, body').css('overflow-y','auto');
	});

	$('.connection .email').click(function () {
		$('.cloak-manager').fadeIn();
		$('.manager').fadeIn();
		$('html, body').css({'overflow':'hidden'});
		$('body, html').animate({scrollTop: 0}, 0);
	});

	$('.tariff-plans-block .tariff .order').click(function () {
		$('.cloak-manager').fadeIn();
		$('.manager').fadeIn();
		$('html, body').css({'overflow':'hidden'});
		// $('body, html').animate({scrollTop: 0}, 0);
	});

	if (document.documentElement.clientWidth <= 680) {
		$('.manager-mail img').appendTo('.manager');
	}
});


					// nav-managers



	$(function () {
		$('.conclusion-managers .row').hide();
		$('.conclusion-managers .all-managers').show();

		$('#all-managers').click(function () {
			$('.conclusion-managers .banner div').hide();
			$('.conclusion-managers .banner .all-managers').show();
			$('.conclusion-managers .row').hide();
			$('.conclusion-managers .all-managers').show();
			$(this).addClass('active');
			$(this).nextAll().removeClass('active');
		});
		$('#packaging-managers').click(function () {
			$('.conclusion-managers .banner div').hide();
			$('.conclusion-managers .banner .packaging-managers').show();
			$('.conclusion-managers .row').hide();
			$('.conclusion-managers .packaging-managers').show();
			$(this).addClass('active');
			$(this).prevAll().removeClass('active');
			$(this).nextAll().removeClass('active');
		});
		$('#robotics-managers').click(function () {
			$('.conclusion-managers .banner div').hide();
			$('.conclusion-managers .banner .robotics-managers').show();
			$('.conclusion-managers .row').hide();
			$('.conclusion-managers .robotics-managers').show();
			$(this).addClass('active');
			$(this).prevAll().removeClass('active');
			$(this).nextAll().removeClass('active');
		});
		$('#warehouse-managers').click(function () {
			$('.conclusion-managers .banner div').hide();
			$('.conclusion-managers .banner .warehouse-managers').show();
			$('.conclusion-managers .row').hide();
			$('.conclusion-managers .warehouse-managers').show();
			$(this).addClass('active');
			$(this).prevAll().removeClass('active');
			$(this).nextAll().removeClass('active');
		});
		$('#special-managers').click(function () {
			$('.conclusion-managers .banner div').hide();
			$('.conclusion-managers .banner .special-managers').show();
			$('.conclusion-managers .row').hide();
			$('.conclusion-managers .special-managers').show();
			$(this).addClass('active');
			$(this).prevAll().removeClass('active');
			$(this).nextAll().removeClass('active');
		});
		$('#agro-managers').click(function () {
			$('.conclusion-managers .banner div').hide();
			$('.conclusion-managers .banner .agro-managers').show();
			$('.conclusion-managers .row').hide();
			$('.conclusion-managers .agro-managers').show();
			$(this).addClass('active');
			$(this).prevAll().removeClass('active');
			$(this).nextAll().removeClass('active');
		});
		$('#attachments-managers').click(function () {
			$('.conclusion-managers .banner div').hide();
			$('.conclusion-managers .banner .attachments-managers').show();
			$('.conclusion-managers .row').hide();
			$('.conclusion-managers .attachments-managers').show();
			$(this).addClass('active');
			$(this).prevAll().removeClass('active');
			$(this).nextAll().removeClass('active');
		});
		$('#rent-managers').click(function () {
			$('.conclusion-managers .banner div').hide();
			$('.conclusion-managers .banner .rent-managers').show();
			$('.conclusion-managers .row').hide();
			$('.conclusion-managers .rent-managers').show();
			$(this).addClass('active');
			$(this).prevAll().removeClass('active');
			$(this).nextAll().removeClass('active');
		});
		$('#spares-managers').click(function () {
			$('.conclusion-managers .banner div').hide();
			$('.conclusion-managers .banner .spares-managers').show();
			$('.conclusion-managers .row').hide();
			$('.conclusion-managers .spares-managers').show();
			$(this).addClass('active');
			$(this).prevAll().removeClass('active');
			$(this).nextAll().removeClass('active');
		});

        $('#tpun-managers').click(function () {
            $('.conclusion-managers .banner div').hide();
            $('.conclusion-managers .banner .tpun-managers').show();
            $('.conclusion-managers .row').hide();
            $('.conclusion-managers .tpun-managers').show();
            $(this).addClass('active');
            $(this).prevAll().removeClass('active');
            $(this).nextAll().removeClass('active');
        });

	});
	//
if ( $(window).width() <= 570 ) {
	$('.nav-managers span').appendTo('.drop-tab-mobile');
}
$(function(){
	$(".drop-tab-mobile").hide();
	$(".tab-mobile").click(function(event) {
   	$(".drop-tab-mobile").slideToggle("fast"); 
   			event.stopPropagation();
	});
	$(".drop-tab-mobile span").click(function() {
   	$(".tab-mobile").html($(this).html());
   	$(".drop-tab-mobile").slideToggle("fast");
   			event.stopPropagation();
	});
$("html").click(function() {
   	$(".drop-tab-mobile").slideUp("fast"); 
	});
});


$(function() {
	$('.drop').click(function() {
		$('.manufacturer input[type=checkbox]').prop('checked', false);
		$('.input-range-reset').trigger('reset');
	});
});


					// nav-works

if ($(window).width() > 1300) {
	$(function() {
		$('.species-rental .row .rental-section').hover(function() {
			$('html').css('overflow-y','hidden');
		}, function() {
			$('html').css('overflow-y','visible');
		})
	})
};

					// ограничение текста в абзаце

$(function() {
	while ($('.species-rental .rental-section p').outerHeight() > 99) {
		$('.species-rental .rental-section p').text(function(index, text) {
			return text.replace(/\W*\s(\S)*$/, '...');
		});
	}
});
// input file

$(document).ready( function() {
    $("#fl_inp").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#fl_nm").html(filename);
    });
});

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
            },
            file: {
                accept: "Не правельный формат",
            }
        }
    });
});


$(function(){
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
});