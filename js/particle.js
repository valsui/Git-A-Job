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

    constructor(x, y, radius, color, gravity, center, explode) {
        this.x = x;
        this.y = y;
        this.orig_x = x;
        this.orig_y = y;
        this.center_x = center.x;
        this.center_y = center.y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * 2*Math.PI;
        // this.radians = 0;
        this.gravity = gravity;
        this.velocity = {
            x: Math.random()*10 - 5,
            y: Math.random()*10 - 5
        }
        this.distanceFromCenter = Util.randomIntfromRange(90, 110);
        this.explode = false;
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

    draw(c){
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

        //create drag effect to decrease the center of the circle to 20% of the delta 
        // this.lastMouse.x += (this.mouse.x - this.lastMouse.x) * 0.05;
        // this.lastMouse.y += (this.mouse.y - this.lastMouse.y) * 0.05;

        // this.x = this.mouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        // this.y = this.mouse.y + Math.sin(this.radians) * this.distanceFromCenter;

        this.x = this.center_x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.center_y + Math.sin(this.radians) * this.distanceFromCenter;

        this.draw(c);
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


//implementation
// let particles;
// const init = () => {
//     particles = []
//     // debugger;
//     for (let i = 0; i < 400; i++) {
//         const radius = (Math.random() * 2) + 1;
//         particles.push( new Particle(canvas.width/2, canvas.height/2, radius, Util.randomColor(colors)))
//     }
//     console.log(particles);
// }

// const animate = () => {
//     requestAnimationFrame(animate);
//     //creating a new white rectangle on top of the circles with opacity to create trail affect
//     c.fillStyle = 'rgba(255, 255, 255, 0.05)';
//     c.fillRect(0,0,canvas.width, canvas.height);
    
//     c.fillText('', mouse.x, mouse.y)
//     particles.forEach(particle => {
//      particle.update();
//     });
// }

// init();
// animate();

