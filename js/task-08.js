const formEl = document.querySelector(".login-form");

function onSubmitForm(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value !== "" &&
    event.currentTarget.elements.password.value !== ""
  ) {
    const formData = new FormData(event.currentTarget);
    formData.forEach((x, y) => console.log(x, "---", y));
    formEl[0].value = "";
    formEl[1].value = "";
  } else {
    alert("Все поля должны быть заполнены!");
  }
}

formEl.addEventListener("submit", onSubmitForm);
