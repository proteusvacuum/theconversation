$(function(){
	var scrollPosition, $nav = $('nav#main-nav'), $fadesout = $(".fadesout");
	var heroTextPosition = $('h1').offset().top;
	
	$(window).on("scroll", function(){
		scrollPosition = $(window).scrollTop();
		if (scrollPosition > heroTextPosition - $nav.height()){
			$nav.find('.brand').fadeIn();
			$fadesout.stop().animate({opacity: 0}, 200);
			$nav.css({"background-color": "#fff"});
		}
		else{
			$nav.find('.brand').fadeOut();
			$fadesout.stop().animate({opacity: 1}, 200);
			$nav.css({"background-color": "initial"});
		}
	});

});