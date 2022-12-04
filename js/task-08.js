const registrationForm = document.querySelector(".login-form");
registrationForm.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Заповніть усі поля");
  }
  const userProfile = { email: email.value, password: password.value };

  registrationForm.reset();
  console.dir(userProfile);
}
