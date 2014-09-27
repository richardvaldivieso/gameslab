if (!Meteor.isClient) return;
$(function(){
	
	var canvasWidth = 800;
  	var canvasHeight = 600;
    $("#menuCanvas").attr("width",canvasWidth);
  	$("#menuCanvas").attr("height",canvasHeight);
  	//access 2d context
  	var context = $('#menuCanvas')[0].getContext('2d');
  	context.strokeRect(0,0,canvasWidth,canvasHeight);

  	context.fillStyle = 'Navy'
  	context.font = "bold 16px Arial";
  	
  	// add squares here for menu
  	context.fillRect(300,150,200,50);
	  context.fillRect(300,230,200,50);
	  context.fillRect(300,310,200,50);


    context.fillStyle = 'White'
    context.textAlign = 'center'
    context.fillText("Play", 400, 180);
    context.fillText("Settings", 400, 260);
    context.fillText("Exit", 400, 340);
});




