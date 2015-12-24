$(document).ready(function(){

	$('#first').animate({
		'left': 1000},{
		 duration: 600,
		 easing: 'easeInCubic'
		});

	$('#second').animate({
		'left': 1000},{
		 duration: 600,
		 easing: 'easeInQuart'
		}, 1000);

});