import * as Util from './util';
import Particle from './particle';
import Player from './player';

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.wheel = [];
        this.bullets = [];
        this.player = [];
        // debugger;
        this.addWheel()
        this.addPlayer(this.canvas.width/2, this.canvas.height);
    }

    add(object){
        // debugger;
        if(object instanceof(Particle)){
            this.wheel.push(object);
        }else if (object instanceof(Player)){
            // debugger;
            this.player.push(object);
        }else{
            this.bullets.push(object);
        }
    }

    addWheel(){
        for (let i = 0; i < 400; i++) {
            const radius = (Math.random() * 2) + 1;
            this.add(new Particle(this.canvas.width / 2, this.canvas.height / 2, radius, Util.randomColor(colors)))
        }
    }

    addPlayer(x,y){
        this.add(new Player(this.canvas));
        // debugger;
    }

    draw(c){
        // this.wheel.forEach( (particle) => {
        //     particle.update(c);
        // });

        this.player[0].update(c);
    }
}

export default Game;

