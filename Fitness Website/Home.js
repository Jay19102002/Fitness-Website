let nav=document.querySelector("nav")
console.log(nav)
window.addEventListener("scroll",()=>{
    nav.classList.toggle("sticky",window.scrollY>0)
})