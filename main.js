const openMenu=document.querySelector(".openMenu")
const closeMenu=document.querySelector(".closeMenu")
const mainMenuMobile=document.querySelector(".mainMenuMobile")
const mobileLinks=document.querySelectorAll(".mobileLink")

openMenu.addEventListener("click",show)
closeMenu.addEventListener("click",close)

function show(){
    mainMenuMobile.style.display="flex"
}
function close(){
    mainMenuMobile.style.display="none"
}
mobileLinks.forEach((Link)=>{
    Link.addEventListener("click",close)
})
