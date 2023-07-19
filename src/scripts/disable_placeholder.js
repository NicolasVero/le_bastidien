const input = document.querySelector("input");

input.addEventListener("click", () => {
    input.placeholder = "";
});

input.addEventListener("blur", () => {
  input.placeholder = "1 - 86";
});