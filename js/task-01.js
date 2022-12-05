const liItems = document.querySelectorAll(".item");
const categories = document.querySelectorAll("h2");
const elements = document.querySelectorAll(".item ul");

console.log(`Number of categories: ${liItems.length}`);
for (let i = 0; i < categories.length; i += 1) {
  console.log(
    `Category: ${categories[i].textContent}
    Elements: ${elements[i].children.length}`
  );
}
