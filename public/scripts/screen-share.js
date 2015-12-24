$(window).load(function(){
	SCREEN_SHARED = false;
	socket.screenShared = false;
	$('#first-right-icons img').eq(0).click(function(){
		if((socket.users.length === 1) && (!SCREEN_SHARED))
			{
				console.log('Cannot share screen..User is alone.');
						// getScreenId(function (error, sourceId, screen_constraints) {
				  //   // error    == null || 'permission-denied' || 'not-installed' || 'installed-disabled' || 'not-chrome'
				  //   // sourceId == null || 'string' || 'firefox'

				  //   if(sourceId && sourceId != 'firefox') {
				  //       screen_constraints = {
				  //           video: {
				  //               mandatory: {
				  //                   chromeMediaSource: 'screen',
				  //                   maxWidth: 1920,
				  //                   maxHeight: 1080
				  //               }
				  //           }
				  //       };

				  //       if (error === 'permission-denied') return alert('Permission is denied.');
				  //       if (error === 'not-chrome') return alert('Please use chrome.');

				  //       if (!error && sourceId) {
				  //           screen_constraints.video.mandatory.chromeMediaSource = 'desktop';
				  //           screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;
				  //       }
				  //   }
				    
			   //  			try
			   //  			{
						// 		    getUserMedia(screen_constraints, function (stream) {
						// 		    	globalVideo = $('#my-screen-share')[0];
						// 		        $('#my-screen-share').hide()[0].src = URL.createObjectURL(stream);								         
						// 			        	//Person must be alone..
						// 			        	window.abc = stream;
						// 			        	$('#my-video').hide();
						// 			        	$('#screen-share').css({'height': screenSharedHeight});
						// 			        	$('#my-screen-share').css({'position': 'relative','height': 'auto', 'width': main_width, 'left': 0, 'z-index': 0, 'top': 0}).parent().css({'position': 'absolute', 'top': 660 - screenSharedHeight }).prependTo('#local-video');
						// 				        	$('#my-screen-share').show().addClass('animated fadeInLeft');
						// 				        	$('#my-screen-share')[0].play();
						// 				        	SCREEN_SHARED = true;
						// 				        	socket.screenShared = true;
						// 				        	socket.emit('screen-share-on');
						// 				        	stream.onended = function()
						// 				        	{
						// 				        		var hide = $('#screen-share').find('#my-screen-share').hide();
						// 				        		hide[0].src = '';
						// 				        		hide.parent().appendTo('body');
						// 				        		globalVideo = elem;
						// 				        		$('#my-video').show().addClass('animated fadeInLeft');
						// 				        		SCREEN_SHARED = false;
						// 				        		socket.screenShared = false;
						// 				        		socket.emit('screen-share-off');
						// 	        				}
									        
						// 		    }, function (error) {
						// 		        console.error(error);
						// 		    });

						// 	  }
						// 	  catch(err)
						// 	  {
						// 	  		console.log('ERROR is '+err);
						// 	  }
				   	
						// });

			}

			else if((socket.users.length === 2) && (!SCREEN_SHARED) && (!socket.screenSharedByRemote))
			{
						getScreenId(function (error, sourceId, screen_constraints) {
				    // error    == null || 'permission-denied' || 'not-installed' || 'installed-disabled' || 'not-chrome'
				    // sourceId == null || 'string' || 'firefox'

				    if(sourceId && sourceId != 'firefox') {
				        screen_constraints = {
				            video: {
				                mandatory: {
				                    chromeMediaSource: 'screen',
				                    maxWidth: 1920,
				                    maxHeight: 1080
				                }
				            }
				        };

				        if (error === 'permission-denied') return alert('Permission is denied.');
				        if (error === 'not-chrome') return alert('Please use chrome.');

				        if (!error && sourceId) {
				            screen_constraints.video.mandatory.chromeMediaSource = 'desktop';
				            screen_constraints.video.mandatory.chromeMediaSourceId = sourceId;
				        }
				    }
				    
			    			try
			    			{
			    					var left = (window.innerWidth - main_width)/2 + 7;
								    getUserMedia(screen_constraints, function (stream) {
								    	globalVideo = $('#my-screen-share')[0];
								        $('#my-screen-share').hide()[0].src = URL.createObjectURL(stream);								         
									        	//Person must be currently in a chat..
									        	$('#my-video').hide();
												$('#screen-share').addClass('remote-video-right').css({
													'position': 'absolute',
													'height': 150,
													'width': 190,
													'left': left,
													'top': 8
													});									        	
									        	
									        	$('#my-screen-share').css({'position': 'relative','height': 'auto', 'width': 190, 'z-index': 0}).parent().appendTo('#remote-video');
										        	$('#my-screen-share').show().removeClass('animated fadeInLeft').addClass('animated fadeInLeft');
										        	$('#my-screen-share')[0].play();
										        	SCREEN_SHARED = true;
										        	socket.screenShared = true;
										        	socket.screenStream = stream;
										        	socket.emit('screen-share-on');
										        	createOffer(stream);
										        	stream.onended = function()
										        	{
										        		var hide = $('#screen-share').find('#my-screen-share').hide();
										        		hide[0].src = '';
										        		hide.parent().appendTo('body');
										        		globalVideo = elem;
										        		$('#my-video').show();
										        		SCREEN_SHARED = false;
										        		socket.screenShared = false;
										        		socket.emit('screen-share-off');
										        		socket.screenStream = undefined;
										        		resetLocalShareScreenDiv();
							        				}
										      
									        
								    }, function (error) {
								        console.error(error);
								    });

							  }
							  catch(err)
							  {
							  		console.log('ERROR is '+err);
							  }
				   	
						});

			}

	});
});