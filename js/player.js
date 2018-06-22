import Particle from './particle';
import Bullet from './bullet';
import * as Util from './util';

const bulletColors = ['#FF9933', '#33FF99', '#FF3399', '#3399FF', '#B266FF','#FFFF00'];
class Player{
    constructor(canvas, game){
        this.base_x = canvas.width/2;
        this.base_y = canvas.height;
        this.radius = 75;
        this.angle = 3*(Math.PI)/2;
        this.x = this.base_x;
        this.y = this.base_y;
        this.mousePos = {
            x: this.base_x,
            y: this.base_y
        }
        this.playerPos = {
            x: this.base_x,
            y: this.base_y
        }
        this.game = game;
        
        addEventListener('mousemove', (event) => {
            this.mousePos.x = event.clientX;
            this.mousePos.y = event.clientY;
            this.angle = Util.mouseangle(this.mousePos, this.playerPos);
            this.x = (this.radius + 100) * Math.cos(this.angle) + this.base_x;
            this.y = (this.radius + 100) * Math.sin(this.angle) + this.base_y;

        })

        this.spaceToFire();
    }

    fireBullet() {
        const currentPos = {
            x: this.x,
            y: this.y
        }
        const direction = Util.getDirection(this.playerPos, currentPos)
        const bullet = new Bullet(this.x, this.y, Util.randomColor(bulletColors), direction);
        this.game.add(bullet);
    }

    spaceToFire() {
        let self = this;
        window.addEventListener('keypress', (e) => {
            if (e.keyCode === 32) {
                self.fireBullet();
            }
        })
        window.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('main-canvas').addEventListener('click', (k) => {
                k.preventDefault();
                self.fireBullet();
            })
        })
    }

    
    draw(c){
        c.save();
        c.beginPath();
        c.arc(this.base_x, this.base_y, this.radius, 0, 2*Math.PI, true);
        c.stroke();
        c.fillStyle = '#CCE5FF';
        c.fill()

        // let gradient1 = c.createRadialGradient(this.base_x, this.base_y, this.radius, this.base_x, this.base_y, 5);
        // gradient1.addColorStop(1, '#CCE5FF');
        // gradient1.addColorStop(0, '#99CCFF');
        // c.fillStyle = gradient;
        c.beginPath()
        c.lineWidth='30';
        c.strokeStyle = '#99CCFF';
        c.moveTo(this.base_x, this.base_y);
        c.lineTo(this.x, this.y);
        c.stroke();
    }

    update(c) {
        //Move points over time
        this.draw(c);
    }


}

export default Player;