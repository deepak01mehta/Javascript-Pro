let resetbtn = document.getElementById("reset");
let button = document.getElementById("btn");
let result = document.getElementById("result");
let input1 = document.getElementById("inputA");
let input2 = document.getElementById("inputB");

button.addEventListener("click", () => {
  result.innerHTML = "";

  let n = input1.value.trim();
  let n2 = input2.value.trim();
  let number1 = parseInt(n);
  let number2 = parseInt(n2);

  if (number1 === number2) {
    result.innerHTML = "Both ARE equl ";
  } else if (number1 > number2) {
    result.innerHTML = "First one is bigger";
  } else {
    result.innerHTML = "SECOND  one is bigger";
  }
});
resetbtn.addEventListener("click", () => {
  result.innerHTML = "";
  input1.value = "";
  input2.value = "";
});
