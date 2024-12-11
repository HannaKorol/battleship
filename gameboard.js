import ship from "./ship.js"

/*Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.*/

export default class gameBoard {
	constructor(ship)
	this.ship = [];
}

receiveAttack(/*takes a pair of coordinates*/) {
	/* determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.*/
}

missingAttachs(){}
/*Gameboards should keep track of missed attacks so they can display them properly.*/

sunkShip(){}
/*Gameboards should be able to report whether or not all of their ships have been sunk.*/

