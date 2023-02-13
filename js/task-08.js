const formEl = document.querySelector(".login-form");

function onSubmitForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email !== "" && password !== "") {
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((x, y) => console.log(x, "---", y));
    console.log({ email, password });
    formEl[0].value = "";
    formEl[1].value = "";
  } else {
    alert("Все поля должны быть заполнены!");
  }
}

formEl.addEventListener("submit", onSubmitForm);
