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
  // setting event on startbtn click
  document.querySelector("#start-btn").addEventListener("click", () => {
    document.querySelector("#form").style = "display: none";
  });

  // setting event on restartbtn click
  document.querySelector("#restart").addEventListener("click", () => {
    document.querySelector("#form").style = "display: block;";
    gameBoardModule.gameBoard.forEach((boxes) => {
      boxes.textContent = "";
      boxes.classList.remove("X");
      boxes.classList.remove("O");
      endgame = false;
      crossTurn = false;
      result.textContent = "";
    });
  });

  const result = document.querySelector("#result");
  // setting up controls
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
          const currentClass = crossTurn ? "X" : "O";

          // displaying on Board
          boxes.textContent = currentClass;

          // Checking win using function and currentClass variable
          boxes.classList.add(currentClass);
          if (checkWin(currentClass)) {
            // Setting up Players
            const p1 = player(document.querySelector("#p1").value);
            const p2 = player(document.querySelector("#p2").value);
            if (crossTurn) {
              result.textContent = `${p1.playerName} wins`;
            } else {
              result.textContent = `${p2.playerName} wins`;
            }
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
const player = (playerName) => {
  return { playerName };
};
