const refs = {
  boxEl: document.querySelector("#boxes"),
  inputNumbers: document.querySelector("input"),
  createEl: document.querySelector("button[data-create]"),
  removeEl: document.querySelector("button[data-destroy"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBoxes = (amount) => {
  const addedEl = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    addedEl.push(div);
  }
  return addedEl;
};
const destroyBoxes = () => {
  refs.boxEl.innerHTML = "";
};
refs.createEl.addEventListener("click", () => {
  let addedBoxs = createBoxes(refs.inputNumbers.value);
  refs.boxEl.append(...addedBoxs);
});
refs.removeEl.addEventListener("click", destroyBoxes);

