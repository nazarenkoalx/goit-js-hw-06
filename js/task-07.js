const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("change", () => {
  return (text.style.fontSize = `${input.value}px`);
});
