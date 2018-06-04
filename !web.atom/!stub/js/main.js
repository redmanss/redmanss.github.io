// preloader
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(1500).fadeOut('slow');
});
// VIDEO ------------------
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
// END VIDEO ---------------