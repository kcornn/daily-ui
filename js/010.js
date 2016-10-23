show = function() {
	if (document.getElementById("share").style.transform == "rotateY(0deg)") {
		document.getElementById("share").style.transform = "rotateY(-180deg)";
		document.getElementById("fb").style.transform = "translateX(0px)";
		document.getElementById("linkedin").style.transform = "translateX(0px)";
		document.getElementById("twitter").style.transform = "translateX(0px)";
		document.getElementById("tumblr").style.transform = "translateX(0px)";
		document.getElementById("pin").style.transform = "translateX(0px)";
		document.getElementById("g").style.transform = "translateX(0px)";
		document.getElementById("mail").style.transform = "translateX(0px)";
	} else {
		document.getElementById("share").style.transform = "rotateY(0deg)";
		document.getElementById("fb").style.transform = "translateX(-68px) translateZ(-10px)";
		document.getElementById("linkedin").style.transform = "translateX(-136px) translateZ(-20px)";
		document.getElementById("twitter").style.transform = "translateX(-204px) translateZ(-30px)";
		document.getElementById("tumblr").style.transform = "translateX(-272px) translateZ(-40px)";
		document.getElementById("pin").style.transform = "translateX(-340px) translateZ(-50px)";
		document.getElementById("g").style.transform = "translateX(-408px) translateZ(-60px)";
		document.getElementById("mail").style.transform = "translateX(-476px) translateZ(-70px)";
	}
}

document.getElementById("share").style.transform = "rotateY(0deg)";





