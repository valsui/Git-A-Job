import Game from './game';
import GameView from './game_view';
import axios from 'axios';
// import { fetchJob } from './index';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    })

    // const tree = new Fractal(canvas);
    // tree.draw(c);

    document.getElementById('start').addEventListener('click', (e) => {
        e.preventDefault();
        let startModal = document.querySelector('.start-modal');
        startModal.style.display = 'none';
    });

    document.getElementById('close').addEventListener('click', (e) => {
        e.preventDefault();
        let startModal = document.querySelector('.start-modal');
        startModal.style.display = 'none';
    });

    document.getElementById('instructions').addEventListener('click', (e) => {
        e.preventDefault();
        let startModal = document.querySelector('.start-modal');
        startModal.style.display = 'flex';
    });
    
    const game = new Game(canvas);
    const view = new GameView(game, c, canvas);
    view.start();
})