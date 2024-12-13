const boardView = {
  /* show the bord */
  renderBoard(gameboard, element) {
    /* Clean board */
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    /* Mark cell 'hit' or 'miss' */

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = row;
        cell.dataset.col = col;

        const cellState = gameboard.grid[row][col];
        if (cellState === "hit") {
          cell.classList.add("hit");
        } else if (cellState == "miss") {
          cell.classList.add("miss");
        }
        element.appendChild(cell);
      }
    }
  },

  /* receive number of the bord where was 'click' */
  addBoardListeners(player, enemy, element) {
    element.addEventListener("click", function (e) {
      const row = parseInt(e.target.dataset.row);
      const col = parseInt(e.target.dataset.col);
      player.makeMove([row, col], enemy.gameboard);
      boardView.renderBoard(enemy.gameboard, element);
    });
  },
};
