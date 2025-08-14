
let inputBox=document.getElementById("inputBox");
let uploadBtn=document.getElementById("uploadBtn");
let bigIcon=document.getElementById("bigIcon")


uploadBtn.addEventListener("click",()=>{
    inputBox.click();

});
inputBox.addEventListener("change",()=>{
const files=inputBox.files[0];
if(files){
    alert(`selected file ${files.name}`)
}
});

bigIcon.addEventListener("click",()=>{
 inputBox.click();
});

