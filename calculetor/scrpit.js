//
let output=document.getElementById("input");

function press(val){
    output.value +=val
}
function calculate(){
output.value=eval(output.value)

}
function cleardigit() {
    output.value=output.value.slice(0, -1);
}
function displayclear(){
    output.value=""
}