// setting up gameboard object
const gameBoardModule = (() => {
  const gameBoard = document.querySelectorAll(".box");
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return { gameBoard, WINNING_COMBINATIONS };
})();

// setting up display controller module
const displayController = (() => {
  // setting up controls
  const X_CLASS = "X";
  const CIRCLE_CLASS = "O";
  let endgame = false;

  //choosing turn
  let crossTurn = false;

  // Assigning X and O to players on click
  gameBoardModule.gameBoard.forEach((boxes) => {
    // Setting click event on box element
    boxes.addEventListener("click", () => {
      if (!endgame) {
        if (boxes.textContent == "") {
          // checking turn
          crossTurn = !crossTurn;
          const currentClass = crossTurn ? X_CLASS : CIRCLE_CLASS;

          // displaying on Board
          boxes.textContent = currentClass;

          // Checking win using function and currentClass variable
          boxes.classList.add(currentClass);
          if (checkWin(currentClass)) {
            console.log(`${currentClass} wins`);
            endgame = true;
          }
        }
      }
    });
  });

  // Checking winning conditions
  const checkWin = (currentClass) => {
    return gameBoardModule.WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return gameBoardModule.gameBoard[index].classList.contains(
          currentClass
        );
      });
    });
  };
})();

// setting up PlayerInput feild using factory
const player = (playerName, playerNumber, assignXO) => {
  const getPlayerName = () => playerName;
  return { getPlayerName, playerNumber, assignXO };
};
