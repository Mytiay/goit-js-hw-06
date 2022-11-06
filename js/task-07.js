const refs = {
    inputEl: document.querySelector("#font-size-control"),
    spanEl: document.querySelector('#text')
};

refs.inputEl.addEventListener("input", setInput);

function setInput(event) {
    refs.spanEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(Number(event.currentTarget.value));
};



