const forma = document.querySelector("form.login-form"); 
forma.addEventListener("submit", (event) => {
  event.preventDefault()
  const email =  event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email==="" || password==="") {
    alert("All form fields must be filled in")
  }
  else {
    const user = {
      email,
      password
  };
  console.log(user);
  }
}); 
