let blogPost=document.getElementById("maine-container");

let loader=document.getElementById("loader");

let limit=5;
let page =3;

const fetchPost=async()=>{
    const res = await fetch(
         `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * 5}`
    );
    const data = await res.json();
    console.log(data);
    
    return data.products;

};

function showBlog(posts){
    posts.forEach((post)=>{
        const newPost= document.createElement("div");
        newPost.classList.add("post");
       newPost.innerHTML=`
       <h1>${post.title}<h1>
       <img src=" ${post.images[0]}" alt="${post.title}">
       <p>${post.description}</p>
       `;

       blogPost.appendChild(newPost);
    });
}

async function loadPost(){
    loader.style.display="block";
    const post=await fetchPost();
    
    showBlog(post);
    console.log(await fetchPost());
    loader.style.display="none";

}

window.addEventListener('scroll',()=>{
    const {scrollTop, scrollHeight,clientHeight} =document.documentElement;
    
    if(scrollTop+clientHeight >=scrollHeight -5){
        page++;
        loadPost();
    }
})
loadPost();



