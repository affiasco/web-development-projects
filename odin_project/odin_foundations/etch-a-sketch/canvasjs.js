const boxWidth = 400;
const boxHeight = 400;
const padding = 10;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function drawBoard() {
  for (var x = 0; x <= boxWidth; x += 25) {
    ctx.moveTo(0.5 + x + padding, padding);
    ctx.lineTo(0.5 + x + padding, boxHeight + padding);
  }

  for (var x = 0; x <= boxHeight; x += 25) {
    ctx.moveTo(padding, 0.5 + x + padding);
    ctx.lineTo(boxWidth + padding, 0.5 + x + padding);
  }
  ctx.strokeStyle = "black";
  ctx.stroke();
}

drawBoard();
