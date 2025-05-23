const gridContainer = document.querySelector(".gridContainer");

for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("mouseenter", function (e) {
        e.target.classList.add("filled");
    });

    gridContainer.appendChild(cell);
}