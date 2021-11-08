const container = document.getElementById('container');
const colorButtons = document.querySelectorAll('.color-choice');
const clearButton = document.querySelector('#clear-button');
let slider = document.querySelector('#gridSlider');
let color = "black";


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
    let pixels = container.querySelectorAll('div');
    pixels.forEach(pixel => pixel.addEventListener('mouseover', changeColor));
}

function updateGrid(gridNumber) {
    let pixels = container.querySelectorAll('div');
    pixels.forEach(pixel => pixel.remove());
    createGrid(slider.value);
}

function changeColor() {
    switch(color) {
        case'gray':
            if (this.style.backgroundColor.match(/rgba/)) {
                let currentOpacity = Number(this.style.backgroundColor.slice(-4,-1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0,0,0, ${currentOpacity + 0.1}`;
                    this.classList = 'gray';
                }
            } else if (this.classList == 'gray' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
                return;
            } else {
                this.style.backgroundColor = 'rgba(0,0,0, 0.1)';
            }
            break;
        case'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360} 100% 50%)`;
            this.classList.remove('gray');
            break;
        case'eraser':
            this.style.backgroundColor = '#FFF';
            this.classList.remove('gray');
            break;
        default:
            this.style.backgroundColor = color;
            this.classList.remove('gray');
            break;
    }
}

function selectColor(event) {
    switch(event.target.dataset.color) {
        case'gray':
            color = 'gray';
            console.log(color);
            break;
        case'rainbow':
            color = 'rainbow';
            console.log(color);
            break;
        case'eraser':
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    }
}

function clearAllPixels() {
  let pixels = container.querySelectorAll('div');
  pixels.forEach(pixel => pixel.style.backgroundColor = "#FFF");
}

function displayDimension() {
    let displayDiv = document.querySelector('#sliderDisplay');
    displayDiv.textContent = `Curent grid size: ${slider.value} x ${slider.value}`;
}

createGrid(10);
displayDimension(slider.value);

// listeners
slider.addEventListener('mouseup', updateGrid);
slider.addEventListener('change', displayDimension)
clearButton.addEventListener('click', clearAllPixels);
colorButtons.forEach(colorButton => colorButton.addEventListener('click', selectColor));