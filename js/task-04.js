let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const outputScreen = document.querySelector("#value");

function onIncrementClick() {
  counterValue += 1;
  outputScreen.textContent = counterValue;
}
function onDecrementClick() {
  counterValue -= 1;
  outputScreen.textContent = counterValue;
}

incrementBtn.addEventListener("click", onIncrementClick);
decrementBtn.addEventListener("click", onDecrementClick);
