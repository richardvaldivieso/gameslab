  $(function(){

    var canvasWidth = 800;
    var canvasHeight = 600;

    menuCanvas.addEventListener('mousemove', GetMouseCoords);
    menuCanvas.addEventListener('click', clicked);

    var context = $('#menuCanvas')[0].getContext('2d');

    function drawCircle (x,y) 
    {
      context.fillStyle = "yellow"
      context.beginPath();
      context.arc(x,y,15,0,2* Math.PI,false);
      context.fill();
    }
    //function GetMouseCoords () {}
    function GetMouseCoords (evt) 
    {
      console.log(evt);
    }
    
    function clicked (evt) 
    {
      var x = evt.x;
      var y = evt.y;
      var gridX = Math.floor(x/40) *40 +20;
      var gridY = Math.floor(y/40)*40 + 20;
      if (x>300 &&  x<500 && y > 150 && y<200 )  
      {
      console.log("clicked play");
  
      drawGrid();
      drawCircle(gridX,gridY); 
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
                context.fillStyle = '#899'
              } else
              {
                context.fillStyle = '#777'
              }
                context.fillRect(i*40,j*40,40,40)                
          }    
             
       }      
     }
   }

);
    
    

  
  


    
