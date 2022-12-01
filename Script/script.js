// setting up gameboard object
const gameBoardModule = (() => {
  let gameBoard = [];
  return { gameBoard };
})();

// setting up display controller module
const displayController = (() => {})();

const box = document.querySelectorAll(".box");

// setting up PlayerInput feild using factory
const player = (playerName, playerNumber, assignXO) => {
  const getPlayerName = () => playerName;
  return { getPlayerName, playerNumber, assignXO };
};

// setting up rendering module
const renderGame = (() => {
  const box = document.querySelectorAll(".box");
  for (let i = 0; i < gameBoardModule.gameBoard.length; i++) {
    box[i].textContent = gameBoardModule.gameBoard[i];
  }
  return {};
})();
