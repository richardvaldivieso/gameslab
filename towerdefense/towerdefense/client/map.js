$(function () {
	var playing = false;
    var canvasWidth = 800;
    var canvasHeight = 600;
    var fps = 15;
    var lives = 50;
    var money = 100;
    var towers = [];
    menuCanvas.addEventListener('mousemove', GetMouseCoords);
    menuCanvas.addEventListener('click', clicked);

    var context = $('#menuCanvas')[0].getContext('2d');

    
    var Enemy = function(color,speed)
    {
    	this.enemyPath = [  	[20,20] , [400,20] , [800,500] , [20,20]  ];
    	this.enemyNext = 1;
    	this.color = color;
    	this.speed = speed;
    	this.xpos = this.enemyPath[0][0];
    	this.ypos = this.enemyPath[0][1];
    	this.steps = 120;
    	this.step = 0;
    	this.moveEnemy = function()
    	{
    		var ratio = this.step/this.steps;
    		this.xpos = ratio * ( this.enemyPath[this.enemyNext][0] - this.enemyPath[this.enemyNext-1][0]) + this.enemyPath[this.enemyNext-1][0];
    		this.ypos = ratio * ( this.enemyPath[this.enemyNext][1] - this.enemyPath[this.enemyNext-1][1]) + this.enemyPath[this.enemyNext-1][1];
    		this.step++;
    		if (this.step == this.steps) 
    		{
    			this.step = 0;
    			if (this.enemyNext+1 == this.enemyPath.length) 
    			{
    				this.enemyNext = 1;

    			} else {
    				this.enemyNext += 1;
    			}
    		}
    		this.DrawEnemy();
    	}
    	this.DrawEnemy = function() 
    	{
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.xpos, this.ypos, 15, 0, 2 * Math.PI, false);
        context.fill();
    	}
    };

    var Tower = function(color,range,speed,damage, xpos, ypos)
    {
    	this.color = color;
    	this.range = range;
    	this.speed = speed;
    	this.damage = damage;
    	this.xpos = xpos;
    	this.ypos = ypos;
    	this.DrawTower = function()
    	{
	    	context.fillStyle = this.color
	        context.beginPath();
	        context.arc(this.xpos,this.ypos, 15, 0, 2 * Math.PI, false);
	        context.fill();
    	}
    	this.getEnemyPosition = function()
    	{

    	}

    };
    

    //function GetMouseCoords () {}
    function GetMouseCoords(evt) {
        console.log(evt);
    }
    function moveEnemies() 
    {
    		for (var i = 0; i < enemies.length; i++) {
    			enemies[i].moveEnemy();
    		};
    }
    function DrawTowers() 
    {
    	for (var i = 0; i < towers.length; i++) {
    		towers[i].DrawTower();

    	};
    }
    var enemyPosition = 0;
    var MyTower = new Tower("yellow",200,30,5,60,60);
    var enemies = [ new Enemy("red", 2) ];

    function GameLoop()
    {
    	
    	drawGrid();

    	DrawTowers();
    	

		moveEnemies();
		window.requestAnimationFrame(GameLoop);




    }
    function clicked(evt) {
        var x = evt.x;
        var y = evt.y;
        var gridX = Math.floor(x / 40) * 40 + 20;
        var gridY = Math.floor(y / 40) * 40 + 20;
        if (playing)
	        { 
	        	towers.push(new Tower("yellow",200,30,5, gridX, gridY));

	        } 
        else if (x > 300 && x < 500 && y > 150 && y < 200) 
    		{
	            //console.log("clicked play");
	            playing = true;
	            GameLoop();
	        }
    }


    function drawGrid() 
    {
        for (var i = 0; i < canvasWidth / 40; i++) {
            for (var j = 0; j < canvasHeight / 40; j++) {
                if ((i % 2 == 0 && j % 2 == 1) || (i % 2 == 1 && j % 2 == 0)) {
                    context.fillStyle = '#899'
                } else {
                    context.fillStyle = '#777'
                }
                context.fillRect(i * 40, j * 40, 40, 40)
            }

        }
    }
    
}

);








