 document.getElementById("checkBtn").addEventListener("click", function() {
      let first = document.getElementById("first").value.toLowerCase().replace(/\s/g, "");
      let second = document.getElementById("second").value.toLowerCase().replace(/\s/g, "");

      let split1 = first.split("").sort().join("");
      let split2 = second.split("").sort().join("");

      if (split1 === split2) {
        document.getElementById("result").textContent = " It's an anagram!";
        console.log("its a anagram");
      } else {
        document.getElementById("result").textContent = " Not an anagram!";
        console.log("Not an anagram");
      }
    });
  


  reset.addEventListener("click",() =>{
    first.value="";
    second.value="";
    result.innerHTML="";
})

