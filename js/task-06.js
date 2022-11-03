const refs = {
  inputEl: document.querySelector("#validation-input"),
};
const letters = Number(refs.inputEl.dataset.length);
console.log(letters);

refs.inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  
  event.currentTarget.value.length !== letters
    ? refs.inputEl.classList.add('invalid')
    : refs.inputEl.classList.add('valid');
}