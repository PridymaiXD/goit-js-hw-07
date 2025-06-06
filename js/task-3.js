const inputElement = document.querySelector("input#name-input");
inputElement.addEventListener("input", (event) => {
    console.log(event);
    console.log(event.currentTarget);
    console.log(event.currentTarget.value.trim());
  });

 `<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>`
