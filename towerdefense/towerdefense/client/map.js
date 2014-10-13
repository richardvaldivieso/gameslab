
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

    //function GetMouseCoords () {}
    function GetMouseCoords(evt) {
        console.log(evt);
    }
    function moveEnemies() {
        for (var i = 0; i < enemies.length; i++) {
            enemies[i].moveEnemy();
        };
    }
    function DrawTowers() {
        for (var i = 0; i < towers.length; i++) {
            towers[i].DrawTower();

        };
    }
    var enemyPosition = 0;
    var MyTower = new Game.Tower("yellow", 200, 30, 5, 60, 60);
    var enemies = [new Game.Enemy("red", 2)];

    function GameLoop() {
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
        if (playing) {
            towers.push(new Game.Tower("yellow", 200, 30, 5, gridX, gridY));

        }
        else if (x > 300 && x < 500 && y > 150 && y < 200) {
            //console.log("clicked play");
            playing = true;
            GameLoop();
        }
    }


    function drawGrid() {
        for (var i = 0; i < canvasWidth / 40; i++) {
            for (var j = 0; j < canvasHeight / 40; j++) {
                if ((i % 2 == 0 && j % 2 == 1) || (i % 2 == 1 && j % 2 == 0)) {
                    Game.context.fillStyle = '#899'
                } else {
                    Game.context.fillStyle = '#777'
                }
                Game.context.fillRect(i * 40, j * 40, 40, 40)
            }

        }
    }

}

);








