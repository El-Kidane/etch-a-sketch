// script.js
const container = document.getElementById('container');
const body = document.querySelector('body');
let gridRow;

function createHeader() {
    let
        header,
        headerTxt,
        headerBtn,
        headerFragment = document.createDocumentFragment();

    header = document.createElement('div');
    header.id = 'header';
    headerTxt = document.createElement('span');
    headerTxt.className = 'header-txt';
    headerTxt.textContent = 'You can create a new grid, max 100 per row'
    headerBtn = document.createElement('button');
    headerBtn.id = 'header-btn'
    headerBtn.textContent = 'New grid'

    headerBtn.addEventListener('click', createNewGrid);

    headerFragment.appendChild(header);
    header.appendChild(headerTxt);
    header.appendChild(headerBtn);
    body.insertBefore(headerFragment, container);
}

function createGrid(gridRow) {
    let gridCellSize = 800 / gridRow;
    let gridCol = gridRow,
        gridCell,
        cellWidth = 'width',
        cellHeight = 'height',
        cellFragment = document.createDocumentFragment();
    console.log(gridCellSize);
    // grid rows/cols
    for (let i = 0; i < gridRow; ++i) {
        for (let j = 0; j < gridCol; ++j) {

            gridCell = document.createElement('div');
            gridCell.className = 'grid-cell';
            gridCell.style[cellHeight] = `${gridCellSize}px`;
            gridCell.style[cellWidth] = `${gridCellSize}px`;
            cellFragment.appendChild(gridCell);
        }
    }
    console.log(gridCellSize);
    //append all cells div to DOM only once, no reflow
    container.appendChild(cellFragment);
};

function createNewGrid() {
    gridRow = +prompt('New grid size?', 'Enter the number. 13 would return a grid of 13x13 squares');
    document.querySelector('#container').innerHTML = "";
    createGrid(gridRow);
}

window.onload = createHeader();
window.onload = createGrid(16);

