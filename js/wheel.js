import Particle from './particle';
import * as Util from './util';

class Wheel {
    constructor(x, y, colors, canvas){
        this.x = x;
        this.y = y;
        this.previous_x = x;
        this.previous_y = y;
        this.velocity_x = Util.randomIntfromRange(8,15);
        this.velocity_y = Util.randomIntfromRange(8,15);
        this.canvas = canvas;
        this.colors = colors;
        this.particles = [];
        this.lastParticles = [];
    }

    update(c){
        const center = {
            x: this.x,
            y: this.y
        }

        const velocity = {
            vel_x: 0.5,
            vel_y: 0.5
        }
        for (let i = 0; i < 50; i++) {
            const radius = (Math.random() * 5) + 4;
            this.particles.push(new Particle(this.x, this.y, radius, Util.randomColor(this.colors), 0.5, center))
        }

        this.lastParticles = this.particles.slice(0);
        // debugger;
        this.particles.forEach((p) => {
            p.update(c);
        })

        //check for wall collision
        if ((this.x + 5 * this.velocity_x) > this.canvas.width || (this.x + 5 *this.velocity_x) < 0){
            this.velocity_x = -this.velocity_x
            this.x += this.velocity_x;
        } else {
            // this.velocity_x = -this.velocity_x
            this.avoidCanon();
            this.x += this.velocity_x;
        }
        if ((this.y + 5 *this.velocity_y) > this.canvas.height || (this.y + 5 *this.velocity_y) < 0){
            this.velocity_y = -this.velocity_y
            this.y += this.velocity_y;
        } else {
            // this.velocity_y = -this.velocity_y
            this.avoidCanon();
            this.y += this.velocity_y;
        }

        //check for collision with cannon
        
        this.particles = [];
        // this.clearTrail(c);
    }

    explode(c){
        // debugger;
        this.lastParticles.forEach(particle => {
            const lastPoint = {
                x: particle.x,
                y: particle.y
            };
            particle.explodeParticle(c, lastPoint);
        });
    }

    avoidCanon(){
        const playerCenter = {
            x: this.canvas.width/2,
            y: this.canvas.height,
            radius: 185
        };

        const movingObj = {
            x: this.x + this.velocity_x,
            y: this.y + this.velocity_y,
            radius: 110
        }

        if (Util.checkCollision(playerCenter, movingObj)){
            this.velocity_x = -this.velocity_x;
            this.velocity_y = -this.velocity_y;
        }
    }

}

export default Wheel;