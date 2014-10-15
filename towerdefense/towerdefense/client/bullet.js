window.Game = window.Game || { };
Game.Bullet = function(tower,colorBullet){
	   this.shoot = function(){
            Game.context.arc(this.xpos,this.ypos,5, 0, Math.PI * 2);
            Game.context.fillStyle = colorBullet;
            Game.context.fill();
        }
}