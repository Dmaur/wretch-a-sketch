let grid = document.getElementById("#container");
let slider = document.getElementsByClassName("slider");



function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}
makeRows(100,100)
const boxes = [...document.getElementsByClassName("grid-item")];

const makeBlack = event => event.target.style.backgroundColor = "black";
function equip(box) {
  box.addEventListener("mousedown", makeBlack);
  box.addEventListener("mouseover", event => {
    if (event.buttons == 1) makeBlack(event);
  });
}
boxes.forEach(equip);