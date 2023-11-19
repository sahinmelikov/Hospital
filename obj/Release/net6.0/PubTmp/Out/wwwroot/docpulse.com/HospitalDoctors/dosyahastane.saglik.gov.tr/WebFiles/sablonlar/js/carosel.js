$(document).ready(function() { 
	$(".site_language li a:last").css({  border: 'none'  }); 
	$("#header-top .top-menu-list li a:last").css({  border: 'none'  }); 
	$("#mainMenu nav > ul > li > a:last").css({  border: 'none'  });  
 
});


 

$(".main-slider").owlCarousel({
    items: 1,
    margin: 10,
    dots: true,
    nav: true,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    autoplay: true,
    smartSpeed: 500,
    navSpeed: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        992: {
            items: 1,
            dots: true,
            nav: true
        },
        600: {
            items: 1,
            dots: false,
            nav: false
        },
        320: {
            items: 1,
            dots: false,
            nav: false
        }
    }
});

$('.own-item-8').owlCarousel({
	loop: true,
	slideSpeed: 800,
	autoplayTimeout:4000,
	nav: true,
	dots: false,
	margin: 10,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	autoplay: true,
	responsiveClass: true,
    responsive: {
        0:{
            items:1 
        },
        600:{
            items:3
        },            
        960:{
            items:4
        },
        1200:{
            items:8
        } 

    }
});


$('.own-menu').owlCarousel({
	loop: true,
	smartSpeed: 800,
	nav: false,
	dots: true, 
	margin: 4,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	autoplay: true,
	responsiveClass: true,
    responsive: {
        0:{
            items:2,
			
        },          
        960:{
            items:2,
			
        },
        1200:{
			dots: true,
            items:4 
        } 

    }
}); 

$('.own-item-7').owlCarousel({
	loop: true,
	smartSpeed: 800,
	nav: false,
	dots: false,
	margin: 5,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	autoplay: true,
	responsiveClass: true,
    responsive: {
        0:{
            items:2,
			
        },          
        960:{
            items:2,
			
        },
        1200:{
			dots: true,
            items:6 
        } 

    }
}); 

$('.own-item-6').owlCarousel({
	loop: true,
	smartSpeed: 800,
	nav: true,
	dots: false,
	margin: 30,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	autoplay: true,
	responsiveClass: true,
    responsive: {
        0:{
            items:2,
			dots: false
        },
        600:{
            items:3
        },            
        960:{
            items:4
        },
        1200:{
            items:5
        } 

    }
});
 
 
$('.own-item-5').owlCarousel({
	loop: true,
	smartSpeed: 800,
	nav: true,
	dots: false,
	margin: 20,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	autoplay: true,
	responsiveClass: true,
    responsive: {
        992: {
            items: 5
        },
        600: {
            items: 3
        },
        300: {
            items: 2
        }

    }
});
	 
	 
	$('.own-item-sehir').owlCarousel({
		loop: true,
		smartSpeed: 800,
		nav: false,
		dots: false,
		margin: 0,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplay: false,
		responsiveClass: true,
		responsive: {
			992: {
				items: 5
			},
			600: {
				items: 2
			},
			300: {
				items: 1
			}

		}
	});

$('.own-item-4').owlCarousel({
	loop: true,
	smartSpeed: 800,
	nav: true,
	dots: false,
	margin: 15,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	autoplay: true,
	responsiveClass: true,
    responsive: {
        0:{
            items:1,
			nav: false,
			dots: false
        },
        600:{
            items:2,
			nav: false,
			dots: false
        },            
        960:{
            items:2,
			nav: false,
			dots: false
        },
        1200:{
            items:4,
			nav: true,
			dots: false
        } 

    }
});

$('.own-item-3').owlCarousel({
	loop: true,
	smartSpeed: 800,
	nav: false,
	dots: false,
	margin: 20,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	autoplay: true,
	responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },            
        960:{
            items:2
        },
        1200:{
            items:3 
        } 

    }
});

$('.own-item-2').owlCarousel({
	loop: true,
	smartSpeed: 800,
	nav: false,
	dots: false,
	margin: 35,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	autoplay: true,
	responsiveClass: true,
    responsive: {
 
        600: {
            items: 2,
            dots: false
        },
        300: {
            items: 1,
            dots: false
        }

    }
});

$('.own-item-1').owlCarousel({
	loop: true,
	smartSpeed: 800,
	nav: false,
	dots: false,
	margin: 35,
	navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	autoplay: true,
	responsiveClass: true,
    responsive: {
        992: {
            items: 1
        },
        600: {
            items: 1,
            dots: false
        },
        300: {
            items: 1,
            dots: false
        }

    }
});



	
	
	
 
