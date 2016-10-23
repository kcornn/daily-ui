$(document).ready(function () {
	var arr = [];
	var total = 0;
	var temp = '';

	$('button').on('click', function () {
		var val = $(this).text();
		if (!isNaN(val) || val === '.') {
			temp += val;
			$('.screen').html(val);
		} else if (val === 'C'){
			arr = [];
			total = 0;
			temp = '';
			$('.screen').html('');
		} else if (val === 'x') {
			arr.push(temp);
			arr.push('*');
			temp = '';
			$('.screen').html(val);
		} else if (val === '÷') {
			arr.push(temp);
			arr.push('/');
			temp = '';
			$('.screen').html(val);
		} else if (val === '=') {
			arr.push(temp);
			var num = Number(arr[0]);
			for (var i=1; i<arr.length; i++) {
				var next= Number(arr[i+1]);
				var symbol = arr[i];
				if (symbol === '+') {
					num += next;
				} else if (symbol === '-') {
					num -= next;
				} else if (symbol === '*') {
					num *= next;
				} else if (symbol === '/') {
					num /= next;
				}
				i++;
			}
			if (num < 0) {
				num = Math.abs(num) + '-';
			}
			$('.screen').val(num);
			arr = [];
			temp = '';
			var text = '<p>' + num + '</p>';
			$('.screen').html(text);
		} else {
			arr.push(temp);
			arr.push(val);
			$('.screen').html(val);
			temp = '';
		}
	});
});