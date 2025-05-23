const gridContainer = document.querySelector(".gridContainer");

generateGrid(4);

function generateGrid(dimension)
{
    const gridWidth = gridContainer.offsetWidth;

    for (let i = 0; i < dimension * dimension; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = gridWidth / dimension - cell.style.borderWidth;
        cell.addEventListener("mouseenter", function (e) {
            e.target.classList.add("filled");
        });
    
        gridContainer.appendChild(cell);
    }
}