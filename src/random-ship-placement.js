

// Function for random ship placement
function randomizeShipPlacement(gameboard, ship) {
  const directions = ["horizontal", "vertical"];
  let placed = false; 

    while (!placed) {
        // Generation of random coordinates and direction
      const startRow = Math.floor(Math.random() * 10); 
      const startCol = Math.floor(Math.random() * 10); 
      const direction =
        directions[Math.floor(Math.random() * directions.length)]; /* where to place a ship? horisontal or vertical */

      // Can we place a ship of the bord?
      if (canPlaceShip(gameboard, ship, startRow, startCol, direction)) {
        placeShipAt(gameboard, ship, startRow, startCol, direction);
        placed = true;
      }
    }
}




// Проверка, можно ли разместить корабль
function canPlaceShip(gameboard, ship, startRow, startCol, direction) {
  /* 1) If the ship is placed within the field (not beyond the boundaries?).
2) If there are no other ships in the cells that the ship will occupy ( they are empty). */

  const shipLength = ship.length;

  if (direction === "horizontal") {
    if (startCol + shipLength > 10) return false;
    for (let i = 0; i < shipLength; i++) {
      if (gameboard.grid[startRow][startCol + i] !== null) {
        return false;
      }
    }
  } else {
    // вертикально
    if (startRow + shipLength > 10) return false;
    for (let i = 0; i < shipLength; i++) {
      if (gameboard.grid[startRow + i][startCol] !== null) {
        return false;
      }
    }
  }

  return true;
}




//Place a ship of the desc if ' canPlaceShip ' returns true!!!!
function placeShipAt(gameboard, ship, startRow, startCol, direction) {
  const shipLength = ship.length;
  if (direction === "horizontal") {
    for (let i = 0; i < shipLength; i++) {
      gameboard.grid[startRow][startCol + i] = ship;
    }
  } else {
    // вертикально
    for (let i = 0; i < shipLength; i++) {
      gameboard.grid[startRow + i][startCol] = ship;
    }
  }
}
