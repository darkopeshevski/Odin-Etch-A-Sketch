
const mamaDiv = document.querySelector(".mama");
const inputElement = document.querySelector(".fix-grid");
const rowsContainer = document.createElement("div");
const resetGridButton = document.querySelector(".reset-btn");
const gridDropdown = document.querySelector(".choose-size");


let inputValue = 0; // A constant to hold the input value.

rowsContainer.className = 'rows-container';
mamaDiv.appendChild(rowsContainer);

// Creating the starting GRID here.
createGrid(16, 16, 500);

// Color the squares of the starting grid.
colorTheSquares();

// Functionality where a dropdown field is used to select the size of the grid.
gridDropdown.addEventListener('change', function() {

  const dropdownSelection = gridDropdown.value;

  if (dropdownSelection === 'small') {
    
    deleteGrid()
    createGrid(16, 16, 250);
    colorTheSquares();
  }
  else if (dropdownSelection === 'medium') {
    deleteGrid()
    createGrid(16, 16, 350);
    colorTheSquares();
  }
  else {
    deleteGrid()
    createGrid(16, 16, 500);
    colorTheSquares();
  }

});


// Reset the grid and delete the colored squares.
resetGridButton.addEventListener('click', function() {
  deleteGrid();

  if (inputValue === 0) {
    createGrid(16, 16, 500);
    colorTheSquares();
  }
  else {
    createGrid(inputValue, inputValue, 500);
    colorTheSquares();
  }
});

// In the event bellow, we capture what is written in the input field element, and when pressing "Enter", we are firing off some functions.

inputElement.addEventListener('keydown', function(event) {

  if (event.key === "Enter") {
    inputValue = parseInt(inputElement.value);
    
    if (inputValue >= 100) {
      alert('Please insert a number less than 100!');
      inputValue = 0;
      inputElement.value = 0;
    }
    else {
      deleteGrid();
      createGrid(inputValue, inputValue, 500);
      colorTheSquares();
    }
  }
});


// Function that creates the grid.
function createGrid(xSquares, ySquares, width) {
  
  let squareSize = width / xSquares;

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
      let red = generateRandomNum();
      let blue = generateRandomNum();
      let green = generateRandomNum();
      square.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
      flag = true;
    });

    square.addEventListener('mouseover', function() {
      if (flag === true) {
        let red = generateRandomNum();
        let blue = generateRandomNum();
        let green = generateRandomNum();
        square.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
      }
    });

    square.addEventListener('mouseup', function() {
      flag = false;
    });
  });
};


function generateRandomNum() {
  const num = Math.random();
  let roundedNumber = Math.floor(255 * num);
  return roundedNumber;
}