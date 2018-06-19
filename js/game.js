import * as Util from './util';
import Particle from './particle';
import Player from './player';
import Wheel from './wheel';

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.wheel = [];
        this.bullets = [];
        this.player = [];
        // debugger;
        this.addWheels(4);
        this.addPlayer(this.canvas.width/2, this.canvas.height);
    }

    add(object){
        // debugger;
        if(object instanceof(Wheel)){
            this.wheel.push(object);
            // debugger;
        }else if (object instanceof(Player)){
            // debugger;
            this.player.push(object);
        }else{
            this.bullets.push(object);
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

        // for (let i = 0; i < 40; i++) {
        //     const radius = (Math.random() * 2) + 1;
        //     this.add(new Particle(this.canvas.width / 2, this.canvas.height / 2, radius, Util.randomColor(colors), center))
        //     // this.add(new Particle(Util.randomIntfromRange(1, this.canvas.width), Util.randomIntfromRange(1, this.canvas.height), radius, Util.randomColor(colors)))
        // }
    }

    addPlayer(x,y){
        this.add(new Player(this.canvas));
        // debugger;
    }

    draw(c){
        // this.wheel.forEach( (particle) => {
        //     particle.update(c);
        // });
        this.wheel.forEach(wheel => wheel.update(c));

        this.player[0].update(c);
    }
}

export default Game;

