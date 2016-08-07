var MAX_PHOTO_AMOUNT = 49;

$(document).ready(function() {

// On scroll effects
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
// For header section
	//banner movement
		$('.banner').css({
			'transform' : 'translate(0px, '+ wScroll / 0.4 +'%)'
		});
	//logo movement
		$('.logo').css({
			'transform' : 'translate(0px, '+ wScroll / 6 +'%)'
		});

	//photo movement
		$('.photo').css({
			'transform' : 'translate('+ wScroll / 25 +'%, -'+ wScroll / 65 +'%)'
		});
	//buttons movement
		$('#btn1').css({
			'transform' : 'translate(-'+ wScroll / 2 +'%, '+ wScroll / 20 +'%)'
		});
		$('#btn2').css({
			'transform' : 'translate(-'+ wScroll / 3 +'%, '+ wScroll / 20 +'%)'
		});
		$('#btn3').css({
			'transform' : 'translate(-'+ wScroll / 4 +'%, '+ wScroll / 20 +'%)'
		});
		$('#btn4').css({
			'transform' : 'translate(-'+ wScroll / 5 +'%, '+ wScroll / 20 +'%)'
		});

	// show menu icon for small screens more after scrolling
		if ( $(window).width() < 420) {
			$('.menu_icon').css({'display': 'block'});
		} else if (wScroll > $('#about').offset().top) {
			$('.menu_icon').css({'display': 'block'});
		} else {
			$('.menu_icon').css({'display': 'none'});
		}
	//section opacity (experimental effect)
		//$('.header').css({
		//	'background' : 'rgba(180, 180, 180, '+ wScroll / 2000 +')'
		//});
	// show menu icon after header section
		

// For services section
	if(wScroll > $('.services').offset().top - $(window).height()){

		var offset = Math.min(0, wScroll - $('.services').offset().top + $(window).height() - 400);

		$('.pack1').css({'transform': 'translate('+ offset +'px, '+ offset * .2 +'px)'});
		$('.pack2').css({'transform': 'translate(0px, '+ offset * .2 +'px)'});
		$('.pack3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ offset * .2 +'px)'});
		$('.pack4').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset) * .2 +'px)'});
		$('.pack5').css({'transform': 'translate(0px, '+ Math.abs(offset) * .2 +'px)'});
		$('.pack6').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset) * .2 +'px)'});
	}

// For gallery
	if(wScroll > $('.masonry').offset().top - ($(window).height() / 1.2)) {

		$('.masonry figure').each(function(i){
			setTimeout(function(){
				$('.masonry figure').eq(i).addClass('is-showing');
			}, 30 * (i + 1));
		});
	}
});

// Buttons onclick
$('#menu_icon').click(function() {
	$('.overlay').css({
		'display':'block',
		'width': '100%',
		'height': '280px'
	});
	$('.menu_icon').css({'display':'none'});
	$('.overlay-content').css({'display':'block'});
	$('.closebtn').css({'display':'block'});
});

$('.closebtn').click(function() {
	$('.overlay').css({
		'width': '0',
		'height': '0'
	});
	$('.menu_icon').css({'display':'block'});
	$('.overlay-content').css({'display':'none'});
	$('.closebtn').css({'display':'none'});
});

$('.overlay-content a').click(function() {
	// close menu bar
	$('.overlay').css({
		'width': '0',
		'height': '0'
	});
	$('.menu_icon').css({'display':'block'});
	$('.overlay-content').css({'display':'none'});
	$('.closebtn').css({'display':'none'});

	// scroll to the picked section
	var id = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

	// click on the menu buttons in header
$('.menu_btn a').click(function() {
	var id = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

	// click buttons in service container
$('#max').bind('click', function() {
	$('#max ul').slideToggle('slow');
	$(this).toggleClass('pack');
});
$('#st').click(function() {
	$('#st ul').slideToggle('slow');
});
$('#light').click(function() {
	$('#light ul').slideToggle('slow');
});
$('#ls').click(function() {
	$('#ls ul').slideToggle('slow');
});
$('#ps').click(function() {
	$('#ps ul').slideToggle('slow');
});
$('#hd').click(function() {
	$('#hd ul').slideToggle('slow');
});

// Popup gallery

$('figure').on('click', 'img', function(){
	//open popup
	var picked = $(this).attr('src');
	$('#viewer').css({'display' : 'block'});
	$('#image').css({'background-image' : 'url('+ picked +')'});
	var current = parseInt($(this).attr('data-image-number'), 10);
	//buttons
		//right arrow

	$('#right').click(function(){
		current = current < MAX_PHOTO_AMOUNT ? (current + 1) : 1;
		$('#image').css({'background-image' : 'url(/images/gallery/'+ current +'.jpg)'});
	});

	$('#left').click(function(){
		current = current > 1 ? (current - 1) : MAX_PHOTO_AMOUNT;
		$('#image').css({'background-image' : 'url(/images/gallery/'+ current +'.jpg)'});
	});

	$('#close').click(function(){
		$('#viewer').css({
			'display' : 'none'
		});
	});
});


});