// variables
let columns, rows;
let column, row;
const randomizeColorBtn = document.querySelector(".random-color-btn");
const gridContainer = document.querySelector(".grid-container");
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const sliderValue = document.querySelector(".slider-value");

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

// Slider that will clear then create a new grid with associated value
function getSliderValue() {
  clearGrid();
  createGrid(parseInt(slider.value), parseInt(slider.value));
}

// updates the slider value to display on the page
function updateSliderValue() {
  sliderValue.textContent = `Current Grid: ${slider.value}x${slider.value}`;
  sliderContainer.replaceChild(sliderValue);
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
randomizeColorBtn.addEventListener("click", randomColor);
slider.addEventListener("click", getSliderValue);
slider.addEventListener("mouseup", updateSliderValue);

// creates grid on page load
// default 8x8
createGrid(8, 8);
