const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = "gridRow";
    };
}

function makeColumns(cellNum) {
    for(i = 0; i < rows.length; i++){
        for (j=0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}

defaultGrid();

const cellGrid = document.querySelectorAll('div.cell');

cellGrid.forEach((div) => {
    div.addEventListener("mouseover", ( event ) => {
        event.target.style.backgroundColor = "black";
        console.log(event);
    });
});

