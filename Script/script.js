// setting up gameboard object
const gameBoardModule = (() => {
  let gameBoard = [];
  return { gameBoard };
})();

// setting up display controller module
const displayController = (() => {
  //choosing turn
  let crossTurn = false;

  // Assigning X and O to players on click
  const box = document.querySelectorAll(".box");

  let index = 0;
  box.forEach((boxes) => {
    // Adding dataset to all box elements
    boxes.dataset.linkedId = index;
    index++;

    // Setting click event on box element
    boxes.addEventListener("click", () => {
      if (boxes.textContent == "") {
        crossTurn = !crossTurn;
        boxes.textContent = changeXO(crossTurn);
        gameBoardModule.gameBoard[boxes.dataset.linkedId] = boxes.textContent;
      }
    });
  });

  // Changing assign value i.e. X and O
  const changeXO = (crossTurn) => {
    let sign = "";
    if (crossTurn) {
      sign = "X";
    } else {
      sign = "O";
    }
    return sign;
  };
})();

// setting up PlayerInput feild using factory
const player = (playerName, playerNumber, assignXO) => {
  const getPlayerName = () => playerName;
  return { getPlayerName, playerNumber, assignXO };
};
