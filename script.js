const gridContainer = document.querySelector(".gridContainer");
const generateButton = document.querySelector(".generateButton");

generateButton.addEventListener("click", () =>
{
    let dimension = prompt("Enter the number of squares per side (max. 100): ");
    generateGrid(Math.min(dimension,100));
})

generateGrid(4);

function generateGrid(dimension)
{
    gridContainer.replaceChildren();
    const gridWidth = gridContainer.offsetWidth;
    
    console.log(gridWidth);

    for (let i = 0; i < dimension * dimension; i++) {
        
        const cell = document.createElement("div");

        cell.className = "cell";
        cell.style.width = `${gridWidth / dimension - cell.style.borderWidth}px`;
        cell.addEventListener("mouseenter", function (e) {
            e.target.classList.add("filled");
        });
    
        gridContainer.appendChild(cell);
    }
}