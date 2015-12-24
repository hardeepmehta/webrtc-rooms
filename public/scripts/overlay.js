$(document).ready(function(){
	var hh = window.innerHeight/2 - 12;

	$('#black-overlay #cubes').css({
		'top': hh
	});
});

function showBlackOverlay()
{
	$('#black-overlay #cubes').show();
	$('#black-overlay').removeClass();
	$('#black-overlay').show();
}

function removeBlackOverlay()
{
	$('#black-overlay').addClass('zoomOut');
	$('#black-overlay').hide();
}

function removeCubes()
{
	$('#black-overlay #cubes').hide();
}

function showImage(data)
{
	var ht = window.innerHeight - 230;
	var tp = window.innerHeight/2 - ht/2;
	showBlackOverlay();
	var url = data.attr('href');
	console.log('Got url as '+url);
	var imageHide=$('<div id="image-container"><div class="crossButton">x</div><img id="black-overlay-image" src="'+url+'" /></div>').appendTo('#black-overlay').hide();
	$('#black-overlay').find('#image-container').find('img').load(function(){
		imageHide.css({
			'display': 'none',
			'position': 'relative',
			'top': tp,
			'padding-left': '26px'
		});
		imageHide.find('img').css({
			'width': 'auto',
			'height': ht,
			'position': 'relative',
			'cursor': 'default'
		});

		$('#black-overlay').css({
			'cursor': 'pointer'
		});
		removeCubes();
		setTimeout(function(){
			imageHide.css('display','inline-block').removeClass('zoomIn').removeClass('zoomOut').addClass('zoomIn');
		},200);
	});

	$('#black-overlay').children('.crossButton').click(function(){
		removeImage();
	});

	$('#black-overlay').click(function(){
		removeImage();
	});

	imageHide.find('img').click(function(e){
		console.log('imageHide is clicked..');
		e.stopPropagation();
	});
}

function removeImage()
{
	$('#black-overlay').css({
			'cursor': 'default'
	});
	$('#black-overlay').find('#image-container').removeClass('zoomIn').removeClass('zoomOut').addClass('zoomOut');
	setTimeout(function(){
		$('#black-overlay').find('#image-container').remove();
		removeBlackOverlay();
	},300);
	
}

function showVideo(data)
{
	var ht = window.innerHeight - 230;
	var tp = window.innerHeight/2 - ht/2;
	showBlackOverlay();
	var url = data.attr('href');
	console.log('Got url as '+url);
	var imageHide=$('<div id="image-container"><div class="crossButton">x</div><video id="black-overlay-image" src="'+url+'" controls="" autoplay></video</div>').appendTo('#black-overlay').hide();
		imageHide.css({
			'display': 'none',
			'position': 'relative',
			'top': tp,
			'padding-left': '26px'
		});
		imageHide.find('video').css({
			'width': 'auto',
			'height': ht,
			'position': 'relative',
			'cursor': 'default'
		});

		$('#black-overlay').css({
			'cursor': 'pointer'
		});
		removeCubes();
		setTimeout(function(){
			imageHide.css('display','inline-block').removeClass('zoomIn').removeClass('zoomOut').addClass('zoomIn');
		},200);

	$('#black-overlay').children('.crossButton').click(function(){
		removeImage();
	});

	$('#black-overlay').click(function(){
		removeImage();
	});

	imageHide.find('video').click(function(e){
		console.log('imageHide is clicked..');
		e.stopPropagation();
	});
}

function removeVideo()
{
	$('#black-overlay').css({
			'cursor': 'default'
	});
	$('#black-overlay').find('#image-container').removeClass('zoomIn').removeClass('zoomOut').addClass('zoomOut');
	setTimeout(function(){
		$('#black-overlay').find('#image-container').remove();
		removeBlackOverlay();
	},300);
	
}