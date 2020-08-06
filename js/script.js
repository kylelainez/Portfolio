// Elements
const navBar = document.querySelector("#nav-bar")
const aboutMe = document.querySelector(".aboutMe");
const picture = document.querySelectorAll(".myImage");
const education = document.querySelector(".education");
const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
const underline = document.querySelectorAll("div .anim")
const skillTable = document.querySelector("#skill-table");
const navA = document.querySelectorAll("li a"); 
const home = document.querySelector("#home");
const particles = document.querySelector("#tsparticles");
// Y Offsets
const navSticky = navBar.offsetTop;
const aboutMeY = aboutMe.offsetTop;
const educationY = education.offsetTop;
const aboutY = about.offsetTop;
const skillsY = skills.offsetTop;
const projectsY = projects.offsetTop;
const contactY = contact.offsetTop;
const skillTableY = skillTable.offsetTop;
const homeY = home.offsetTop;

const navHeight = 64;
let winHeight;

tsParticles.loadJSON("tsparticles", "js/preset.json");

window.addEventListener('resize',()=>{
    if(window.outerWidth >= 768){
       particles.style.visibility ="visible";
    }else{
        particles.style.visibility ="hidden";
    }
});

window.addEventListener('scroll', ()=>{    
    winHeight = window.pageYOffset;
    if(winHeight >= navSticky){
        navBar.classList.add("sticky");
    }else{
        navBar.classList.remove("sticky");
    }
    if(winHeight >= aboutMeY - 800){
        aboutMe.style.visibility = "visible";   
        aboutMe.style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
        picture[0].style.visibility = "visible";
        picture[0].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
    }
    if(winHeight >= educationY - 800){
        education.style.visibility = "visible";   
        education.style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        picture[1].style.visibility = "visible";
        picture[1].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
    }
    if(winHeight >= aboutY - 800){
        underline[0].style.visibility = "visible";   
        underline[0].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        underline[1].style.visibility = "visible";   
        underline[1].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
    }
    
    if(winHeight >= skillsY - 800){
        underline[2].style.visibility = "visible";   
        underline[2].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        underline[3].style.visibility = "visible";   
        underline[3].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
        setTimeout(()=>{
            skillTable.style.visibility = "visible";
            skillTable.style.animation = "fade-in 2s ease";
        },900);
    }
    if(winHeight >= projectsY - 800){
        underline[4].style.visibility = "visible";   
        underline[4].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        underline[5].style.visibility = "visible";   
        underline[5].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
    }
    if(winHeight >= contactY - 800){
        underline[6].style.visibility = "visible";   
        underline[6].style.animation = "panel-left-animation 1s ease, fade-in 2s ease";
        underline[7].style.visibility = "visible";   
        underline[7].style.animation = "panel-right-animation 1s ease, fade-in 2s ease";
    }
    if(winHeight >= homeY && winHeight < aboutY - navHeight && navA[0].classList.value !== "active"){
        navA[0].classList.add("active");
        navA[1].classList.remove("active");
        navA[2].classList.remove("active");
        navA[3].classList.remove("active");
        navA[4].classList.remove("active");
    }else if(winHeight >= aboutY - navHeight && winHeight < skillsY - navHeight && navA[1].classList.value !== "active"){
        navA[0].classList.remove("active");
        navA[1].classList.add("active");
        navA[2].classList.remove("active");
        navA[3].classList.remove("active");
        navA[4].classList.remove("active");
    } else if(winHeight >= skillsY - navHeight && winHeight <   projectsY - navHeight && navA[2].classList.value !== "active"){
        navA[0].classList.remove("active");
        navA[1].classList.remove("active");
        navA[2].classList.add("active");
        navA[3].classList.remove("active");
        navA[4].classList.remove("active");
    } else if(winHeight >= projectsY - navHeight && (window.innerHeight + winHeight) < document.body.offsetHeight && navA[3].classList.value !== "active"){
        navA[0].classList.remove("active");
        navA[1].classList.remove("active");
        navA[2].classList.remove("active");
        navA[3].classList.add("active");
        navA[4].classList.remove("active");
    } else if((window.innerHeight + winHeight) >= document.body.offsetHeight && navA[4].classList.value !== "active") {
        navA[0].classList.remove("active");
        navA[1].classList.remove("active");
        navA[2].classList.remove("active");
        navA[3].classList.remove("active");
        navA[4].classList.add("active");
    } 
});
