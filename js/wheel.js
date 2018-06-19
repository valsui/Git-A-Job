import Particle from './particle';
import * as Util from './util';

class Wheel {
    constructor(x, y, colors, canvas){
        this.x = x;
        this.y = y;
        this.previous_x = x;
        this.previous_y = y;
        this.velocity_x = 10;
        this.velocity_y = 15;
        this.canvas = canvas;
        this.colors = colors;
        this.particles = [];
    }

    update(c){
        const center = {
            x: this.x,
            y: this.y
        }
        for (let i = 0; i < 50; i++) {
            const radius = (Math.random() * 2) + 1;
            this.particles.push(new Particle(this.x, this.y, radius, Util.randomColor(this.colors), center))
        }
        // debugger;
        this.particles.forEach((p) => {
            p.update(c);
        })

        if ((this.x + this.velocity_x) > this.canvas.width || (this.x + this.velocity_x) < 0){
            this.velocity_x = -this.velocity_x
            this.x += this.velocity_x;
        } else {
            // this.velocity_x = -this.velocity_x
            this.x += this.velocity_x;
        }
        if ((this.y + this.velocity_y) > this.canvas.height || (this.y + this.velocity_y) < 0){
            this.velocity_y = -this.velocity_y
            this.y += this.velocity_y;
        } else {
            // this.velocity_y = -this.velocity_y
            this.y += this.velocity_y;
        }

        this.particles = [];
        // this.clearTrail(c);
    }

    clearTrail(c){
        c.beginPath();
        c.arc(this.previous_x, this.this.previous_y, 35, 0, Math.PI * 2, false);
        c.fillStyle = 'white';
        c.fill();
        c.closePath();
    }
}

export default Wheel;