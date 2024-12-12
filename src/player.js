import Gameboard from "./gameboard";

export default class Player {
  constructor(isComputer = false) {
    this.isComputer = isComputer;
    this.gameboard = new Gameboard();
  }

  makeMove(coords, enemyGameboard) {
    enemyGameboard.receiveAttack(coords);
  }

  makeRandomMove(enemyGameboard) {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (
      enemyGameboard.grid[x][y] === "hit" ||
      enemyGameboard.missedAttacks.some(([mx, my]) => mx === x && my === y)
    );
    this.makeMove([x, y], enemyGameboard);
  }
}
