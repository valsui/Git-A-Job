import * as Util from './util';
import Particle from './particle';
import Player from './player';
import Wheel from './wheel';
import Bullet from './bullet';

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.wheel = [];
        this.bullets = [];
        this.player = [];
        this.addWheels(4);
        // this.addPlayer();
    }

    add(object){
        if(object instanceof(Wheel)){
            this.wheel.push(object);
        }else if (object instanceof(Player)){
            // debugger;
            this.player.push(object);
        }else{
            this.bullets.push(object);
            // debugger;
        }
    }

    addWheels(num){
        for(let i = 0; i < num; i++){
            const center = {
                x: Util.randomIntfromRange(0, this.canvas.width),
                y: Util.randomIntfromRange(0, this.canvas.height)
            }
    
            this.add(new Wheel(center.x, center.y, colors, this.canvas));
        }
    }

    onBulletCollision(c){
        this.wheel.forEach( wheel => {
            const wheelObj = {
                x: wheel.x + wheel.velocity_x,
                y: wheel.y + wheel.velocity_y,
                radius: 110
            }
            this.bullets.forEach( bullet => {
                const bulletObj = {
                    x: bullet.x,
                    y: bullet.y,
                    radius: Bullet.RADIUS
                }

                if(Util.checkCollision(wheelObj, bulletObj)){
                    console.log('explode');
                    // debugger;
                    console.log(wheel instanceof Wheel);
                    wheel.explode(c)

                }
            })
        })
    }

    addPlayer(){
        const player = new Player(this.canvas, this);
        this.add(player);
        return player;
    }

    draw(c){
        this.wheel.forEach(wheel => wheel.update(c));
        this.player[0].update(c);
        this.bullets.forEach(bullet => bullet.update(c));
    }
}

export default Game;

