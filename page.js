$(document).ready(function() {
   
    $('li').hide();
    $('#menu1').click(function() {
    	$('#menu1 li').toggle();
    });

 	$('li').hide();
    $('#menu2').click(function() {
    	$('#menu2 li').toggle();
    });

     $('li').hide();
    $('#menu3').click(function() {
    	$('#menu3 li').toggle();
    });

    $('li').hide();
    $('#menu4').click(function() {
    	$('#menu4 li').toggle();
    });

    new IdealImageSlider.Slider('#diaporama');
});