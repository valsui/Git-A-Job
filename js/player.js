import * as Util from './util';

class Player{
    constructor(canvas){
        this.base_x = canvas.width/2;
        this.base_y = canvas.height;
        this.radius = 75;
        this.angle = 3*(Math.PI)/2;
        this.x = this.base_x;
        this.y = this.base_y;
        // this.trigger_x = this.x - 5;
        // this.trigger_y = this.y - 2*this.radius - 10;
        this.velocity = 0.02;
        // debugger;
        this.mousePos = {
            x: this.base_x,
            y: this.base_y
        }
        this.playerPos = {
            x: this.base_x,
            y: this.base_y
        }
        
        addEventListener('mousemove', (event) => {
            // console.log(event);
            this.mousePos.x = event.clientX;
            this.mousePos.y = event.clientY;
            this.angle = Util.mouseangle(this.mousePos, this.playerPos);
            console.log(this.angle * (180/Math.PI));
            console.log('mousePos:', this.mousePos);
            this.x = (this.radius + 100) * Math.cos(this.angle) + this.base_x;
            this.y = (this.radius + 100) * Math.sin(this.angle) + this.base_y;
            // console.log('this.x:', this.x);
            // console.log('this.y:', this.y);

        })
    }


    
    draw(c){
        c.save();
        c.beginPath();
        c.arc(this.base_x, this.base_y, this.radius, 0, 2*Math.PI, true);
        c.stroke();
        c.fillStyle = 'grey';
        c.fill()

        // c.setTransform(1, 0, 0, 1, 0, 0);
        // c.translate(this.base_x, this.base_y);
        // c.rotate(this.angle);
        c.beginPath()
        c.lineWidth='30';
        c.strokeStyle = 'grey';
        // c.fillRect(this.x, this.y, 10, this.radius);
        // c.rect(-this.x, this.y, 10, this.radius);
        c.moveTo(this.base_x, this.base_y);
        // console.log('base_x:', this.base_x);
        // console.log('base_y:', this.base_y);
        c.lineTo(this.x, this.y);
        // console.log('x:', this.x)
        // console.log('y:', this.y)
        // debugger;
        // c.fillRect();
        c.stroke();
        // c.restore();
        // c.rect()
    }

    update(c) {
        //Move points over time
        this.draw(c);
    }


}

export default Player;