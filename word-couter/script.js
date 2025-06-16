const input = document.getElementById("place");
const result= document.getElementById("result");
const ex = document.getElementById("exam");


input.addEventListener("input" ,() =>{
    const sum=input.value.trim();
    result.innerHTML=sum.length;

     const e = sum === "" ? 0: sum.split(/\s+/).length;
     
     ex.textContent= e;

     


})

