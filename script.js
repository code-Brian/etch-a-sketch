const container = document.getElementById('container');
let slider = document.getElementById('grid-slider');






// functions
function createGrid(gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (i = 1; i <= gridArea; i++) {
        let pixel = document.createElement('div');
        pixel.classList = 'gridPixel';
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', pixel);
    }
    let pixels = document.querySelectorAll('.gridPixel');
    pixels.forEach(pixel => pixel.addEventListener('mouseover', changeColor));
}

function changeColor() {
    let pixelColor = container.querySelectorAll('.gridPixel');
    this.style.backgroundColor = 'black';
}

createGrid(10);