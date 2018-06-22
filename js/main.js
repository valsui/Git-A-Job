import Game from './game';
import GameView from './game_view';
import axios from 'axios';
import Fractal from './fractal';
// import { fetchJob } from './index';
export let jobs;

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('main-canvas');
    const c = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    })

    //initilize tree canvas 
    let treeCanvas = document.createElement("canvas");

    let tempCtx = treeCanvas.getContext('2d');
    document.getElementById('treediv').appendChild(treeCanvas);

    tempCtx.canvas.width = 500;
    tempCtx.canvas.height = 400;

    document.getElementById('start').addEventListener('click', (e) => {
        e.preventDefault();
        let startModal = document.querySelector('.start-modal');
        startModal.style.display = 'none';
        view.start();
    });

    document.getElementById('close-start').addEventListener('click', (e) => {
        e.preventDefault();
        let startModal = document.querySelector('.start-modal');
        startModal.style.display = 'none';

    });

    //reload window if user tries to exit out of game
    document.getElementById('close-end').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.reload();

    });
    
    document.getElementById('instructions').addEventListener('click', (e) => {
        e.preventDefault();
        let startModal = document.querySelector('.start-modal');
        startModal.style.display = 'flex';
    });
    
    //jobs array
    axios.get('/jobs')
        .then((response) => {
            jobs = response.data;
        })
        .catch((err) => console.log(err));
    
    
    const game = new Game(canvas, c);
    const view = new GameView(game, c, canvas, tempCtx);

    const tree = new Fractal();
    tree.draw(tempCtx);

    // document.getElementById('start').addEventListener('click', (e) => {
    //     e.preventDefault();
        
    // })
})