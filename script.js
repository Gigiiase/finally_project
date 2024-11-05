let burger = document.querySelector(".burger_image");
let menu = document.querySelector(".header_nav");
let xmark = document.querySelector(".xmark")

burger.addEventListener("click", ()=>{
    menu.classList.add("show_nav");
    xmark.style.display="block"
    burger.style.display="none"
});
xmark.addEventListener("click", ()=>{
    menu.classList.remove("show_nav");
    xmark.style.display="none"
    burger.style.display="block"
});