const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// option 1
// input.addEventListener("change", () => {
//   return (text.style.fontSize = `${input.value}px`);
// });

//option 2
// input.addEventListener("change", (evt) => {
//   return (text.style.fontSize = `${evt.currentTarget.value}px`);
// });

//option3
input.addEventListener("change", (evt) => {
  return (text.style.fontSize = `${evt.currentTarget.valueAsNumber}px`);
});
