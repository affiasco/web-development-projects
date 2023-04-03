// let rows, columns;
// gridContainer = document.querySelector(".grid-container");
// newGrid = document.createElement("div");

// function createGrid(x) {
//   for (rows = 0; rows < x; rows++) {
//     for (columns = 0; columns < x; columns++) {
//       gridContainer.appendChild(newGrid);
//     }
//   }
//   newGrid.style.width = parseInt(960 / x);
//   newGrid.style.height = parseInt(960 / x);
// }

// createGrid(10);

let columns, rows;
const grid = document.createElement("div");
grid.className = "grid";

// Creates Grid defaults to 16
function createGrid(columns = 4, rows = 4) {
  for (let c = 0; c < columns; c++) {
    const column = document.createElement("div");
    column.className = "column";
    for (let r = 0; r < rows; r++) {
      const row = document.createElement("div");
      row.className = "row";
      row.textContent = c + "_" + r;
      column.appendChild(row);
    }
    grid.appendChild(column);
  }
  document.body.appendChild(grid);
}

createGrid();
