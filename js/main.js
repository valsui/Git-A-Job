import Game from './game';
import GameView from './game_view';
import axios from 'axios';
// import { fetchJob } from './index';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    // axios.get(`/jobs`)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((err) => console.log(err));

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    })
    
    const game = new Game(canvas);
    const view = new GameView(game, c, canvas);
    view.start();
})