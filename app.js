//My imports
import Person from "./export.js";

const panels=document.querySelectorAll(".panel")
const text=document.querySelector(".p-text")
const spa=document.querySelector(".spa-container")
const navItems=document.querySelectorAll(".nav-items")
const test=document.querySelector("h1")
const sun=document.querySelector(".sun")
const moon=document.querySelector(".moon")
const icons=document.querySelectorAll(".icon")
const  date=new Date()
const aziz = new Person("Aziz",20,"data-scientist")
console.log(aziz)
//Darkmode implementation
icons.forEach(icon=>
    icon.addEventListener('click',()=>
    {
        if(icon.dataset.theme=="light") 
        {
        sun.style.display='none'
        moon.style.display='block'
        document.body.classList.add("lg-mode")
        }else
        {
            sun.style.display='block'
            moon.style.display='none'
            document.body.classList.remove("lg-mode")
        }
       
    })    
)
//Full page scroll horizontally
navItems.forEach(navItem=>
navItem.addEventListener('click',()=>
{    
    switch (parseInt(navItem.dataset.count)) {
        case 2:
            spa.style.transform='translateX(-100vw)';
        break;
        case 1:
            spa.style.transform='translateX(0vw)';
        break;
        case 3:
            spa.style.transform='translateX(-200vw)';
        break;
    }
}
)
)

//function Implementationn
function active()
{
    panels.forEach(panel=> panel.classList.remove('active'))
    this.classList.add('active')
}

var activeSection=()=>
{
        if(text.getBoundingClientRect().top<window.scrollY)
        {
            text.classList.add("active-text")
        }else
        {
            text.classList.remove("active-text")   
        }
}

//Events Call
window.addEventListener("scroll",activeSection)
panels.forEach(panel=>panel.addEventListener('click', active))
             




