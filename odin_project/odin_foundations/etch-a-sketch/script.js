let columns, rows;
let column, row;
// const grid = document.createElement("div");
// grid.className = "grid";
const newGridBtn = document.querySelector(".new-grid-btn");
const gridContainer = document.querySelector(".grid-container");

// Creates Grid defaults to 16
function createGrid(columns, rows) {
  const grid = document.createElement("div");
  grid.className = "grid";
  for (let c = 0; c < columns; c++) {
    column = document.createElement("div");
    column.className = `column`;
    for (let r = 0; r < rows; r++) {
      row = document.createElement("div");
      row.className = `row data-${r}`;
      row.style.height = "50px";
      column.appendChild(row);
    }
    grid.appendChild(column);
  }
  gridContainer.appendChild(grid);
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

function clearGrid() {
  const currentGrid = gridContainer.querySelector(".grid");
  gridContainer.removeChild(currentGrid);
}

function newGrid() {
  let response = prompt("What size grid would you like? (columns, rows)");
  response = response.split(",");
  clearGrid();
  createGrid(parseInt(response[0]), parseInt(response[1]));
}

newGridBtn.addEventListener("click", newGrid);
createGrid(8, 8);
