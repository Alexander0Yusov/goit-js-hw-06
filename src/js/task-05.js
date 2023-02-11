const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function onInputHandler(event) {
  event.target.value.length === 0
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = event.target.value);
}

inputEl.addEventListener("input", onInputHandler);
