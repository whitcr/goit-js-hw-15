function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const boxesContainer = document.getElementById("boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
let boxSize = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.append(box);
    boxSize += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  boxSize = 30;
}

createButton.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);
