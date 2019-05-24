$(function(){
	$('#demoSlider').bxSlider({
		pagerCustom: '#bx-pager',
		infiniteLoop: false
	});

if ($(window).width() > 768) {
	$('.technique').bxSlider({
		slideWidth: 250,
		minSlides: 4,
		maxSlides: 4,
		slideMargin: 17,
		moveSlides: 1,
		controls: true
	});
} else if ($(window).width() > 570 && $(window).width() <= 768) {
	$('.technique').bxSlider({
		slideWidth: 250,
		minSlides: 2.5,
		maxSlides: 2.5,
		slideMargin: 17,
		moveSlides: 1,
		controls: true
	});
} else if ($(window).width() <= 570) {
	$('.technique').bxSlider({
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 17,
		moveSlides: 1,
		controls: true
	});
}

});

$(function() {
	$('.bxslider').hover(function() {
		$('.zoom').css({'opacity':'1'})
	}, function() {
		$('.zoom').css('opacity','0');
	});

	$('.zoom').hover(function() {
		$(this).css('opacity','1');
	}, function() {
		$(this).css('opacity','0');
	});
});

$(function() {
	$('#work0').click(function () {
		$('.technique-slider').insertAfter('.work0 .equip-rental-text');
	});
	$('#work1').click(function () {
		$('.technique-slider').insertAfter('.work1 .equip-rental-text');
	});
	$('#work2').click(function () {
		$('.technique-slider').insertAfter('.work2 .equip-rental-text');
	});
	$('#work3').click(function () {
		$('.technique-slider').insertAfter('.work3 .equip-rental-text');
	});
	$('#work4').click(function () {
		$('.technique-slider').insertAfter('.work4 .equip-rental-text');
	});
})

$(function() {
    $('#work0').click(function () {
        $('.equip-rental-img').insertBefore('.work0 .equip-rental-feature');
    });
    $('#work1').click(function () {
        $('.equip-rental-img').insertBefore('.work1 .equip-rental-feature');
    });
    $('#work2').click(function () {
        $('.equip-rental-img').insertBefore('.work2 .equip-rental-feature');
    });
    $('#work3').click(function () {
        $('.equip-rental-img').insertBefore('.work3 .equip-rental-feature');
    });
    $('#work4').click(function () {
        $('.equip-rental-img').insertBefore('.work4 .equip-rental-feature');
    });
})