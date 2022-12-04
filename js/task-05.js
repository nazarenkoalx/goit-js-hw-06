const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const nameCallback = (evt) => {
  return evt.currentTarget.value
    ? (nameOutput.textContent = evt.currentTarget.value)
    : (nameOutput.textContent = "Anonymous");
};

nameInput.addEventListener("input", nameCallback);
