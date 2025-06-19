let dark = document.getElementById("dark-light");
let light = document.getElementById("light-mode");
let toggle = document.querySelectorAll(".mode");
let istoggle = false;
light.addEventListener("click", () => {
  if (istoggle) {
    dark.style.display = "none";
    light.style.display = "inline-block";
    document.body.style.backgroundColor="white"
  } else {
    dark.style.display = "block";
    light.style.display = "none";
     document.body.style.backgroundColor="black"
  }
  istoggle = !istoggle;
});
dark.addEventListener("click", () => {
  if (istoggle) {
    dark.style.display = "none";
    light.style.display = "inline-block";
     document.body.style.backgroundColor="white"
  } else {
    dark.style.display = "block";
    light.style.display = "none";
    document.body.style.backgroundColor="black"
  }
  istoggle = !istoggle;
}); 

