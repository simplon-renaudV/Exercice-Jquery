$(document).ready(function() {
   
    $('ul li ul  li').css('visibility', 'hidden');

    $('#menu1').mouseover(function() {
    	$('#menu1').css('backgroundColor', 'blue');
    	$('#menu1 li').css('visibility', 'visible');
    });
    $('#menu1').mouseout(function() {
    	$('#menu1').css('backgroundColor', '');
    	$('#menu1 li').css('visibility', 'hidden');
    });

	$('#menu2').mouseover(function() {
    	$('#menu2').css('backgroundColor', 'blue');
    	$('#menu2 li').css('visibility', 'visible');
    });
    $('#menu2').mouseout(function() {
    	$('#menu2').css('backgroundColor', '');
    	$('#menu2 li').css('visibility', 'hidden');
    });
    
    $('#menu3').mouseover(function() {
    	$('#menu3').css('backgroundColor', 'blue');
    	$('#menu3 li').css('visibility', 'visible');
    });
    $('#menu3').mouseout(function() {
    	$('#menu3').css('backgroundColor', '');
    	$('#menu3 li').css('visibility', 'hidden');
    });
    
    $('#menu4').mouseover(function() {
    	$('#menu4').css('backgroundColor', 'blue');
    	$('#menu4 li').css('visibility', 'visible');
    });
    $('#menu4').mouseout(function() {
    	$('#menu4').css('backgroundColor', '');
    	$('#menu4 li').css('visibility', 'hidden');
    });
	
    new IdealImageSlider.Slider('#diaporama');
});