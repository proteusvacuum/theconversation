$(function() {
	$("#twitter-login-button").on('click', function() {
		window.location = '/auth/twitter/?next=' + encodeURIComponent(window.location.pathname + window.location.search);
	});
});

$.fn.extend({
	isInView: function(){
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
		var $element = this.first();
		var elemTop = $element.offset().top;
		var elemBottom = elemTop + $element.height();
		return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) &&
			(elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
	}
});