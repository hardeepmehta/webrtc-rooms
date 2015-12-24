$(window).load(function(){
	$('#sidebar-chat-right').on('mouseenter',function(e){
		resetChatBuffer();
		$this = $(this);
			$('#local-chat-arrow').removeClass();
			$('#local-chat-arrow').addClass('zoomOut');
				$('#local-chat-arrow').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).hide();
					$this.hide("slide", {
					  	 direction: "right",
					  	 duration: 100,
					 	 easing: 'easeInQuart' 
					  	}, function(){
					  		$('#sidebar-right').show("slide", {
					  			 direction: "right",
					  			 duration: 200,
					 	 		 easing: 'easeInCubic' 
					  		}, function(){
					  				recursiveAnimateChatData();
						  			$('#sidebar-right').one('mouseleave', function(){
						  				console.log('Reverse Process Now..');
						  				$('#sidebar-right').hide("slide", {
						  			 	direction: "right",
						  			 	duration: 100,
						 	 		 	easing: 'easeInCubic' 
						  			}, function(){
						  				console.log('Reverse step 1');
							  				$this.show("slide", {
										  	 direction: "right",
										  	 duration: 80,
										 	 easing: 'easeInQuart' 
										  	}, function(){
											  		console.log('Reverse step 2');
											  		resetChatBuffer();
											  		$('#local-chat-arrow').show();
											  		$('#local-chat-arrow').removeClass();
													$('#local-chat-arrow').addClass('zoomIn');
													$('#local-chat-arrow').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
													console.log('Reverse step 3');
												});
										  	});
						  			});
					  			});
					  		});
				  	});
				});	
	});
});

