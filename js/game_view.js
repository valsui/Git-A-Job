import Game from './game';
import Fractal from './fractal';

class GameView {
    constructor(game, context, canvas, treeCtx){
        this.context = context;
        this.game = game;
        this.canvas = canvas;
        this.player = this.game.addPlayer();
        // setInterval(this.animate.bind(this), 1000);
        this.background = this.backgroundGradient();
        this.treeCtx = treeCtx;
    }
    
    start(){
        // this.spaceToFire();
        this.animate();
    }
    
    backgroundGradient(){
        let grd;
        // Create gradient
        grd = this.context.createLinearGradient(0,this.canvas.height, 500, 0);
        
        // Add colors
        grd.addColorStop(0, "#CCFFE5");
        grd.addColorStop(1, '#FFF2E5');
        
        return grd;
    }
    
    animate(){
        // console.log(1);
        // requestAnimationFrame(this.animate.bind(this));
        //creating a new white rectangle on top of the circles with opacity to create trail affect
        
        // Fill with gradient
        this.context.fillStyle = this.background;
        // ctx.fillRect(0, 0, 300.000, 300.000);
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if(!this.game.won){
            setTimeout(() => {
                requestAnimationFrame(this.animate.bind(this));
            }, 50)
        }else{
            
        }
        this.game.onBulletCollision(this.context);
        this.game.draw(this.context);
    }
}

export default GameView;