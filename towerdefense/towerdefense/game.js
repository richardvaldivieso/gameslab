if (!Meteor.isClient) return;
$(function(){
	
	var canvasWidth = 800;
  	var canvasHeight = 600;
    $("#menuCanvas").attr("width",canvasWidth);
  	$("#menuCanvas").attr("height",canvasHeight);
  	var canvas = $('#menuCanvas')[0].getContext('2d');
  	canvas.strokeRect(0,0,canvasWidth,canvasHeight);

});




