let ganre = document.getElementById("gan");
let qoutes = document.getElementById("result");
let auth = document.getElementById("author");
let loder =document.getElementById("loder");

ganre.addEventListener("click", async () => {
    loder.style.display="block"
    qoutes.innerHTML="";
    auth.innerHTML=""
  
  let res = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: { "X-Api-Key": "zuZ+sKw+da4zOqxpVbJH/Q==YwCADUljlWHpDYol" },
  });

  let data = await res.json();
  console.log(data);
     loder.style.display="none"
 
  
  qoutes.innerHTML=data[0].quote;
  auth.innerHTML="-"+data[0].author;
  
  

});
