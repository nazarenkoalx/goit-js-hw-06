// по задачі є питання
// 1. не можу знайти оптимальніший шлях створення розмітки, чи є він ? (я впевнений шо є)
// 2. Є баг, якшо натиснути 2 - 3 рази на кнопку створення, то задублюються величини ширини
// і висоти дівів, не розумію, чого ресет не встановлюється на інпут і б'є помилку

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const amountInput = document.querySelector("#controls input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  let amount = amountInput.value;
  return createBoxes(amount);
});

function createBoxes(amount) {
  let startWidth = 30;
  let divList = [];
  for (let i = 1, j = 0; i <= amount, j < 10 * amount; i += 1, j += 10) {
    let div = `<div style="width:${startWidth + j}px; height:${
      startWidth + j
    }px; background-color:${getRandomHexColor()};"></div>`;
    divList.splice(i, 0, div);
  }

  let markup = divList.reduce((previousValue, div) => {
    return previousValue + div;
  }, "");

  boxesDiv.insertAdjacentHTML("beforeend", markup);
}

destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
