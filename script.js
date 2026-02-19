const clickDisplay = document.getElementById("click-display");
const clickButton = document.getElementById("click-button");
let count = 0;
clickButton.addEventListener("click", () => {
  count += 1;
  clickDisplay.innerHTML = `Click Count: ${count}`;
});
