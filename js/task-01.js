const total = document.querySelectorAll('.item');
console.log('Number of categories: ', total.length);

let Categorys = 1;

total.forEach(el => {
console.log("Category: ", el.querySelector("h2").textContent);
console.log("Elements: ", el.querySelectorAll("li").length);
})