import * as Util from './util';

// const canvas = document.querySelector('canvas');
// debugger;
// const c = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;

// addEventListener('resize', () => {
//     canvas.width = innerWidth;
//     canvas.height = innerHeight;

//     init();
// })



// const onMouseUp = (event) => {
//     removeEventListener('mousemove', onMouseMove);
//     removeEventListener('mouseup', onMouseUp);
// }

// addEventListener('mousemove', event => {
//     mouse.x = event.clientX,
//     mouse.y = event.clientY
// })


//create circle object
class Particle{

    constructor(x, y, radius, color, gravity, center, dist) {
        this.x = x;
        this.y = y;
        this.orig_x = x;
        this.orig_y = y;
        this.center_x = center.x;
        this.center_y = center.y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * 2*Math.PI;
        this.gravity = gravity;
        this.velocity = {
            x: Math.random()*10 - 5,
            y: Math.random()*10 - 5
        }

        this.distanceFromCenter = dist;

        // const dist = [Util.randomIntfromRange(90, 110), Util.randomIntfromRange(40, 60), Util.randomIntfromRange(10, 30), Util.randomIntfromRange(70, 90)];
        // this.distanceFromCenter = dist[Util.randomIntfromRange(0, dist.length -1)];

        this.lastMouse = {
            x: x, 
            y: y
        }

        this.mouse = {
            x: innerWidth / 2,
            y: innerHeight / 2
        };

        this.explodingParticle = {
            explode_x: this.x,
            explode_y: this.y
        }
        // debugger;
        // addEventListener('mousedown', event => {
        //     this.mouse.x = event.clientX,
        //     this.mouse.y = event.clientY
        //     addEventListener('mouseemove', this.onMouseMove);
        // })

        // this.onMouseMove = this.onMouseMove.bind(this);

    }

    draw(c, lastPoint){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();

        //draw with lines for smoother effect
        // c.strokeStyle = this.color;
        // c.lineWidth = this.radius;
        // c.moveTo(lastPoint.x, lastPoint.y);
        // c.lineTo(this.x, this.y);
        // c.stroke();
        c.closePath();
    }

    explodeParticle(c, lastPoint){
        // debugger;
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        this.explodingParticle.explode_x = lastPoint.x * this.velocity.x;
        this.explodingParticle.explode_y = lastPoint.y * this.velocity.y;
        c.lineTo(this.explodingParticle.explode_x,this.explodingParticle.explode_y);
        c.stroke();
        c.closePath();
        // debugger;
    }

    update(c){
        //Move points over time
        this.radians += this.gravity;

        const lastPoint = {
            x: this.x,
            y: this.y
        }
        //create drag effect to decrease the center of the circle to 20% of the delta 
        // this.lastMouse.x += (this.mouse.x - this.lastMouse.x) * 0.05;
        // this.lastMouse.y += (this.mouse.y - this.lastMouse.y) * 0.05;

        // this.x = this.mouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        // this.y = this.mouse.y + Math.sin(this.radians) * this.distanceFromCenter;

        this.x = this.center_x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.center_y + Math.sin(this.radians) * this.distanceFromCenter;

        this.draw(c, lastPoint);
    }

    // handleMouse(){
    //     addEventListener('mousedown', event => {
    //         this.mouse.x = event.clientX,
    //         this.mouse.y = event.clientY
    //         addEventListener('mouseemove', this.onMouseMove);
    //     })
    // }

    // onMouseMove(event){
    //     this.mouse.x = event.clientX,
    //     this.mouse.y = event.clientY
    // }
}

export default Particle;


