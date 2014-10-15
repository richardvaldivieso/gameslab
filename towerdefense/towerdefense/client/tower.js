    window.Game = window.Game || { };
    Game.Tower = function (color, range, speed, damage, xpos, ypos) {
        this.color = color;
        this.range = range;
        this.speed = speed;
        this.damage = damage;
        this.xpos = xpos;
        this.ypos = ypos;
        this.bullet = new Game.Bullet(this,"black");
        this.DrawTower = function () {
            Game.context.fillStyle = this.color
            Game.context.beginPath();
            Game.context.arc(this.xpos, this.ypos, 15, 0, 2 * Math.PI, false);
            Game.context.fill();
        }
        this.getEnemyPosition = function () {

        }

    };
