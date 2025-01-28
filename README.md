# Simon's Game Website Project

## Overview
This project is a web-based implementation of the classic Simon's Game, a memory game where players must repeat a sequence of button presses in the correct order. The game increases in difficulty with each successful round, and the player must start over if they make a mistake.

## Features
- Four colored buttons (red, blue, green, yellow)
- Randomly generated sequences of button presses
- Level counter that increases with each successful round
- Game over and restart functionality

## Technologies Used
- HTML
- CSS
- JavaScript
- jQuery

## Setup
1. Clone the repository to your local machine.
2. Open the `index.html` file in your preferred web browser.

## How to Play
1. Press any key to start the game.
2. Watch the sequence of button presses shown by the game.
3. Repeat the sequence by clicking the buttons in the same order.
4. If you successfully repeat the sequence, the game will add another button press to the sequence and increase the level counter.
5. If you make a mistake, the game will display a "Game Over" message and you can restart by pressing any key.

## Code Explanation

### HTML
The HTML file contains the structure of the game, including the buttons and the level title.

### CSS
The CSS file styles the buttons and the game layout.

### JavaScript
The JavaScript file contains the game logic, including:
- Generating random sequences (`nextSequence` function)
- Handling user input and checking it against the game sequence (`userClickedPattern` array)
- Animating button presses (`setAnimation` function)
- Displaying the current level and handling game over scenarios

### jQuery
jQuery is used to simplify DOM manipulation and event handling.

## Example Code
```javascript
var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    ++level;
    $("#level-title").text("Level " + level);
    setAnimation(randomChosenColor);
}

function setAnimation(color) {
    $("#" + color).fadeOut(100).fadeIn(100);
}