const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", handlerInput);

function handlerInput() {
  const inputLength = input.value;
  text.style.fontSize = inputLength + "px";
}
