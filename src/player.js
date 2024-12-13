import Gameboard from "./gameboard";
import Ship from "./ship";

export default class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.gameboard = new Gameboard();
  }

  makeMove(coords, enemyGameboard) {
    enemyGameboard.receiveAttack(coords);
  }

  makeRandomMove(enemyGameboard) {
    let row, col;
    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (
      enemyGameboard.grid[row][col] ===
        "hit" /* if this cell was attacked - write 'hit' */ ||
      enemyGameboard.missedAttacks.some(
        ([mx, my]) => mx === row && my === col
      ) /* find at least 1 coords that is the same as the generated coords */
    );
    this.makeMove([row, col], enemyGameboard);
  }



  placeRandomShips() {
    const ship1 = new Ship(2); /* size of the ship in 2 cells */
    const ship2 = new Ship(3); /* size of the ship in 3 cells */
    const ship3 = new Ship(4); /* size of the ship in 4 cells */

    randomizeShipPlacement(this.gameboard, ship1);
    randomizeShipPlacement(this.gameboard, ship2);
    randomizeShipPlacement(this.gameboard, ship3);
  }
};
