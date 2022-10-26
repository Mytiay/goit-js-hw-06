const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElements = document.querySelector('ul');
console.log(ulElements);

ingredients.forEach(el => {
  const newEl = document.createElement("li");
  newEl.textContent = el;
  newEl.classList.add('item');
  console.log(newEl);
  ulElements.appendChild(newEl);
});

