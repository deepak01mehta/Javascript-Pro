let dobInput =document.getElementById("input1");
let button =document.getElementById("btn");
let result = document.getElementById("result");
let Reset= document.getElementById("reset")

button.addEventListener("click",()=>{
let dobValue =dobInput.value;

if(!dobValue){
    result.innerHTML="Please Enter the date of Birth";
    return ;
}

let dobDate =new Date(dobValue);
let today =new Date()



if(dobDate>today){
    result.innerHTML="Birthdate cannot be in the future";
    return ;
}

let dobYear =dobDate.getFullYear();
let dobMonth = dobDate.getMonth() +1;
let dobDay =dobDate.getDate();

let currYear = today.getFullYear();
let currMonth = today.getMonth() +1;
let currDay =today.getDate();

let ageYears =currYear -dobYear;


if(currMonth<dobMonth || (currMonth ===dobMonth && currDay<dobDay)){
    ageYears--;
}

result.innerHTML ="your age is " +ageYears + " Years";




})
Reset.addEventListener("click", () => {
    result.innerHTML = " ";
    dobInput.value = "";
});


