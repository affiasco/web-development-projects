// variables
let columns, rows;
let column, row;
const newGridBtn = document.querySelector(".new-grid-btn");
const randomizeColorBtn = document.querySelector(".random-color-btn");
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

// Adds the over action on the grid
// sets default to #fa8072 mouseover, #eeeeee mouseout
function mouseOverActions(
  mouseoverColor = "#fa8072",
  mouseoutColor = "#eeeeee"
) {
  const gridRows = document.querySelectorAll(".row");
  gridRows.forEach((gridRow) => {
    gridRow.addEventListener("mousemove", () => {
      gridRow.style.background = mouseoverColor;
    });
    gridRow.addEventListener("mouseout", () => {
      gridRow.style.background = mouseoutColor;
    });
  });
}

// Clears the grid out
function clearGrid() {
  const currentGrid = gridContainer.querySelector(".grid");
  gridContainer.removeChild(currentGrid);
}

// Creates a new grid from the new grid button
// checks if the response has a letter in it
function newGrid() {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRESTUVWXYZ"];
  let responseRows = prompt("How many rows would you like?");
  let responseColumns = prompt("How many columns would you like?");

  if (alphabet.includes(responseRows) || alphabet.includes(responseColumns)) {
    alert("Please choose a number!");
    newGrid();
  } else {
    clearGrid();
    createGrid(parseInt(responseColumns), parseInt(responseRows));
  }
}

// Returns random hexadecimal color
function getRandomHex() {
  let randomHex =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  return randomHex;
}

// function for the randomize color event, passes the random hexademicals to mouse over actions
function randomColor() {
  mouseOverActions(getRandomHex(), getRandomHex());
}

// event listeners
newGridBtn.addEventListener("click", newGrid);
randomizeColorBtn.addEventListener("click", randomColor);

// creates grid on page load
// default 16x16
createGrid(16, 16);
