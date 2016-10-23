$(document).ready(function () {
	var lessWork = document.getElementById('less-work');
	var workMin = document.getElementById('work-min');
	var moreWork = document.getElementById('more-work');
	var start = document.getElementById('start');
	var stop = document.getElementById('stop');
	var time = document.getElementById('time');
	var min = document.getElementById('min');
	var sec = document.getElementById('sec');

	$("#reset").hide();

	moreWork.addEventListener("click", function() {
		var num = workMin.innerHTML;
		num++;
		workMin.innerHTML = num;
		if (num < 10) {
			min.innerHTML = '0' + num;
		} else {
			min.innerHTML = num;
		}
	});

	lessWork.addEventListener("click", function () {
		var num = workMin.innerHTML;
		num--;
		if (num <= 0) {
			num = 1;
		}
		workMin.innerHTML = num;
		if (num < 10) {
			min.innerHTML = '0' + num;
		} else {
			min.innerHTML = num;
		}
	});

	start.addEventListener("click", function () {
		$("#start").hide();
		countdown(parseInt(workMin.innerHTML));
	});

	function countdown(minutes) {
		var currMin = minutes;
		var currSec = 0;
		function dec () {
			if (currSec > 0) {
				currSec--;
				if (currSec < 10) {
					currSec = '0' + currSec;
				}
				min.innerHTML = currMin;
				sec.innerHTML = currSec;
				setTimeout(dec, 1000);
			} else if (currMin > 0) {
				currSec = 59;
				currMin--;
				if (currMin < 10) {
					currMin = '0' + currMin;
				}
				min.innerHTML = currMin;
				sec.innerHTML = currSec;
				setTimeout(dec, 1000);
			}
			if (currSec == 0 && currMin == 0) {
				$("#reset").show();
			}
		}
		dec();
	};

});
