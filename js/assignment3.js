//JavaScript Document
$(document).ready(function(){
//hovering on the stay indoors button
	$('#indoors').hover(function(){
		$('#indoors').css({
			backgroundColor: 'rgb(10,160,206)'
			}); //end css
		$('#indoorsmsg').text('Get ready for chilly air con!');
		}, 
		function(){
//hovering off the stay indoors button
		$('#indoors').css({
			backgroundColor: 'rgba(10,160,206,0.5)'
			}); //end css
		$('#indoorsmsg').text(' ');
		});	
//hovering on the go outdoors button
	$('#outdoors').hover(function(){
		$('#outdoors').css({
			backgroundColor: 'rgb(10,160,206)'
			}); //end css
		$('#outdoorsmsg').text('Get ready for the heat!');
	}, 
	function(){
//hovering off the go outdoors button
	$('#outdoors').css({
		backgroundColor: 'rgba(10,160,206,0.5)'
		}); //end css
	$('#outdoorsmsg').text(' ');
		});
//hovering on do it all button	
	$('#all').hover(function(){
		$('#all').css({
			backgroundColor: 'rgb(10,160,206)'
			}); //end css
		$('#allmsg').text('Get ready for fun-packed day!');
	}, 
	function(){
//hovering off do it all button
		$('#all').css({
			backgroundColor: 'rgba(10,160,206,0.5)'
			}); //end css
		$('#allmsg').text(' ');
	});	
	$('#indoors').click(function(){
//fadeout outdoor content
		$("h2:contains('Fountain')").fadeOut(1000);
		$("#fountain").fadeOut(1000);
		$("h2:contains('Marina')").fadeOut(1000);
		$("#marina").fadeOut(1000);
		$("h2:contains('Desert')").fadeOut(1000);
		$("#desert").fadeOut(1000);
		$("h2:contains('Beaches')").fadeOut(1000);
		$("#beaches").fadeOut(1000);
		$("h2:contains('Garden')").fadeOut(1000);
		$("#garden").fadeOut(1000);
//fadein indoor content	
		$("h2:contains('Khalifa')").fadeIn(1000);
		$("#khalifa").fadeIn(1000);
		$("h2:contains('Mall')").fadeIn(1000);
		$("#mall").fadeIn(1000);
		$("h2:contains('Arab')").fadeIn(1000);
		$("#arab").fadeIn(1000);
	}); //end filtering
	$('#outdoors').click(function(){
//fadein outdoor content
		$("h2:contains('Fountain')").fadeIn(1000);
		$("#fountain").fadeIn(1000);
		$("h2:contains('Marina')").fadeIn(1000);
		$("#marina").fadeIn(1000);
		$("h2:contains('Desert')").fadeIn(1000);
		$("#desert").fadeIn(1000);
		$("h2:contains('Beaches')").fadeIn(1000);
		$("#beaches").fadeIn(1000);
		$("h2:contains('Garden')").fadeIn(1000);
		$("#garden").fadeIn(1000);
//fadout indoor content
		$("h2:contains('Khalifa')").fadeOut(1000);
		$("#khalifa").fadeOut(1000);
		$("h2:contains('Mall')").fadeOut(1000);
		$("#mall").fadeOut(1000);
		$("h2:contains('Arab')").fadeOut(1000);
		$("#arab").fadeOut(1000);
	}); //end filtering
//fadein all
	$('#all').click(function(){
		$("h2:contains('Fountain')").fadeIn(1000);
		$("#fountain").fadeIn(1000);
		$("h2:contains('Marina')").fadeIn(1000);
		$("#marina").fadeIn(1000);
		$("h2:contains('Desert')").fadeIn(1000);
		$("#desert").fadeIn(1000);
		$("h2:contains('Beaches')").fadeIn(1000);
		$("#beaches").fadeIn(1000);
		$("h2:contains('Garden')").fadeIn(1000);
		$("#garden").fadeIn(1000);
		$("h2:contains('Khalifa')").fadeIn(1000);
		$("#khalifa").fadeIn(1000);
		$("h2:contains('Mall')").fadeIn(1000);
		$("#mall").fadeIn(1000);
		$("h2:contains('Arab')").fadeIn(1000);
		$("#arab").fadeIn(1000);
	}); //end fadein all
//hover over offer1 button
	$('#offer1').hover(function(){
		$('#offer1').css({
			backgroundColor: 'rgb(10,160,206)'
			}); //end css
		}, 
		function(){
//hover off offer1 button
		$('#offer1').css({
			backgroundColor: 'rgba(10,160,206,0.5)'
			}); //end css
	}); //end hover
//clear canvas and draw smiley
	$('#offer1').click(function(){
		$('#offer_canvas').clearCanvas();
		$('canvas').drawArc({
			strokeStyle: 'rgb(10,160,206)',
			strokeWidth: 1.5,
			x: 140, y: 30,
			radius: 25
		})
		.drawArc({
			strokeStyle: 'rgb(10,160,206)',
			strokeWidth: 1.5,
			x: 130, y: 25,
			radius: 5
		})
		.drawArc({
			strokeStyle: 'rgb(10,160,206)',
			strokeWidth: 1.5,
			x: 145, y: 25,
			radius: 5
		})
		.drawArc({
  			strokeStyle: 'rgb(10,160,206)',
			strokeWidth: 1.5,
 		 	x: 140, y: 35,
 		 	radius: 10,
 		 	start: 90, end: 240
		}); //end draw smiley
//drawtext for offer1 button
		$('#offer_canvas').drawText({
			layer: true,
			fillStyle: 'rgba(10,160,206,0.5)', 
			strokeStyle: 'rgb(10,160,206)',
			strokeWidth: 1,
			x: 145,
			y: 80,
			fontSize: '1.8em',
			fontFamily: 'Georgia, Garamond, sans-serif',
			text: '20% off weekend tour'
		}); //end drawtext for offer1 button
	}); //end offer1 click button
//hover over offer2 button	
	$('#offer2').hover(function(){
		$('#offer2').css({
			backgroundColor: 'rgb(10,160,206)'
			}); //end css
		}, 
		function(){
//hover off offer2 button
		$('#offer2').css({
			backgroundColor: 'rgba(10,160,206,0.5)'
			}); //end css
		}); //end hover off offer2 button
//clearcanvas and drawtext for offer2 button
	$('#offer2').click(function(){
		$('#offer_canvas').clearCanvas();
		$('#offer_canvas').drawText({
			layer: true,
			fillStyle: 'rgba(10,160,206,0.5)', 
			strokeStyle: 'rgb(10,160,206)',
			strokeWidth: 1,
			x: 145,
			y: 70,
			fontSize: '1.8em',
			fontFamily: 'Georgia, Garamond, sans-serif',
			text: 'complimentary drinks'
		}); //end drawtext
	}); //end click offer2 button
//header animation
	$('header').hide().show(2000);
//hover over image
	$('#beach').hover(function(){
		$(this).css({
			width:"175px",
			height:"175px"
			}); //end css
//hover off beach image
	},function(){
    	$(this).css({
			width:"150px",
			height:"150px"
			}); //end css
	}); //end hover off beach image
	$('#arab').hover(function(){
		$(this).css({
			width:"175px",
			height:"175px"
			}); //end css
//hover off arab image
	},function(){
    	$(this).css({
			width:"150px",
			height:"150px"
			}); //end css
	}); //end hover off arab image
	$('#khalifa').hover(function(){
		$(this).css({
			width:"175px",
			height:"175px"
			}); //end css
// hover off khalifa image
	},function(){
    	$(this).css({
			width:"150px",
			height:"150px"
			}); //end css
	}); //end hover off khalifa image
	$('#desert').hover(function(){
		$(this).css({
			width:"175px",
			height:"175px"
			}); //end css
		//hover off desert image
	},function(){
    	$(this).css({
			width:"150px",
			height:"150px"
			}); //end css
	}); //end hover off desert image
	$('#fountain').hover(function(){
		$(this).css({
			width:"175px",
			height:"175px"
			}); //end css
//hover off fountain image
	},function(){
   	 $(this).css({
			width:"150px",
			height:"150px"
			}); //end css
	}); //end hover off fountain image
	$('#marina').hover(function(){
		$(this).css({
			width:"175px",
			height:"175px"
			}); //end css
//hover off marina image
	},function(){
    	$(this).css({
			width:"150px",
			height:"150px"
			}); //end css
	}); //end hover off marina image
	$('#mall').hover(function(){
		$(this).css({
			width:"175px",
			height:"175px"
			}); //end css
//hover off mall image
	},function(){
    	$(this).css({
			width:"150px",
			height:"150px"
			}); //end css
	}); //end hover off mall image
	$('#garden').hover(function(){
		$(this).css({
			width:"175px",
			height:"175px"
			}); //end css
//hover off garden image
	},function(){
    	$(this).css({
			width:"150px",
			height:"150px"
			}); // end css
	}); //end hover off garden image
//postcard generator
	$('#image').change(function(){
		if($('#image').val() == 'beach') {
			$('#postcard_canvas').drawImage({
				source: 'images/beach.jpg',
				x: 150,
				y: 100
			});
		} else if($('#image').val() == 'fountain') {
			$('#postcard_canvas').drawImage({
				source: 'images/fountain.jpg',
				x: 150,
				y: 100
			});
		} else if($('#image').val() == 'marina') {
			$('#postcard_canvas').drawImage({
				source: 'images/marina.jpg',
				x: 150,
				y: 100
			});
		} else {
			$('#postcard_canvas').drawImage({
				source: 'images/desert.jpg',
				x: 150,
				y: 100
			});
		} //end if
	}); //end change
	$('#preview').click(function(){
		var greeting = $('#greeting').val();
		console.log("preview clicked");
		$('#postcard_canvas').drawText({
			fillStyle: 'white',
			strokeWidth: 3,
			x: 150,
			y: 50,
			maxWidth: 300,
			fontSize: '1.5em',
			fontFamily: 'Georgia, Garamond, sans-serif',
			text: greeting
		}); //end drawtext
	$('#clear').click(function(){
	$('#postcard_canvas').clearCanvas();
	}); //clear canvas
	}); //end preview click
//adding comments to radio buttons
	$('#tour').change(function(){
		if ($('input[name=tour]:checked').val() == 'threedays'){
			$('p.comment').html('Yay for long weekend!'); 
		} else if ($('input[name=tour]:checked').val() == 'week'){
			$('p.comment').html('Great choice!');
		} else if ($('input:radio[name=tour]:checked').val() == 'weekend'){
			$('p.comment').html('Short and sweet'); 
		}
	}); //end adding comments to radio buttons
//form validation
	$('#submit').click(function(submit){
		$('#name + .error').html(' ')
		if ($('#name').val().length == 0) {
			$('#name, label[for="name"]').attr({
				class: 'error'
				}); //end attr
			$('#name + .error').html('Please enter your name.').css({
				fontSize: '0.7em'
				}); //end css
			submit.preventDefault();
		} else {
			$('#name, label[for="name"]').attr({
				class: 'none'
				}); //end attr
			$('#name + .error').html(' ');
		}
		$('#phone + .error').html(' ')
		if ($('#phone').val().length == 0) {
			$('#phone, label[for="phone"]').attr({
				class: 'error'
			}); //end attr
			$('#phone + .error').html('Please enter your phone no.').css({
				fontSize: '0.7em'
				}); //end css
			submit.preventDefault();
		} else {
			$('#phone, label[for="phone"]').attr({
				class: 'none'
			}); //end attr
			$('#phone + .error').html(' ');
		}
		$('#email + .error').html(' ')
		if ($('#email').val().length == 0) {
			$('#email, label[for="email"]').attr({
				class: 'error'
			}); //end attr
			$('#email + .error').html('Please enter your email address.').css({
				fontSize: '0.7em'
				}); //end css
			submit.preventDefault();
		} else {
			$('#email, label[for="email"]').attr({
				class: 'none'
			}); //end attr
			$('#email + .error').html(' ');
		}
		$('#name').focusout(function(event){
			$('#name + .error').html(' ');
		if ($('#name').val().length == 0) {
			$('#name, label[for="name"]').attr({
				class: 'error'
				}); //end attr
			event.preventDefault();
		} else {
			$('#name, label[for="name"]').attr({
				class: 'none'
				}); //end attr
		}
		}); //end focusout	
		$('#phone').focusout(function(event){
			$('#phone + .error').html(' ');
		if ($('#phone').val().length == 0) {
			$('#phone, label[for="phone"]').attr({
				class: 'error'
				}); //end attr
			event.preventDefault();
		} else {
			$('#phone, label[for="phone"]').attr({
				class: 'none'
			}); //end attr
		}
		}); //end focusout	
		$('#email').focusout(function(event){
			$('#email + .error').html(' ');
		if ($('#email').val().length == 0) {
			$('#email, label[for="email"]').attr({
				class: 'error'
				}); //end attr
			event.preventDefault();
		} else {
			$('#email, label[for="email"]').attr({
				class: 'none' //end attr
			});
		}
		}); //end focusout
	}); //end submit
//hover on preview button
	$('#preview').hover(function(){
		$('#preview').css({
			backgroundColor: 'rgb(10,160,206)'
		}); //end css
	}, 
	function(){
		//hover off preview button
		$('#preview').css({
			backgroundColor: 'rgba(10,160,206,0.3)'
		}); //end css
	});	
//hover on start again button
	$('#clear').hover(function(){
		$('#clear').css({
			backgroundColor: 'rgb(10,160,206)'
		}); //end css
	}, 
	function(){
//hover off start again button
		$('#clear').css({
			backgroundColor: 'rgba(10,160,206,0.3)'
		}); //end css
	});	
//hover on submit button
	$('#submit').hover(function(){
		$('#submit').css({
			backgroundColor: 'rgb(10,160,206)'
		}); //end css
	}, 
	function(){
//hover off submit button
		$('#submit').css({
			backgroundColor: 'rgba(10,160,206,0.3)'
		}); //end css
	}); //end hover off
}); //end ready