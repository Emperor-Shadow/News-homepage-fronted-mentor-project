const menuBtn = document.querySelector("#menu"),
closeBtn = document.querySelector("#close-menu"),
nav = document.querySelector(".nav-links")

menuBtn.addEventListener("click", ()=>{
  nav.style.display = "inline-block";
})

closeBtn.addEventListener("click" , ()=>{
  nav.style.display = "none"
})
