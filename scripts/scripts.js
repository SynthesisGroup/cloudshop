// Client Carousel
$(document).ready(function(){
    $('.clients-logo').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
			{
				breakpoint: 561,
				settings: { slidesToShow: 3 }
        	},
			{
				breakpoint: 481,
				settings: { slidesToShow: 2 }
        	},
			{
				breakpoint: 321,
				settings: { slidesToShow: 1 }
        	}			
		]
    });
});

// Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
	// On-page links
	if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
	) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top - 80
			}, 1000, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
					return false;
				} else {
					$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
					$target.focus(); // Set focus again
				};
			});
		}
	}
});

// Slide Menu
smoothScroll.init();
$(document).ready(function() {
	$('.menu-link').menuFullpage({
		side:"right",
		menuWidth:"100%",
	});
});

// Add Class onScroll (Header)
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $("header").addClass("append");
    } else {
        $("header").removeClass("append");
    }
	
	if (scroll >= 400) {
		$(".floaters").addClass("show");
    } else {
		$(".floaters").removeClass("show");
    }
});

//Loader
$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

// ScrollReveal
ScrollReveal({ distance: '60px', delay: '200', duration: 1000, });
ScrollReveal().reveal('.sr-in');
ScrollReveal().reveal('.sr-up', { origin: 'bottom' });
ScrollReveal().reveal('.sr-down', { origin: 'top' });
ScrollReveal().reveal('.sr-left', { origin: 'right' });
ScrollReveal().reveal('.sr-right', { origin: 'left' });