// Setting up the Gameboard Module
const gameBoardModule = (() => {
  let gameBoard = ["X"];
  return { gameBoard };
})();

// Setting up the displayControllerModule
const displayControllerModule = (() => {
  let testF = () => {
    console.log("this is a test");
  };
  return { testF };
})();

// Setting up the player factory function
const createPlayer = (playerName, playerNumber, assignXO) => {
  const getPlayerName = () => playerName;
  return { getPlayerName, playerNumber, assignXO };
};

// setting up the render for array on screen
const renderArrayToScreenModule = (() => {
  const box = document.querySelectorAll(".box");
  return {};
})();
