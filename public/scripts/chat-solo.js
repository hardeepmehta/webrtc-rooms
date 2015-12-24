$(window).load(function(){
		var height = window.innerHeight - 81;
		var firstHeight = $('#first-section').height()/height;
		var thirdHeight = $('#third-section').height()/height;
		var fourthHeight = $('#fourth-section').height()/height;
		var secondHeight = (1 - firstHeight - thirdHeight - fourthHeight)*100;
		var percentage = secondHeight + '%';
		$('#second-section').css({
			height: percentage
		});
		var btm;
	// 	if(window.innerHeight < 659 && isChrome)
	// 	{
	// 		btm = 95;
	// 	}
	// 	else
	// 	{
	// 		  if(isChrome)
	// 			{
	// 				btm = 116;
	// 			}
	// 		  else
	// 			{
	// 				btm = 130;
	// 				$('#third-section form textarea').css({
	// 					'height': 133
	// 				});
	// 			}
	// 	}
	// 	if(window)
	// 	$('#sidebar-right').css({
	// 		'height': height,
	// 		'bottom': btm
	// 	});
	// 		$('#sidebar-chat-right').css({
	// 		'bottom': btm
	// });

		var left = (window.innerWidth - main_width)/2;
		var top = 3;
			$('#sidebar-right').css({
			'height': height,
			'left': -left,
			'top': -top
				});
			$('#sidebar-chat-right').css({
			'bottom': btm,
			'left': -left,
			'top': -top
				});
			 
		oldHeight = $('#second-section').height();
		$('#second-section-form').submit(function(e){
			e.preventDefault();
			var data = $('#first-chat').val();
			var trimmed = $.trim(data);
			if(trimmed!='')
			{
				socket.emit('this-chat-data',data);
				$('#first-chat').val('');
				$('#second-section').append('<div id="this-user-chat"><div id="this-chat-data"><div id="this-user-bubble"><div class="bubble bubble--alt">'+data+'</div></div></div></div>');
				animateChatData();
			}
		});

		$('#first-plane').click(function(){
			$('#second-section-form').submit();
		});

		$('#second-section-form textarea').keyup(function (event) {
	       if (event.keyCode == 13 && event.shiftKey) {
	           var content = this.value;
	           var caret = getCaret(this);
	           this.value = content.substring(0,caret)+"\n"+content.substring(carent,content.length-1);
	           event.stopPropagation();
	           
	      }else if(event.keyCode == 13)
	      {
	          $('#second-section-form').submit();
	      }
	});

		$('#first-right-icons img').eq(0).click(function(){
			resetChatBuffer();
			$('#sidebar-right').fadeOut(200);
			$('#local-chat-arrow').fadeIn(200);
		});
});	

		function getCaret(el) { 
		  if (el.selectionStart) { 
		    return el.selectionStart; 
		  } else if (document.selection) { 
		    el.focus(); 

		    var r = document.selection.createRange(); 
		    if (r == null) { 
		      return 0; 
		    } 

		    var re = el.createTextRange(), 
		        rc = re.duplicate(); 
		    re.moveToBookmark(r.getBookmark()); 
		    rc.setEndPoint('EndToStart', re); 

		    return rc.text.length; 
		  }  
		  return 0; 
		}