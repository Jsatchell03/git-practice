// Initialize DOM elements
const clickDisplay = document.getElementById("click-display");
const clickButton = document.getElementById("click-button");
const resetButton = document.getElementById("reset-button");
// Track count with variable
let count = 0;

// Increment count with click event listener
clickButton.addEventListener("click", () => {
  count += 1;
  clickDisplay.innerHTML = `Click Count: ${count}`;
});

// Reset count with click event listener on reset button
resetButton.addEventListener("click", () => {
  count = 0;
  clickDisplay.innerHTML = `Click Count: ${count}`;
  alert("Count reset to 0");
});
