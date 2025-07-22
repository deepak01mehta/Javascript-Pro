let Result=document.getElementById("result");
let button=document.getElementById("btn");
let copy =document.getElementById("copy");


button.addEventListener("click",randomPassword);

function randomPassword(){
    let length =15;
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbol="!@#$%^&*()_+-=[]{}|;:',.<>?/~`";
    let number ="0123456789";
    const all=lower+upper+symbol+number;




    let password =[
     lower[Math.floor(Math.random() * lower.length)],
     upper[Math.floor(Math.random() *upper.length)],
     symbol[Math.floor(Math.random() *symbol.length)],
     number[Math.floor(Math.random() *number.length)]
];

for(let i=4;i<length;i++ ){
    password.push(all[Math.floor(Math.random() *all.length)]);
    
}
password =password.sort(() => Math.random() -0.5);
let geretor =password.join("");
return(Result.value =geretor);

}

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(Result.value)
    .then(() => {
      console.log("TEXT COPIED");
      // Optional: alert("Text Copied!");
    })
    .catch((err) => {
      console.log("Failed to copy", err);
    });
});






