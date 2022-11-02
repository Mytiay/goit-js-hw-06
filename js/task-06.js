const input = document.querySelector("#validation-input");

console.log(input.id);

const onInputBlur = (event) => {
if (event.currentTarget.value.length <= input.dataset.length) {
  return input.id = validation-input.valid;
}
};

input.addEventListener('blur', onInputBlur);