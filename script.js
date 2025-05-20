function startGame() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const totalCells = 25;
  const diamondCount = Math.floor(Math.random() * 3) + 3; // 3 dan 5 gacha
  const diamondPositions = [];

  while (diamondPositions.length < diamondCount) {
    const rand = Math.floor(Math.random() * totalCells);
    if (!diamondPositions.includes(rand)) {
      diamondPositions.push(rand);
    }
  }

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";

    if (diamondPositions.includes(i)) {
      cell.innerHTML = "💎";
      cell.classList.add("diamond");
    }

    grid.appendChild(cell);
  }
}
