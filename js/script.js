// Elements
const contactButton = document.querySelector("#button");
const closeButton = document.querySelector("#close");
const form = document.querySelector("#contact-form");
const textArea = document.querySelector("#message");
const navBar = document.querySelector("#nav-bar")
const aboutMe = document.querySelector(".aboutMe");
const picture = document.querySelectorAll(".myImage");
const education = document.querySelector(".education");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const underline = document.querySelectorAll("div .anim")
// Y Offsets
const navSticky = navBar.offsetTop;
const aboutMeY = aboutMe.offsetTop;
const educationY = education.offsetTop;
const aboutY = about.offsetTop;
const skillsY = skills.offsetTop;
const projectsY = projects.offsetTop;
const contactY = contact.offsetTop;


contactButton.addEventListener("click",()=>{
    form.style.visibility = "visible";
    setTimeout(()=>{
        form.style.opacity = "1";          
    },10);
    
    form.style.display = "flex";  
    contactButton.style.display ="none";

});
closeButton.addEventListener("click",()=>{
    form.style.visibility ="hidden";
    setTimeout(()=>{
        form.style.display = "none";        
        contactButton.style.display = "flex";
    },200);
    form.style.opacity = "0";
   
    
});
textArea.addEventListener("input", ()=>{
    let scrollLeft = window.pageXOffset ||
   (document.documentElement || document.body.parentNode || document.body).scrollLeft;

    let scrollTop  = window.pageYOffset ||
   (document.documentElement || document.body.parentNode || document.body).scrollTop;
    textArea.style.height = "0px";
    textArea.style.height =(textArea.scrollHeight) - 15 +"px";
    window.scrollTo(scrollLeft, scrollTop);
});

const checkY = ()=>{    
    if(window.pageYOffset >= navSticky){
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }
    if(window.pageYOffset >= aboutMeY - 800){
        aboutMe.style.visibility = "visible";   
        aboutMe.style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
        picture[0].style.visibility = "visible";
        picture[0].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
    }
    if(window.pageYOffset >= educationY - 800){
        education.style.visibility = "visible";   
        education.style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        picture[1].style.visibility = "visible";
        picture[1].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
    }
    if(window.pageYOffset >= aboutY - 800){
        underline[0].style.visibility = "visible";   
        underline[0].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        underline[1].style.visibility = "visible";   
        underline[1].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
    }
    if(window.pageYOffset >= skillsY - 800){
        underline[2].style.visibility = "visible";   
        underline[2].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        underline[3].style.visibility = "visible";   
        underline[3].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
    }
    if(window.pageYOffset >= projectsY - 800){
        underline[4].style.visibility = "visible";   
        underline[4].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        underline[5].style.visibility = "visible";   
        underline[5].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
    }
    if(window.pageYOffset >= contactY - 800){
        underline[6].style.visibility = "visible";   
        underline[6].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        underline[7].style.visibility = "visible";   
        underline[7].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
    }
}
window.addEventListener('scroll', checkY);