const refs = {
  boxEl: document.querySelector("#boxes"),
  counter: document.querySelector("input"),
  createEl: document.querySelector("button[data-create]"),
  removeEl: document.querySelector("button[data-destroy"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const getItem = () => `<div style = "background-color: ${getRandomHexColor()}; width: 30px; height: 30px;"></div>`;
const items = ['item'];

for (let i = 0; i < array.length; i+=1) {
  const element = array[i];
  
}

const createBoxes = (amount) => {
  refs.counter.value === amount;
  const box = items.map((item) => getItem(item)).join('');
  refs.boxEl.insertAdjacentHTML('beforeend', box);
};

const destroyBoxes = () => {
  refs.boxEl.innerHTML = '';
};

refs.createEl.addEventListener('click', createBoxes);
refs.removeEl.addEventListener('click', destroyBoxes);
