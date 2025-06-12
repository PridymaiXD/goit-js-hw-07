const inputElement = document.querySelector("input#name-input");
const outputElement = document.querySelector("span#name-output")
inputElement.addEventListener("input", (event) => {
    if(inputElement.value.trim()){
outptElement.innerHTML = inputElement.value.trim()
} else {
outputElement.innerHTML = "Anonymous"
}
  });
