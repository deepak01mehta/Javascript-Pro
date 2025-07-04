let input=document.getElementById("input");
let button=document.getElementById("Uppercase");
let button1=document.getElementById("Lowercase");
let result= document.getElementById("result");
let clear =document.getElementById("clear");


button.addEventListener("click",()=>{
    function dot(){
    let box=input.value.toUpperCase();

   result.innerHTML=box;
    }
dot();

})
button1.addEventListener("click",()=>{
    function dot(){
    let box=input.value.toLowerCase();

   result.innerHTML=box;
   

    }
dot();

})
function copytext(){
    navigator.clipboard.writeText(document.getElementById("result").innerHTML)
    alert("copy the text")
    
}
function bold() {
    result.style.fontWeight=result.style.fontWeight ==="bold" ?"normal" :"bold";
}
function italic() {
  result.style.fontStyle = result.style.fontStyle === "italic" ? "normal" : "italic";
}

function underline() {
  result.style.textDecoration = result.style.textDecoration === "underline" ? "none" : "underline";
}
clear.addEventListener("click",()=>{
    input.value="";
    result.innerHTML="";
})





