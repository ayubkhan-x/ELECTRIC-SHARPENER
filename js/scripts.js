$(document).ready(function() {
	
	/* scroll */
	$("a[href^='#']").not('[data-fancybox]').click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* timer */
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();


	/*stop_video*/
	$(".stop_video").click(function(){
		var url = $(".video iframe").attr('src');
		$(".video iframe").attr('src', '');
		$(".video iframe").attr('src', url);
	});

	/*fancybox settings*/
	$('[data-fancybox]').fancybox({
		type : 'inline',
		autoFocus: false,
		touch: false,
		animationDuration: 500
	});

	/*close popup button*/
	$(".close_popup").click(function(){
		$.fancybox.close();
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/*tovar360*/
    var srcimg = $(".threesixty_images").attr("data-imsrc").slice(0, -5);

    $(".overview").click(function(){
    	$('.dicer-gal').ThreeSixty({
	        totalFrames: 36, // Total no. of image you have for 360 slider
	        endFrame: 37, // end frame for the auto spin animation
	        currentFrame: 1, // This the start frame for auto spin
	        framerate: 30, //частота кадров
	        imgList: '.threesixty_images', // selector for image list
	        progress: '.spinner', // selector to show the loading progress
	        imagePath: srcimg, // path of the image assets
	        ext: '.jpg', // extention for the assets
	        navigation: false,
	        responsive: true,
	    });
    })
    



});
