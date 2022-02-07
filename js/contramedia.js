$(document).ready(function() {
	//Fade thumbs
	$('.portfolio a').hover(function() {
		$(this).find('img').fadeTo(500, 0.3);
	}, function() {
		$(this).find('img').fadeTo(500, 1);
	});
	
	//Carousel
	$('a img.thumbnail').click(function(){
		  $('.portfolio, .container-fluid.title').css('display','none'),
		  $('#myCarousel').fadeIn(1000)
	});
});