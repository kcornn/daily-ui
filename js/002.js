$(".n").keyup(function () {
	if (this.value.length == 4) {
		$(this).next(".n").focus();
	}
});

$(document).ready(function () {
	$(".name").css({
		'width': ($(".number").width() + 'px')
	});
});
