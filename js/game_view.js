import Game from './game';

class GameView {
    constructor(game, context, canvas){
        this.context = context;
        this.game = game;
        this.canvas = canvas;
        this.player = this.game.addPlayer();
        // this.animate();
        // setInterval(this.animate.bind(this), 1000);
        // debugger;
        // this.spaceToFire = this.spaceToFire.bind(this);
    }

    start(){
        // this.spaceToFire();
        this.animate();
    }

    // spaceToFire(){
    //     addEventListener('keydown', (e) =>{
    //         if(e.keyCode === '32'){
    //             this.player.fireBullet();
    //         }
    //     })
    // }

    animate(){
        // console.log(1);
        requestAnimationFrame(this.animate.bind(this));
        //creating a new white rectangle on top of the circles with opacity to create trail affect
        // this.context.fillStyle = 'rgba(255, 255, 255, 0.05)';
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.game.onBulletCollision(this.context);

        this.game.draw(this.context);
    }
}

export default GameView;