$(document).ready(function () {
	d3.json('js/list.json', function (list) {
		listAll(list.allUI);
	});
});

function listAll(list) {
	list.forEach(function(o) {
		$("#all-ui").append(
			'<h3>' + o.name + '</h3>'
		);
	});
}