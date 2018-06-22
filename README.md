# Git a Job
[Live Link](https://git-a-job.herokuapp.com/)

## Background and Overview
This project is meant to be a small interactive game to make the process of applying for jobs a little more entertaining. Inspired by theme of bubble shooter, this project will be a game in which the player needs to shoot moving targets. The twist is that the target will trigger an api call to Github's job's api and will open up a tab to a job application for a near by developer position. 

The technologies used for this game were: node.js, Express.js, javascript.
The graphics were drawn and animated using HTML5 Canvas.  

It also features a fractal tree for fun.
## How to Play
The game begins with a button click. The player aims with their at the moving objects with a canon. They can click or use the space bar to fire. Once all the moving objects are elimated, the player is rewarded with a job posting in the Bay Area.

## Features
* Canon aiming with mouse movement
* Click to shoot or spacebar to shoot bubbles
* Animated moving objects that rotated and bounced 
* A Fractal tree
* Current job postings
* Sound Effects for fun

Although a rather simple concept, this game relied heavily the use of polar coordinates and trigonometry for the animations. Moreover, the Github Jobs API call required a server in order to remedy CORS errors. I faced many challenges with Canvas, particularly with requestAnimationFrame rendering too quickly.

With time, I would have liked to render the explosions as confetti. I also would have really liked to animate my fractal tree. However, I believe that could be a separate project.

### Moving the Player
In order to correctly render the player to move with the direction of the mouse, I relied on the polar coordinate system. The canvas axis is translated based on the position of the player and the angle between the player and the mouse was calculated with using arc tangent. Furthermore, since canvas y-axis is positive going down, the calculated angle needed to be multiplied by a scalar of -1 to properly render properly

```javascript
        addEventListener('mousemove', (event) => {
            this.mousePos.x = event.clientX;
            this.mousePos.y = event.clientY;
            this.angle = Util.mouseangle(this.mousePos, this.playerPos);
            this.x = (this.radius + 100) * Math.cos(this.angle) + this.base_x;
            this.y = (this.radius + 100) * Math.sin(this.angle) + this.base_y;

        })
```


![GitAJob](https://i.imgur.com/D0dUqck.png)
