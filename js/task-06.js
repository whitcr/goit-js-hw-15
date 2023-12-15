const input = document.getElementById("validation-input");

input.addEventListener("blur", handlerBlur);

function handlerBlur() {
  const length = Number(input.getAttribute("data-length"));
  const inputLength = input.value.length;

  if (inputLength <= length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
