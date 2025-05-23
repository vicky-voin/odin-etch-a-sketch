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
        cell.style.width = `${gridWidth / dimension - 4}px`;
        cell.addEventListener("mouseenter", function (e) {
            if(!e.target.classList.contains("filled"))
            {
                e.target.style.backgroundColor = getRandomColorRgb();
                e.target.classList.add("filled");
            }
        });
    
        gridContainer.appendChild(cell);
    }
}

function getRandomColorRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }