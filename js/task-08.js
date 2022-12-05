const registrationForm = document.querySelector(".login-form");
registrationForm.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  let userProfile;
  const { email, password } = evt.currentTarget.elements;

  //option 1
  // if (email.value === "" || password.value === "") {
  //   return alert("Заповніть усі поля");
  // } else {
  //   return console.dir(
  //     (userProfile = {
  //       email: email.value,
  //       password: password.value,
  //     }),
  //     registrationForm.reset()
  //   );
  // }

  // option 2
  return (
    email.value === "" || password.value === ""
      ? alert("Заповніть усі поля")
      : console.dir(
          (userProfile = {
            email: email.value,
            password: password.value,
          })
        ),
    registrationForm.reset()
  );
}
