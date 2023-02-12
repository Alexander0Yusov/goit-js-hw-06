function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const viewport = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");

function sizesArray(items) {
  const array1 = Array(Number(items)).fill(30);

  const array2 = [];

  array1.reduce((prev, number) => {
    array2.push(number + prev);
    return prev + 10;
  }, 0);

  return array2;
}

function blockMarkupProduction(array) {
  return array
    .map((size) => {
      return `<div style="background-color: ${getRandomHexColor()}; width:${size}px; height:${size}px"></div>`;
    })
    .join("");
}

function onClickCreateBtnHandler() {
  const markup = blockMarkupProduction(sizesArray(inputEl.value));
  viewport.insertAdjacentHTML("afterbegin", markup);
}
function onClickDestrBtnHandler() {
  viewport.innerHTML = "";
}

createBtn.addEventListener("click", onClickCreateBtnHandler);
destroyBtn.addEventListener("click", onClickDestrBtnHandler);
