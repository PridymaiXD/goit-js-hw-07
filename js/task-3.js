const inputElement = document.querySelector("input#name-input");
const outputElement = document.querySelector("input#name-output")
inputElement.addEventListener("input", (event) => {
    console.log(event);
    console.log(event.currentTarget);
    console.log(event.currentTarget.value.trim());
    if(input.value.trim()){
spanElement.innerHTML = input.value
} else {
spanElement.innerHTML = input.value
}
  });

 `<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>`
