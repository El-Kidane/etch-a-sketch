// script.js

window.onload = function () {
    let divRow = 16,
        divCol = divRow,
        div,
        container = document.getElementById('container'),
        fragment = document.createDocumentFragment();
    
    // rows
    for (let i = 0; i < divRow; ++i) {

        // columns
        for (let j = 0; j < divCol; ++j) {
            div = document.createElement('div');
            div.className = 'grid-cell';
            fragment.appendChild(div);
        }
    }

    container.appendChild(fragment);
};