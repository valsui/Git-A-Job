import * as Util from './util';

class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = 75;
        this.trigger_x = x - 5;
        this.trigger_y = y - 2*this.radius - 10;
        this.velocity = 0.2;
        this.mouse = {
            x: innerWidth / 2,
            y: innerHeight / 2
        };
        // // debugger;
    }
    
    draw(c){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
        c.stroke();
        c.fillStyle = 'grey';
        c.fill()

        c.beginPath()
        c.lineWidth='4';
        c.strokeStype = 'grey';
        // debugger;
        c.fillRect(this.trigger_x, this.trigger_y, 10, this.radius);
        c.rect(this.trigger_x, this.trigger_y, 10, this.radius);
        // c.fillRect();
        c.stroke();
        // c.rect()
    }


}

export default Player;