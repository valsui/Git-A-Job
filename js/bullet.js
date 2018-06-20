import Util from './util';

class Bullet{
    constructor(x,y,color,direction){
        this.x = x,
        this.y = y,
        this.direction = direction;
        this.color;
        // debugger;
    }

    draw(c){
        c.fillStyle = this.color;

        c.beginPath();
        c.arc(this.x, this.y, Bullet.RADIUS, 0, 2*Math.PI, true);
        c.fill();
        c.closePath();
    }

    update(c){
        this.x += Bullet.SPEED*this.direction.x;
        this.y += Bullet.SPEED*this.direction.y;
        
        this.draw(c);
    }
}

Bullet.RADIUS = 30;
Bullet.SPEED = 1;

export default Bullet;