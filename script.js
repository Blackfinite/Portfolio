var typed = new Typed(".pro",{
    strings:["Web Designer","Web Devloper","......"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})
const naV = document.querySelector(".nav"),
    navList = naV.querySelectorAll('li'),
    totalNav = navList.length;
    allSection = document.querySelectorAll(".section")
    totSec = allSection.length


    for(let i=0;i<totalNav;i++){

        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){
        removeBack()
         
            for(let j=0;j<totalNav;j++){

                if(navList[j].querySelector("a").classList.contains("active")){
                //   allSection[j].classList.add("back-section")
                addBack(j)
                   
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this)
            if(window.innerWidth < 1200){
                asideTog()
            }
        })
        
    }
    function removeBack(){
        
        for(let i=0;i<totSec;i++){
            allSection[i].classList.remove("back-section")
        }
    }
    function addBack(num){
        allSection[num].classList.add("back-section")
    }
    function showSection(element){
        for(let i=0;i<totSec;i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1]
        document.querySelector("#" + target).classList.add("active");
      
        
    }
    function upDateNav(element){
        for(let i=0;i<totalNav;i++){
            navList[i].querySelector("a").classList.remove("active")
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                
                navList[i].querySelector("a").classList.add("active")
        }
        }
    }
    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex = this.getAttribute("data-section-index")
        // console.log(sectionIndex);
        
         showSection(this)
         upDateNav(this)
         addBack(sectionIndex)
         removeBack()
        
    })



const navTogBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogBtn.addEventListener("click",()=>{
                asideTog()
            })

            function asideTog(){
                aside.classList.toggle("open")
                navTogBtn.classList.toggle("open")
                for(let i=0;i<totalNav;i++){
                    allSection[i].classList.toggle("open")
                }
            }
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form field values
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const subject = document.querySelector('input[name="subject"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Basic form validation
    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Show form data in console
    console.log("Form Submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Alert user
    alert("Message sent successfully! (Simulated)");

    // Optional: Reset the form
    this.reset();
});