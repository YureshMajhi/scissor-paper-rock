let circleTurn = false;

const cells = document.querySelectorAll(".cell");
const reset = document.querySelector(".reset");

// converting cells nodelist to array
const cellsArr = Array.from(cells);

// clicking on gameboard
cells.forEach((cell) =>
  cell.addEventListener("click", function () {
    if (cell.textContent == "") {
      if (circleTurn) {
        cell.textContent = "O";
      } else {
        cell.textContent = "X";
      }
      circleTurn = !circleTurn;
    }
  })
);

// event on reset button clicked
reset.addEventListener("click", function () {
  cells.forEach((cell) => (cell.textContent = ""));
  circleTurn = false;
});
