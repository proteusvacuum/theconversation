$(function(){
	var scrollPosition, $nav = $('nav#main-nav'), $fadesout = $(".fadesout");
	var heroTextPosition = $('h1').offset().top;
	var checkNavBar = function(){
		width = $(window).width()
		scrollPosition = $(window).scrollTop();
		if (scrollPosition > heroTextPosition - 2*$nav.height()){
			if (width < 768){
				$nav.find('.small-brand').fadeIn();
			}
			else{
				$nav.find('.big-brand').fadeIn();
			}
			$fadesout.stop().animate({opacity: 0}, 200);
			$nav.css({"background-color": "#fff"});
		}
		else{
			if (width < 768){
				$nav.find('.small-brand').fadeOut();
			}
			else{
				$nav.find('.big-brand').fadeOut();
			}
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