import Player from "./player.js";
import boardView from "../board-view.js";

const player = new Player();
const computer = new Player(true);

const playerBoardElement = document.getElementById("player-board");
const computerBoardElement = document.getElementById("computer-board");


/* 1)  The player and the computer place their ships on their boards.
    2) Elements to display the boards (HTML elements) are activated.
    3) The boards are rendered on the screen in the appropriate DOM elements using 'boardView'.
    4) Click handlers(addBoardListeners) are added so that the player can interact with the computer board (attack cells). */


// Position of the ship (for now)!
player.gameboard.placeShip([[0, 0], [0, 1]], new Ship(2));
computer.gameboard.placeShip([[2, 2], [2, 3], [2, 4]], new Ship(3));


// Show the playground
/* boardView.renderBoard(player.gameboard, playerBoardElement);
boardView.renderBoard(computer.gameboard, computerBoardElement);
 */
// Take the value from the cell where computer or player attacked.
/* boardView.addBoardListeners(player, computer, computerBoardElement); */









document.getElementById("start-game").addEventListener("click", function () {
  // Случайно размещаем корабли на досках игроков
  player.placeRandomShips();
  computer.placeRandomShips();

  // Отображаем доски
  boardView.renderBoard(player.gameboard, playerBoardElement);
  boardView.renderBoard(computer.gameboard, computerBoardElement);

  // Добавляем обработчики для кликов по доске
  boardView.addBoardListeners(player, computer, computerBoardElement);
});