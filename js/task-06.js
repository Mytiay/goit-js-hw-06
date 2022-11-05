const refs = {
  inputEl: document.querySelector("#validation-input"),
};
const letters = Number(refs.inputEl.dataset.length);
console.log(letters);

refs.inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  
  if (event.currentTarget.value.length === letters) {
    refs.inputEl.classList.remove('invalid');
    refs.inputEl.classList.add('valid')
  } else {
    refs.inputEl.classList.remove('valid');
    refs.inputEl.classList.add('invalid');
  }
};