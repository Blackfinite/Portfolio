const toggler = document.querySelector(".style-toggler")
toggler.addEventListener('click',(e)=>{
    document.querySelector('.style-switcher').classList.toggle("open")
})
window.addEventListener("mousewheel",()=>{
    if(document.querySelector('.style-switcher').classList.contains("open")){
          document.querySelector('.style-switcher').classList.remove("open")
    }
})

const alstyle = document.querySelectorAll(".alternate-style")
function setActiveStyle(color){
    alstyle.forEach((styles)=>{
        if(color === styles.getAttribute('title')){
            styles.removeAttribute("disabled")
        }
        else{
            styles.setAttribute("disabled","true")
        }
        
    })
}
const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click",()=>{
        dayNight.querySelector("i").classList.toggle("fa-sun")
        dayNight.querySelector("i").classList.toggle("fa-moon")
        document.body.classList.toggle("dark")



})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
         dayNight.querySelector("i").classList.add("fa-moon")
    }
})