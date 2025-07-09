let result = document.getElementById("result");
let incrementBtn = document.getElementById("increment");
let decrmentBtn = document.getElementById("decrment");
let count = 0;
incrementBtn.addEventListener("click", () => {
 
  result.innerHTML = ++count;
});
decrmentBtn.addEventListener("click", () => {
  
  result.innerHTML = --count;
});



