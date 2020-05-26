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

// Change text on collapse
$('.btn-more').click(function() {
	$(this).text(function(i,old) {
		return old=='Read More' ?  'Read Less' : 'Read More';
	});
});