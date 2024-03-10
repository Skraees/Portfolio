let check=true;
let ham = document.querySelector(".ham");
let side = document.querySelector(".nav");

ham.addEventListener("click", () => {
    side.classList.toggle("go");
    setTimeout(() => {
        if(check==true){
        ham.innerHTML="&#9747;";
        check=false;
    }
    else if(check==false){
        ham.innerHTML= "&#9776;";
        check=true;
    }
    }, 500);
    
})