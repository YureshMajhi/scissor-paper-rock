// setting up gameboard object
const gameBoardModule = (() => {
  let gameBoard = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  return { gameBoard };
})();

// setting up display controller module
const displayController = (() => {
  let testF = () => console.log("this is a test to check the render option");
  return { testF };
})();

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
