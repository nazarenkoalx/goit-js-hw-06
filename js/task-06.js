const input = document.querySelector("#validation-input");

const inputCallback = (evt) => {
  if (evt.currentTarget.value.length === Number(input.dataset.length)) {
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", inputCallback);
