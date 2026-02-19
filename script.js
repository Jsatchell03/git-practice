// Initialize DOM elements
const clickDisplay = document.getElementById("click-display");
const clickButton = document.getElementById("click-button");

// Track count with variable
let count = 0;

// Increment count with click event listener
clickButton.addEventListener("click", () => {
  count += 1;
  clickDisplay.innerHTML = `Click Count: ${count}`;
});
