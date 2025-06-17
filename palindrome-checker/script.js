let input = document.getElementById("output");
let submit = document.getElementById("sumbit");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

submit.addEventListener("click", () => {
  let sp = input.value.trim();
  if(sp===""){
    return alert("Please enter at least word or number.")
  }
  // let rev=sp.split("");

  // const revser=rev.reverse();

  // const join= revser.join("");

  const isPalindrome = sp.split("").reverse().join("");
  if (isPalindrome === sp) {
    result.innerHTML = `${sp} is a palindrome!`
  } else {
    result.innerHTML = `${sp} is not palindrome!`
  }
});

reset.addEventListener("click",() =>{
    input.value="";
    result.innerHTML="";
})

