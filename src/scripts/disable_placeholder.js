const input = document.querySelector("input");
input.addEventListener("click", () => {
  input.placeholder = "";
});

// When the input loses focus, restore the placeholder text
input.addEventListener("blur", () => {
  input.placeholder = "1 - 86";
});