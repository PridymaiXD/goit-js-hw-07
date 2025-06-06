const button = document.querySelector("button.change-color");
const body = document.body;

const span = document.querySelector(".color");
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
button.addEventListener("click", (event) => {
  const RandomHexColor = getRandomHexColor();
  body.style.backgroundColor = RandomHexColor;
  span.textContent = RandomHexColor;
});