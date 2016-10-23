$(document).ready(function () {
	d3.json('js/list.json', function (list) {
		listAll(list.allUI);
	});
});

function listAll(list) {
	list.forEach(function(o) {
		$("#all-ui").append(
			'<div class="col-md-4 ui">' +
				'<h3>' + o.name + '</h3>' +
				'<a href="/daily-ui/' + o.url + '"><img src="/daily-ui/pix/' + o.img + '"></a>' +
			'</div>'
		);
	});
}