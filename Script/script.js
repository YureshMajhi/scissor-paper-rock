let circleTurn = false;
let gameOn = true;

const cells = document.querySelectorAll(".cell");
const reset = document.querySelector(".reset");

const result = document.querySelector(".result");

// converting cells nodelist to array
const cellsArr = Array.from(cells);

// clicking on gameboard
cells.forEach((cell) =>
  cell.addEventListener("click", function () {
    if (gameOn) {
      if (cell.textContent == "") {
        if (circleTurn) {
          cell.textContent = "O";
        } else {
          cell.textContent = "X";
        }
        circleTurn = !circleTurn;
      }
    }

    if (
      cellsArr[0].textContent == cellsArr[1].textContent &&
      cellsArr[0].textContent == cellsArr[2].textContent &&
      cellsArr[0].textContent != ""
    ) {
      result.textContent = `${cellsArr[0].textContent} wins`;
      gameOn = false;
    } else if (
      cellsArr[3].textContent == cellsArr[4].textContent &&
      cellsArr[3].textContent == cellsArr[5].textContent &&
      cellsArr[3].textContent != ""
    ) {
      result.textContent = `${cellsArr[3].textContent} wins`;
      gameOn = false;
    } else if (
      cellsArr[6].textContent == cellsArr[7].textContent &&
      cellsArr[6].textContent == cellsArr[8].textContent &&
      cellsArr[6].textContent != ""
    ) {
      result.textContent = `${cellsArr[6].textContent} wins`;
      gameOn = false;
    } else if (
      cellsArr[0].textContent == cellsArr[3].textContent &&
      cellsArr[0].textContent == cellsArr[6].textContent &&
      cellsArr[0].textContent != ""
    ) {
      result.textContent = `${cellsArr[0].textContent} wins`;
      gameOn = false;
    } else if (
      cellsArr[1].textContent == cellsArr[4].textContent &&
      cellsArr[1].textContent == cellsArr[7].textContent &&
      cellsArr[1].textContent != ""
    ) {
      result.textContent = `${cellsArr[1].textContent} wins`;
      gameOn = false;
    } else if (
      cellsArr[2].textContent == cellsArr[8].textContent &&
      cellsArr[2].textContent == cellsArr[5].textContent &&
      cellsArr[2].textContent != ""
    ) {
      result.textContent = `${cellsArr[2].textContent} wins`;
      gameOn = false;
    } else if (
      cellsArr[0].textContent == cellsArr[4].textContent &&
      cellsArr[0].textContent == cellsArr[8].textContent &&
      cellsArr[0].textContent != ""
    ) {
      result.textContent = `${cellsArr[0].textContent} wins`;
      gameOn = false;
    } else if (
      cellsArr[2].textContent == cellsArr[4].textContent &&
      cellsArr[2].textContent == cellsArr[6].textContent &&
      cellsArr[2].textContent != ""
    ) {
      result.textContent = `${cellsArr[2].textContent} wins`;
      gameOn = false;
    }
  })
);

// event on reset button clicked
reset.addEventListener("click", function () {
  cells.forEach((cell) => (cell.textContent = ""));
  circleTurn = false;
  gameOn = true;
  result.textContent = "";
});
