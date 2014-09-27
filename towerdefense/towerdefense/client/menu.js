if (!Meteor.isClient) return;
$(function(){
	
	var canvasWidth = 800;
  var canvasHeight = 600;
  var level;
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
  /*
    var LaserTower =  {
        type = "Laser Tower",
        range = 50,
        firingRate = 100,
        level = this.level
        color = this.Towercolor
    };
    var Towercolor = {

    };
*/
    function drawCircle (x,y) 
    {
      context.fillStyle = "yellow"
      context.beginPath();
      context.arc(x,y,15,0,2* Math.PI,false);
      context.fill();
    }


    menuCanvas.addEventListener('mousemove', GetMouseCoords);
    menuCanvas.addEventListener('click', clicked);
    
    //function GetMouseCoords () {}
    function GetMouseCoords (evt) 
    {
      console.log(evt);
    }
    function clicked (evt) 
    {
      var x = evt.x;
      var y = evt.y;

      if (x>300 &&  x<500 && y > 150 && y<200 ) 
      {
      console.log("clicked play");
      context.fillStyle = 'Navy'
      context.fillRect(0,0,canvasWidth,canvasHeight);
      drawGrid();
      drawCircle(x,y);
      
      }
    }
    function drawGrid() 
    {
       for (var i = 0; i < canvasWidth / 40; i++) 
       {
            for (var j = 0; j < canvasHeight / 40; j++) 
          {
                if ((i%2 == 0 && j%2 == 1 )|| (i%2 == 1 && j%2 == 0 )) 
              {
                context.fillStyle = 'White'
              } else
              {
                context.fillStyle = 'black'
              }
                context.fillRect(i*40,j*40,40,40);
                
              
                
          };    
             
       };      
    }


    
  /*context.clearRect(0,0,canvasWidth,canvasHeight);
      context.fillStyle = 'Navy'
      context.fillRect(0,0,canvasWidth,canvasHeight);
      context.fillStyle = 'White'
      for (var i = 0; i <40 ; i++) {
        context.beginPath();
        context.moveTo(0,0)

      };
      */   



});




