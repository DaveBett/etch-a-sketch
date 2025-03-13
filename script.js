const container = document.querySelector("#container");
const button = document.querySelector("#restart");

function makeDivs(numDivs) {
    for (let i = 0; i < numDivs; i++){
        let cell = document.createElement('div');
        cell.setAttribute("class", "square");
        container.appendChild(cell)    
        }
    }
makeDivs(256);

document.body.addEventListener("mouseover", e => {
    let passed = e.target.closest(".square");
    if (!passed) { return; }
    passed.style.backgroundColor = "black";
});

button.addEventListener("click", () => {
    document.querySelectorAll('.square').forEach(e => e.remove());
    makeDivs(256);
});

