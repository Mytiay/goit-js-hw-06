const counter = {
  value: 0,
  increment(value) {
    this.value += 1;
  },
  decrement(value) {
    this.value -= 1;
  },
};

const addDecrement = document.querySelector('button[data-action="decrement"]');
const addIncrement = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

addDecrement.addEventListener("click", function () {
    counter.decrement();
    console.log(counter);
  counterValue.textContent = counter.value;
});

addIncrement.addEventListener("click", function () {
    counter.increment();
    console.log(counter);
  counterValue.textContent = counter.value;
});
