const rows = 10;
const cols = 10;
const squareSize = 50;

const gameBoardContainer = document.querySelector('person-gameboard');

for (let i = 0; i < cols; i++) {
	for (let j = 0; j < rows; j++) {
		const square = document.createElement("div");
		gameBoardContainer.appendChild(square);

		square.id = 's' + j + i;

		const topPosition = j * squareSize;
		const leftPosition = i * squareSize;

		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}





/*https://codesandbox.io/p/sandbox/learnteachcode-battleship-javascript-gd03h0?file=%2Fbattleship.js%3A64%2C6-64%2C114*/