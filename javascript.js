const mamaDiv = document.querySelector(".mama");
const squares = [];

// Creating the 16x16 grid here.
for (let i = 16; i > 0; i--) {
  const row = document.createElement('div');
  row.className = 'row';
  mamaDiv.appendChild(row);

  for (let b = 16; b > 0; b--) {
    const cell = document.createElement('div');
    cell.className = 'square';
    row.appendChild(cell);
    squares.push(cell);
  }
};

console.log(squares);
