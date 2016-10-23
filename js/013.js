$(document).ready(function () {
	$("#send").on('click', function () {
		var text = $('#text-input').val();
		$('#messages').append('<div class="sent"><p>' + text + '</p></div>');
		$('#messages').animate({
			scrollTop: $('#messages')[0].scrollHeight
		}, 500);
		$('#text-input').val('');
	});
});
 