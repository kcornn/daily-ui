$(document).ready(function () {
	var success = false;
	$("#button").click(function () {
		console.log("true");
		$("#msg").show();
		if (success === true) {
			success = false;
			$('#text').text('Success!');
			$('#msg').removeClass('fail');
			$('#msg').addClass('success');
		} else {
			success = true;
			$('#text').text('Something went wrong.');
			$('#msg').removeClass('success');
			$('#msg').addClass('fail');
		}
	});
});