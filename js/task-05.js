const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};


const onInputChange = (event) => {
    console.log(event.currentTarget.value);
    refs.output.textContent = event.currentTarget.value;
};

refs.input.addEventListener("input", onInputChange);
