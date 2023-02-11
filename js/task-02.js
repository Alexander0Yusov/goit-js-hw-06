const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsArrayLi = [];

ingredients.forEach((element) => {
  const ingredientLi = document.createElement("li");
  ingredientLi.textContent = element;
  ingredientLi.classList += "item";
  ingredientsArrayLi.push(ingredientLi);
  console.log(ingredientLi);
});

const ingredientsUl = document.querySelector("#ingredients");

ingredientsUl.append(...ingredientsArrayLi);
