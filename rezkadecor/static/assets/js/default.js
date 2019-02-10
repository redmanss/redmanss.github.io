$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});

//navbar hide on click
$(function () {
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
        $('.navbar-toggle:visible').click();
    });
});

$(document).ready(function () {
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 41
    })
    $('a.scrollto').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 40)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    //parallax
    /*$('.parallax-window').parallax();*/

   

});

// RSVP Form - jquery validation
$("#rsvpForm").validate({
    rules: {
        name: {
            required: true
        },
        email: {
            required: true
        },
        msg: {
            required: true
        }
    }
});


// wow
new WOW({
    offset: 50,
    mobile: false
}).init();

// Back to Top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
                $('#btn-to-call').removeClass('onbottom');
            } else {
                $('#back-to-top').removeClass('show');
                $('#btn-to-call').addClass('onbottom');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

//Gallery

var galls = document.getElementsByClassName('item-gallery');
[].forEach.call(galls, function (elem) {
    elem.onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {
                fullScreen: false, clearSlides: true,
                index: link, event: event, onslide: function (index, slide) {
                    var text = this.list[index].getAttribute('data-description'),
                        node = this.container.find('.description');
                    node.empty();
                    if (text) {
                        node[0].appendChild(document.createTextNode(text));
                    }
                }
            },
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    }
})


// Gallery description
$('#blueimp-gallery').on('slide', function (event, index, slide) {
    $(this).children('.description')
        .text($('.item-gallery a').eq(index).data('description'));
});


//Social shared func/
var shareLinks = document.getElementsByClassName('share-link');
if (shareLinks) {
    [].forEach.call(shareLinks, function (elem) {
        elem.onclick = function () {
            window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
            return false;
        }
    })
}
//Fix scroll
function fixScroll() {
    if (document.location.hash) {
        window.setTimeout(function () {
            document.location.href += '';
        }, 10);
    }
}


//
$(function(){
    $('.slick-slider1').slick({
        prevArrow: '.prev-slide1',
        nextArrow: '.next-slide1',
    });
    $('.slick-slider2').slick({
        prevArrow: '.prev-slide2',
        nextArrow: '.next-slide2',
    });
    $('.slick-slider3').slick({
        prevArrow: '.prev-slide3',
        nextArrow: '.next-slide3',
    });
    $('.slick-slider4').slick({
        prevArrow: '.prev-slide4',
        nextArrow: '.next-slide4',
    });
    $('.slick-slider5').slick({
        prevArrow: '.prev-slide5',
        nextArrow: '.next-slide5',
    });
    $('.slick-slider6').slick({
        prevArrow: '.prev-slide6',
        nextArrow: '.next-slide6',
    });
    $('.slick-slider7').slick({
        prevArrow: '.prev-slide7',
        nextArrow: '.next-slide7',
    });
    $('.slick-slider8').slick({
        prevArrow: '.prev-slide8',
        nextArrow: '.next-slide8',
    });
    $('.slick-slider9').slick({
        prevArrow: '.prev-slide9',
        nextArrow: '.next-slide9',
    });
});




