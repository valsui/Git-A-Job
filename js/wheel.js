import * as Util from './util';

const canvas = document.querySelector('canvas');
// debugger;
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth/2,
    y: innerHeight/2
};

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
})

addEventListener('mousemove', event => {
    mouse.x = event.clientX,
    mouse.y = event.clientY
})

//create circle object
class Particle{

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.orig_x = x;
        this.orig_y = y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * 2*Math.PI;
        // this.radians = 0;
        this.velocity = 0.05;
        this.distanceFromCenter = Util.randomIntfromRange(50, 120);
        this.lastMouse = {
            x: x, 
            y: y
        }

    }

    draw(lastPoint){
        c.beginPath();
        // c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        // c.fillStyle = this.color;
        // c.fill();

        //draw with lines for smoother effect
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
    }

    update(){
        //Move points over time
        const lastPoint = {
            x: this.x,
            y: this.y
        }
        this.radians += this.velocity;

        //create drag effect to decrease the center of the circle to 20% of the delta 
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

        this.x = mouse.x + Math.cos(this.radians) * this.distanceFromCenter;

        this.y = mouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        // this.x = this.orig_x + Math.cos(this.radians) * this.distanceFromCenter;

        // this.y = this.orig_y + Math.sin(this.radians) * this.distanceFromCenter;


        this.draw(lastPoint);
    }
}


//implementation
let particles;
const init = () => {
    particles = []
    // debugger;
    for (let i = 0; i < 400; i++) {
        const radius = (Math.random() * 2) + 1;
        particles.push( new Particle(canvas.width/2, canvas.height/2, radius, Util.randomColor(colors)))
    }
    console.log(particles);
}

const animate = () => {
    requestAnimationFrame(animate);
    //creating a new white rectangle on top of the circles with opacity to create trail affect
    c.fillStyle = 'rgba(255, 255, 255, 0.05)';
    c.fillRect(0,0,canvas.width, canvas.height);
    
    c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    particles.forEach(particle => {
     particle.update();
    });
}

init();
animate();

