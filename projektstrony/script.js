
	$(document).ready(function() {
	var NavY = $('.navbar').offset().top;
	 
	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();
		  
	if (ScrollY > NavY) { 
		$('.navbar').addClass('sticky');
	} else {
		$('.navbar').removeClass('sticky'); 
	}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
	function zmienMenu()
	{
		var x = window.innerWidth;
		if(x<1200) 
		{
			$('.rozwinwprawo').addClass("dropend");
			
		}
		else{
			$('.rozwinwprawo').removeClass("dropend");
			
		}
		
	}
	window.addEventListener('resize', zmienMenu);
	
	});
	

