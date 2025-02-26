import { randomGridPosition } from './grid.js';
import { onSnake, expandSnake } from './snake.js';

let food = randomFoodPosition();
const EXPANSION_RATE = 10;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = randomFoodPosition();
    }
    
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function randomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}

randomGridPosition()