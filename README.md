# Git a Job

## Background and Overview
This project is meant to be a small interactive game to make the process of applying for jobs a little more entertaining. Inspired by theme of asteroids, this project will be a game in which the player needs to mark a moving target. The twist is that the target will trigger an ajax call to Github's job's api and will open up a tab to a job application for a near by developer position. 

## Functionality and MVP
- [ ] Users will be able to aim the trigger which is positioned at the bottom of the page on mouseover
- [ ] Users will be able to shoot on space keypress
- [ ] Users will be able to reset
- [ ] Users will be linked to a new job posting
In addition:
- [ ] An about section on how to play

## Wireframe
This will be a single page app

![GitAJob](https://i.imgur.com/iTBITzU.png)

## Architecture and Technology
This project will be implemented with the following technologies:

* Vanilla JavaScript for overall structure and game logic
* HTML5 Canvas for DOM manipulation and rendering
* Node.js backend
* Express.js and Axios for external API calls

`wheel.js` - handles target
`util.js` - random utility functions
`board.js` - rerenders DOM
`player.js` - handles the shooter
`app.js` - handles express fetch API calls

## Timeline
### Weekend
* successfully made API call to Github's jobs API
* rendered spinning circle

### Day 1
- [ ] have target moving
- [ ] implement the player class

### Day 2
- [ ] continue player class
- [ ] collision detection

### Day 3
- [ ] work on reseting 
- [ ] about modal

### Day 4
- [ ] style and fix many inevitable bugs



