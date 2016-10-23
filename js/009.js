$(document).ready(function () {
	var carousel = $('.jcarousel').jcarousel({
		wrap: 'circular'
	});
	$('.jcarousel-pagination').jcarouselPagination({
		carousel: carousel
	});
	$('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<li id="jcarousel-item' + page + '"><a href="#' + page + '">' + page + '</a></li>';
        }
    });
	
	$('#jcarousel-item2').addClass('active');
	
		$('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'li', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'li', function() {
        $(this).removeClass('active');
    });

	$("#prev").click(function () {
		$('.jcarousel').jcarousel('scroll', '-=1');

		$('.song-promise')[0].pause();
		$('.song-myhouse')[0].pause();
		$('.song-handsup')[0].pause();

		if ($('#jcarousel-item2').hasClass('active')) {
			$('.song-handsup').removeClass('active');
			$('.song-promise').addClass('active');
			$('#song').html("Promise (I'll Be)");
			$('#artist').html("2PM");
		};

		if ($('#jcarousel-item3').hasClass('active')) {
			$('.song-promise').removeClass('active');
			$('.song-myhouse').addClass('active');
			$('#song').html("My House");
			$('#artist').html("2PM");
		};

		if ($('#jcarousel-item4').hasClass('active')) {
			$('.song-myhouse').removeClass('active');
			$('.song-handsup').addClass('active');
			$('#song').html("Hands Up");
			$('#artist').html("2PM");
		};
	});

	$("#next").click(function () {
		$('.jcarousel').jcarousel('scroll', '+=1');

		$('.song-promise')[0].pause();
		$('.song-myhouse')[0].pause();
		$('.song-handsup')[0].pause();

		if ($('#jcarousel-item2').hasClass('active')) {
			$('.song-handsup').removeClass('active');
			$('.song-promise').addClass('active');
			$('#song').html("Promise (I'll Be)");
			$('#artist').html("2PM");
			$('.song-promise')[0].play();
		};

		if ($('#jcarousel-item3').hasClass('active')) {
			$('.song-promise').removeClass('active');
			$('.song-myhouse').addClass('active');
			$('#song').html("My House");
			$('#artist').html("2PM");
			$('.song-myhouse')[0].play();
		};

		if ($('#jcarousel-item4').hasClass('active')) {
			$('.song-myhouse').removeClass('active');
			$('.song-handsup').addClass('active');
			$('#song').html("Hands Up");
			$('#artist').html("2PM");
			$('.song-handsup')[0].play();
		};
	});

	$("#other a").click(function () {
		$(this).toggleClass("active");
	});

	$("#play").click(function () {
		$('#play').toggleClass('active');
		if($("#play i").hasClass("fa-play")) {
			$("#play i").removeClass("fa-play").addClass("fa-pause");
		} else {
			$("#play i").removeClass("fa-pause").addClass("fa-play"); 
		}

		if($('#play').hasClass('active') && $('#jcarousel-item2').hasClass('active')) {
			var audio = $('.song-promise')[0];
			audio.play();
		} else {
			var audio = $('.song-promise')[0];
			audio.pause();
		}

		if($('#play').hasClass('active') && $('#jcarousel-item3').hasClass('active')) {
			var audio = $('.song-myhouse')[0];
			audio.play();
		} else {
			var audio = $('.song-myhouse')[0];
			audio.pause();
		}

		if($('#play').hasClass('active') && $('#6jcarousel-item4').hasClass('active')) {
			var audio = $('.song-handsup')[0];
			audio.play();
		} else {
			var audio = $('.song-handsup')[0];
			audio.pause();
		}
	});
});


