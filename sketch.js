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
let boxes = document.getElementsByClassName("grid-item");

for (let box of boxes){
  box.addEventListener("mouseover", function(event) {
  event.target.style.background = "black"
  });
}