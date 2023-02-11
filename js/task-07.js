const sizeControl = document.querySelector("#font-size-control");
const showingText = document.querySelector("#text");

function onMoveControl(event) {
  showingText.style.fontSize = event.target.value + "px";
}

sizeControl.addEventListener("input", onMoveControl);
