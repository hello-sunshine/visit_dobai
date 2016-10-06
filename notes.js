}, function(){
	$('#image').attr("target","_blank");	
	
	
$('#tour').change(function(){
		if ($('input:radio[name=tour]').val() == 'week') {
			$('#tour1').html('Google totally rocks!');
		} else if ($('input:radio[name=tour]').val() == 'threedays') {
			$('#tour2').html('Yahoo? Seriously???');
		} else if ($('input:radio[name=tour]').val() == 'weekend') {
			$('#tour3').html('Yahoo? Seriously???'); 
		}

	}); //end change
	
	
$('#send_postcard').click(function(){
	var greeting = $('#greeting').val();
	console.log("send postcard clicked");
	$('#postcard_canvas').drawText({
			strokeStyle: 'rgb(10,160,206)',
			strokeWidth: 3,
			x: 410,
			y: 470,
			fontSize: '3em',
			fontFamily: 'Georgia, Garamond, sans-serif',
			text: greeting
		}); //end drawtext
}); //end send postcard click

$('#beach').hover(function(){
		$(this).css({
		width:"50%",
		height:"50%"
		}); //end css
		// hovering off image
},function(){
    $(this).css({
	height:"25%"
	}); //end css
}); //end hover
$('#arab').hover(function(){
		$(this).css({
		width:"50%",
		height:"50%"
		}); //end css
		// hovering off image
},function(){
    $(this).css({
	width:"25%",
	height:"25%"
	}); //end css
}); //end hover
$('#khalifa').hover(function(){
		$(this).css({
		width:"50%",
		height:"50%"
		}); //end css
		// hovering off image
},function(){
    $(this).css({
	width:"25%",
	height:"25%"
	}); //end css
}); //end hover
$('#desert').hover(function(){
		$(this).css({
		width:"50%",
		height:"50%"
		}); //end css
		// hovering off image
},function(){
    $(this).css({
	width:"25%",
	height:"25%"
	}); //end css
}); //end hover
$('#fountain').hover(function(){
		$(this).css({
		width:"50%",
		height:"50%"
		}); //end css
		// hovering off image
},function(){
    $(this).css({
	width:"25%",
	height:"25%"
	}); //end css
}); //end hover
$('#marina').hover(function(){
		$(this).css({
		width:"50%",
		height:"50%"
		}); //end css
		// hovering off image
},function(){
    $(this).css({
	width:"25%",
	height:"25%"
	}); //end css
}); //end hover
$('#mall').hover(function(){
		$(this).css({
		width:"50%",
		height:"50%"
		}); //end css
		// hovering off image
},function(){
    $(this).css({
	width:"25%",
	height:"25%"
	}); //end css
}); //end hover
$('#garden').hover(function(){
		$(this).css({
		width:"50%",
		height:"50%"
		}); //end css
		// hovering off image
},function(){
    $(this).css({
	width:"25%",
	height:"25%"
	}); // end css
}); //end hover