import Game from './game';
import GameView from './game_view';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;
    // debugger;
    addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    })

    const game = new Game(canvas);
    const view = new GameView(game, c, canvas);
    view.start();
})