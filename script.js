const container = document.getElementById('container');
const colorButtons = document.querySelectorAll('.color-choice');
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
            this.style.backgroundColor = 'rgba(0,0,0, 0.1)';
            console.log("gray passed thru changeColor");
            break;
        case'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360} 100% 50%)`;
            console.log(`${color} pass thru rainbow case`);
            break;
        default:
            this.style.backgroundColor = color;
            console.log(`${color} pass thru default case`);
            break;
    }
}

function colorChoice(event) {
    switch(event.target.dataset.color) {
        case'gray':
            color = 'gray';
            console.log(color);
            break;
        case'rainbow':
            color = 'rainbow';
            console.log(color);
            break;
        default:
            color = 'black';
            break;
    }
}

createGrid(10);

// listeners
slider.addEventListener('mouseup', updateGrid);
colorButtons.forEach(colorButton => colorButton.addEventListener('click', colorChoice));