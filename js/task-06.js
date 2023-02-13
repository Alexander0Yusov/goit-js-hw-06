const inputEl = document.querySelector("#validation-input");
const passLength = Number(inputEl.dataset.length);

function onBlurInputEl(event) {
  if (event.target.value.length === passLength) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.remove("invalid");
    }
    inputEl.classList.add("valid");
  } else {
    if (inputEl.classList.contains("valid")) {
      inputEl.classList.remove("valid");
    }
    inputEl.classList.add("invalid");
  }
}

inputEl.addEventListener("blur", onBlurInputEl);
