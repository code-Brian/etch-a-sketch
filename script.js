const container = document.getElementById('container');
let slider = document.querySelector('#gridSlider');


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

function updateGrid(gridNumber) {
    let pixels = container.querySelectorAll('div');
    pixels.forEach(pixel => pixel.remove());
    createGrid(slider.value);
}

function changeColor() {
    let pixelColor = container.querySelectorAll('.gridPixel');
    this.style.backgroundColor = 'black';
}

createGrid(10);

// listeners
slider.addEventListener('mouseup', updateGrid);