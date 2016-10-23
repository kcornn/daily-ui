$(document).ready(function () {
	$('#profile').hover(
		function() {
			$(".twitter-follow-button").fadeIn('slow');
		},
		function() {
			$(".twitter-follow-button").hide();
		});
});