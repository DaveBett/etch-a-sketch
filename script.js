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
    let button = e.target.closest('div');
    if (!button) { return; }
    button.style.backgroundColor = 'khaki';
  });
  
  document.body.addEventListener('mouseout', e => {
    let button = e.target.closest('div');
    if (!button) { return; }
    button.style.backgroundColor = '';
  });