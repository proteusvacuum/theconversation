$(function(){
	var scrollPosition, $nav = $('nav#main-nav'), $fadesout = $(".fadesout");
	var heroTextPosition = $('h1').offset().top;
	var checkNavBar = function(){
		scrollPosition = $(window).scrollTop();
		if (scrollPosition > heroTextPosition - 2*$nav.height()){
			$nav.find('.brand').fadeIn();
			$fadesout.stop().animate({opacity: 0}, 200);
			$nav.css({"background-color": "#fff"});
		}
		else{
			$nav.find('.brand').fadeOut();
			$fadesout.stop().animate({opacity: 1}, 200);
			$nav.css({"background-color": "initial"});
		}
	};

	// var checkImages = function(){
	// 	$pis = $(".partner-image");
	// 	if ( $pis.first().isInView() ){
	// 		$pis.each(function(idx){
	// 			var duration = 75;
	// 			$(this).find("img").delay(duration*idx).animate({ opacity: 1 }, duration);
	// 		});
	// 	}
	// 	else{
	// 		$pis.each(function(idx){
	// 			var duration = 25;
	// 			$(this).find("img").css({ opacity: 0 })
	// 		});
	// 	}

	// };

	$(window).on("scroll", function(){
		checkNavBar();
		// checkImages();
	});

});