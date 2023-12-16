const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
text.style.fontSize = input.value + "px";

input.addEventListener("input", handlerInput);

function handlerInput() {
  text.style.fontSize = input.value + "px";
}
