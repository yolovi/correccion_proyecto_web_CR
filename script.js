


function toggleMenu(){
    document.getElementById("menulista").classList.toggle("active");
    document.querySelector(".hamburguesa").classList.toggle("active");
    if (menu.classList.contains("active")) {
        menu.style.maxHeight = "0px"; 
    } else {
        menu.style.maxHeight = "300px"; 
    }

    menu.classList.toggle("active"); 

}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    document.getElementById("confirmacion").style.display = "block";

    
    this.reset();
});