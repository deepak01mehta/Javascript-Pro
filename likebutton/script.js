const btn =document.getElementById("icon");
let isLiked=false;
btn.addEventListener("click",() =>{
    if(isLiked){
        btn.classList.add("fa-regular");
        btn.classList.remove("fa-solid");
    }
    else{
         btn.classList.remove("fa-regular");
        btn.classList.add("fa-solid");
    }

    isLiked=!isLiked
})

//fa-solid