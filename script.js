
let input=document.getElementById("inputTxt")
let btn=document.getElementById("subscribeBtn")
let checker=document.getElementById("validity")
let dismissBtn=document.getElementById("dismiss-btn")


btn.addEventListener("click", function()
{
    //Email Validator Code
    if(!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    checker.innerHTML="Valid email required";

    else{
        location.href='thankyou.html';
    }
})

dismissBtn.addEventListener("click", ()=>{
    location.href='index.html';
})
