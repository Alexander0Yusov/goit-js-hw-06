const inputEl = document.querySelector("#validation-input");
const passLength = Number(inputEl.dataset.length);

function onBlurInputEl(event) {
  event.target.value.length === passLength
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
}

inputEl.addEventListener("blur", onBlurInputEl);
