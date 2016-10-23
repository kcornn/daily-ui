(function () {
	var date = new Date();
	dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	document.getElementById("day-of-week").innerHTML = dayOfWeek[date.getDay()];
	document.getElementById("num").innerHTML = date.getDate();

}) ();