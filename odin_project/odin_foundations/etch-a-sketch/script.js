let columns, rows;
const grid = document.createElement("div");
let column;
let row;
grid.className = "grid";

// Creates Grid defaults to 16
function createGrid(columns = 4, rows = 4) {
  for (let c = 0; c < columns; c++) {
    column = document.createElement("div");
    column.className = `column`;
    for (let r = 0; r < rows; r++) {
      row = document.createElement("div");
      row.className = `row data-${r}`;
      row.style.height = "100px";
      column.appendChild(row);
    }
    grid.appendChild(column);
  }
  document.body.appendChild(grid);
  mouseOverActions();
}

function mouseOverActions() {
  const gridRows = document.querySelectorAll(".row");
  gridRows.forEach((gridRow) => {
    gridRow.addEventListener("mouseover", () => {
      gridRow.style.background = "red";
    });
    gridRow.addEventListener("mouseout", () => {
      gridRow.style.background = "white";
    });
  });
}

createGrid();
