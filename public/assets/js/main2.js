var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var bodyPos = $('body').scrollTop();
var image1Pos = $('#image1-container').offset().top;
var image2Pos = $('#image2-container').offset().top;
var image3Pos = $('#image3-container').offset().top;
var image4Pos = $('#image4-container').offset().top;
var logoWidth = $('.main-logo').width();

function resizeFunction(){
	windowHeight = window.innerHeight;
	windowWidth = window.innerWidth;
	logoWidth = $('.main-logo').width();
	// image1Pos = $('#image1-container').offset().top;
	// image2Pos = $('#image2-container').offset().top;
	// image3Pos = $('#image3-container').offset().top;
	// image4Pos = $('#image4-container').offset().top;
	logoSize();
	scrollFunction();
	// if((isAndroid() || isApple()) === false){
	// 	if (windowWidth <= 800) {
	// 		$('*').css('-moz-transition','none');
	// 		$('*').css('-o-transition','none');
	// 		$('*').css('-webkit-transition','none');
	// 		$('*').css('transition','none');
	// 	}
	// }

	// not yet working as intended ^^

}

function logoSize(){
	// console.log(logoWidth);
	if (logoWidth > 500) {
		$('.main-logo').attr('src', 'assets/img/logo-800.png');
	}else if(logoWidth > 400){
		$('.main-logo').attr('src', 'assets/img/logo-800.png');
	}else if(logoWidth > 250){
		$('.main-logo').attr('src', 'assets/img/logo-500.png');
	}else{
		$('.main-logo').attr('src', 'assets/img/logo-500.png');
	}
}

function scrollFunction(){
	bodyPos = $('body').scrollTop();
	image1Pos = $('#image1-container').offset().top;
	image2Pos = $('#image2-container').offset().top;
	image3Pos = $('#image3-container').offset().top;
	image4Pos = $('#image4-container').offset().top;
	// $('body').css('background-color', '#000000');
	// console.log("works");
	if (image1Pos <= 0) {
		$('#image1-content-container:not(.container-fixed)').addClass('container-fixed');
		$('.main-logo-content').css('opacity', '0');
		// console.log("works");
	}else{
		$('#image1-content-container').removeClass('container-fixed');
		$('.main-logo-content').css('opacity', '1');
	}
	if (image2Pos <= 0) {
		$('#image2-content-container:not(.container-fixed)').addClass('container-fixed');
		// console.log("works");
	}else{
		$('#image2-content-container').removeClass('container-fixed');
	}
	if (image3Pos <= 0) {
		$('#image3-content-container:not(.container-fixed)').addClass('container-fixed');
		// console.log("works");
	}else{
		$('#image3-content-container').removeClass('container-fixed');
	}
	if (image4Pos <= 0) {
		$('#image4-content-container:not(.container-fixed)').addClass('container-fixed');
		// console.log("works");
	}else{
		$('#image4-content-container').removeClass('container-fixed');
	}


}

function isAndroid(){
	return /Android/i.test(navigator.userAgent);
}

function isApple(){
	return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}


function declareImages(){
	var image1 = 'img.image.image1';
	var image2 = 'img.image.image2';
	var image3 = 'img.image.image3';
	var image4 = 'img.image.image4';
}


function displayAndroid(){
	// console.log(true);
	// waiting on josh
	// declareImages();
	var image1 = 'img.image.image1';
	var image2 = 'img.image.image2';
	var image3 = 'img.image.image3';
	var image4 = 'img.image.image4';
	$(image1).attr('src', 'assets/img/android/image1-500.png');
	$(image2).attr('src', 'assets/img/android/image2-500.png');
	$(image3).attr('src', 'assets/img/android/image3-500.png');
	$(image4).attr('src', 'assets/img/android/image4-500.png');

}

function displayAndySteve(){
	// console.log(false);
	// will display both interchangeably
	// declareImages();
	var image1 = 'img.image.image1';
	var image2 = 'img.image.image2';
	var image3 = 'img.image.image3';
	var image4 = 'img.image.image4';
	$(image1).attr('src', 'assets/img/image1-500.png');
	$(image2).attr('src', 'assets/img/android/image2-500.png');
	$(image3).attr('src', 'assets/img/android/image3-500.png');
	$(image4).attr('src', 'assets/img/image4-500.png');

}

function displaySteve(){
	var image1 = 'img.image.image1';
	var image2 = 'img.image.image2';
	var image3 = 'img.image.image3';
	var image4 = 'img.image.image4';
	$(image1).attr('src', 'assets/img/image1-500.png');
	$(image2).attr('src', 'assets/img/image2-500.png');
	$(image3).attr('src', 'assets/img/image3-500.png');
	$(image4).attr('src', 'assets/img/image4-500.png');
}


// -----------------------------------------------------	DOCUMENT READY		-----------------------------------------------------

$(document).ready(function(){
	logoSize();

	if(isAndroid()){
		displayAndroid();
	}else if((isAndroid() || isApple()) === false){
		displayAndySteve();
	}else{
		displaySteve();
	}

	$('.spacer-30').css('opacity', '1');

window.onresize = resizeFunction;
	// $('body').on('resize', resizeFunction);
	$('body').on('scroll', scrollFunction);
	// window.onscroll = scrollFunction;
// console.log("works");

});