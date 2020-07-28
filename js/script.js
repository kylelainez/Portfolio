const contactButton = document.querySelector("#button");
const closeButton = document.querySelector("#close");
const form = document.querySelector("#contact-form");
const textArea = document.querySelector("#message");


contactButton.addEventListener("click",()=>{
    form.style.display = "flex";
    contactButton.style.display = "none";
});
closeButton.addEventListener("click",()=>{
    form.style.display ="none";
    contactButton.style.display = "flex";
});

textArea.addEventListener("input", ()=>{
    textArea.style.height = "0px";
    textArea.style.height =(textArea.scrollHeight) - 15 +"px";
});
