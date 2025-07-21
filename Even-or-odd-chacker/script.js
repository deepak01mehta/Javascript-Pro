let Checker = document.getElementById("checker");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
let outputs = document.getElementById("input");

Checker.addEventListener("click", () => {
  let value = outputs.value.trim();
  if (value === "" || isNaN(value)) {
    result.innerText = "Please enter a valid number!";
    return;
  }
  let number = parseInt(value);
  if (number % 2 == 0) {
    result.innerHTML = "even number";
  } else {
    result.innerHTML = "odd number";
  }
});
reset.addEventListener("click", () => {
  result.innerHTML = "";
  outputs.value = "";
});
