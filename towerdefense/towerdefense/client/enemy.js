window.Game = window.Game || {};
Game.Enemy = function (color, speed) {
    this.enemyPath = [[20, 20], [400, 20], [800, 500], [20, 20]];
    this.enemyNext = 1;
    this.color = color;
    this.speed = speed;
    this.xpos = this.enemyPath[0][0];
    this.ypos = this.enemyPath[0][1];
    this.steps = 120;
    this.step = 0;
    this.moveEnemy = function () {
        var ratio = this.step / this.steps;
        this.xpos = ratio * (this.enemyPath[this.enemyNext][0] - this.enemyPath[this.enemyNext - 1][0]) + this.enemyPath[this.enemyNext - 1][0];
        this.ypos = ratio * (this.enemyPath[this.enemyNext][1] - this.enemyPath[this.enemyNext - 1][1]) + this.enemyPath[this.enemyNext - 1][1];
        this.step++;
        if (this.step == this.steps) {
            this.step = 0;
            if (this.enemyNext + 1 == this.enemyPath.length) {
                this.enemyNext = 1;

            } else {
                this.enemyNext += 1;
            }
        }
        this.DrawEnemy();
    }
    this.DrawEnemy = function () {
        Game.context.fillStyle = this.color;
        Game.context.beginPath();
        Game.context.arc(this.xpos, this.ypos, 15, 0, 2 * Math.PI, false);
        Game.context.fill();
    }
};

