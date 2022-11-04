const refs = {
    inputEl: document.querySelector("#font-size-control"),
    spanEl: document.querySelector('#text')
};

refs.inputEl.addEventListener("change", setInput);

function setInput(event) {
    
    console.log(event.currentTarget.value);
};



