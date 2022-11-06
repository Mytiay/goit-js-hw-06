const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElements = document.querySelector('ul');

const addEl = ingredientsEL => {
  const newEl = document.createElement("li");
  newEl.textContent = ingredientsEL;
  newEl.classList.add('item');
  console.log(newEl)
  return newEl;
};

const ingredientsItem = ingredients.map(addEl);
console.log(ingredientsItem);

ulElements.append(...ingredientsItem);