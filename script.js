// script.js
const container = document.getElementById('container');
const body = document.querySelector('body');
let gridRow;

function createHeader() {
    let header,
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
    header.appendChild(headerBtn);
    header.appendChild(headerTxt);

    body.insertBefore(headerFragment, container);
}

function createGrid(gridRow) {
    let gridCellSize = 800 / gridRow;
    let gridCol = gridRow,
        gridCell,
        cellWidth = 'width',
        cellHeight = 'height',
        cellFragment = document.createDocumentFragment();
    // generates grid's rows/cols
    for (let i = 0; i < gridRow; ++i) {
        for (let j = 0; j < gridCol; ++j) {
            gridCell = document.createElement('div');
            gridCell.className = 'grid-cell';
            gridCell.style[cellHeight] = `${gridCellSize}px`;
            gridCell.style[cellWidth] = `${gridCellSize}px`;
            cellFragment.appendChild(gridCell);
        }
    }
    container.appendChild(cellFragment);
};

function createNewGrid() {
    gridRow = +prompt('New grid size?', 'Enter a new size, up to 100.');
    if (gridRow <= 0 || gridRow > 100) {
        alert('ERROR 100 max, no negative numbers.')
    }
    else {
        document.querySelector('#container').innerHTML = "";
        createGrid(gridRow);
    }
}

window.onload = createHeader();
window.onload = createGrid(16);