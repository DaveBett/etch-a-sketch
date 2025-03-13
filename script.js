const container = document.querySelector("#container");

function makeDivs(numDivs) {
    for (let i = 0; i < numDivs; i++){
        let cells = document.createElement('div');
        cells.setAttribute("class", "square");
        container.appendChild(cells)    
        }
    }
makeDivs(256);


document.body.addEventListener('mouseover', e => {
    let passed = e.target.closest('.square');
    if (!passed) { return; }
    passed.style.backgroundColor = 'black';
});
