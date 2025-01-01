
let sideBar=document.querySelector(".side-bar")
const conten=document.querySelector(".content")
sideBar.addEventListener("mouseover",()=>{
    sideBar.classList.add("open")
    console.log("hola");
    
})

conten.addEventListener("mouseover",()=>{
    sideBar.classList.remove("open")
})

let switchT=document.querySelector(".toggle-switch")
let body=document.querySelector("body")
let dark=localStorage.getItem("dark")
let text=document.querySelector(".text-mode")
const darkmodeAc=()=>{
    
    localStorage.setItem("dark","activate")
    body.classList.add("dark")
    text.innerText="Light Mode"
}
const darkmodeD=()=>{
    body.classList.remove("dark")
    localStorage.setItem("dark",null)
    text.innerText="Dark Mode"
}


if(dark==="activate") darkmodeAc()

switchT.addEventListener("click",()=>{
    console.log(dark);
    
    dark=localStorage.getItem("dark")
    dark !== "activate" ? darkmodeAc() : darkmodeD()
})