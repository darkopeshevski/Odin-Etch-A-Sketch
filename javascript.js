
const mamaDiv = document.querySelector(".mama");
const inputElement = document.querySelector(".fix-grid");
const rowsContainer = document.createElement("div");
const resetGridButton = document.querySelector(".reset-btn");

rowsContainer.className = 'rows-container';
mamaDiv.appendChild(rowsContainer);

// In this constant and event bellow, we capture what is written in the input field element, and when pressing "Enter", we are firing off some functions.
let inputValue;

inputElement.addEventListener('keydown', function(event) {

  if (event.key === "Enter") {
    inputValue = inputElement.value;
    inputValue = parseInt(inputValue);

    deleteGrid();
    createGrid(inputValue, inputValue);
    colorTheSquares();
  }
});

// Creating the starting GRID here.
createGrid(16, 16);

// Color the squares of the starting grid.
colorTheSquares();


function createGrid(xSquares, ySquares) {
  const totalWidth = 500;
  let squareSize = totalWidth / xSquares;

  for (let i = xSquares; i > 0; i--) {
    const row = document.createElement('div');
    row.className = 'row';
    rowsContainer.appendChild(row);
  
    for (let b = ySquares; b > 0; b--) {
      const cell = document.createElement('div');
      cell.style.width = squareSize + 'px';
      cell.style.height = squareSize + 'px';
      cell.className = 'square';
      row.appendChild(cell);
    }
  };
}

// Deleting the grid function.
function deleteGrid() {
  const allDivs = document.querySelectorAll('.row');
  allDivs.forEach(div => {
    div.remove();
  });
};


// Function that colors the squares based on mouse events.
function colorTheSquares() {

  const allSquares = document.querySelectorAll('.square');
  let flag = false;

  allSquares.forEach(square => {

    square.addEventListener('mousedown', function() {
      square.style.backgroundColor = 'black';
      flag = true;
    });

    square.addEventListener('mouseover', function() {
      if (flag === true) {
        square.style.backgroundColor = 'black';
      }
    });

    square.addEventListener('mouseup', function() {
      flag = false;
    });

  });
};


