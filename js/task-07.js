const refs = {
    inputEl: document.querySelector("#font-size-control"),
    spanEl: document.querySelector('#text')
};

refs.inputEl.addEventListener("change", setInput);

function setInput(event) {
    refs.spanEl.style.fontSize === Number(event.currentTarget.value);
    console.log(Number(event.currentTarget.value));
};



