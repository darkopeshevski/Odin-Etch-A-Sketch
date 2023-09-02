const mamaDiv = document.querySelector(".mama");

// Creating the 16x16 grid here.
for (let i = 16; i > 0; i--) {
  const row = document.createElement('div');
  row.className = 'row';
  mamaDiv.appendChild(row);

  for (let b = 16; b > 0; b--) {
    const cell = document.createElement('div');
    cell.className = 'square';
    row.appendChild(cell);
  }
};

const allSquares = document.querySelectorAll('.square');
let flag = false;

// Pressing and coloring the squares.
allSquares.forEach(square => {

  square.addEventListener('mousedown', function() {
    square.style.backgroundColor = 'black';
    flag = true;
  });

  square.addEventListener('mousemove', function() {
    if (flag === true) {
      square.style.backgroundColor = 'black';
    }
  });

  square.addEventListener('mouseup', function() {
    flag = false;
  });

});



