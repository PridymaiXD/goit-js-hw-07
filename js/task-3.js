const inputElement = document.querySelector("input#name-input");
const outputElement = document.querySelector("span#name-output")
inputElement.addEventListener("input", (event) => {
    if(event.currentTarget.value.trim()){
outptElement.innerHTML = event.currentTarget.value.trim()
} else {
outputElement.innerHTML = "Anonymous"
}
  });
