# Git a Job

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

![GitAJob](https://i.imgur.com/D0dUqck.png)
