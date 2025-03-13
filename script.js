const container = document.querySelector("#container");
const button = document.querySelector("#restart");

function makeDivs(numDivs) {
    for (let i = 1; i <= numDivs; i++) {
        let column = document.createElement("div");
        column.setAttribute("class", "column");
        column.classList.add("square");
        for (let j = 1; j <= numDivs; j++) {
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            row.classList.add("square");
            column.appendChild(row);
        }
        container.appendChild(column);
        }
    }
makeDivs(16);

document.body.addEventListener("mouseover", e => {
    let passed = e.target.closest(".row");
    if (!passed) { return; }
    passed.style.backgroundColor = "black";
});

button.addEventListener("click", () => {
    document.querySelectorAll('.square').forEach(e => e.remove());
    let grid = prompt("how many squares do you want per side? (max 100)");
    if (grid > 100) {
        alert("That's too many! I can handle a max of 100 squares per side");
    } else {
    makeDivs(grid);
    }
});