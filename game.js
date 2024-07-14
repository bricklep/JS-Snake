import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";

let lasRenderTime = 0;
const gameBoard = document.getElementById('game-board');


function main(curentTime) {
    //game loop
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (curentTime - lasRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    console.log('render');
    lasRenderTime = curentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
    
}