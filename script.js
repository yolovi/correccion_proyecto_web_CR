


function toggleMenu(){
    document.getElementById("menulista").classList.toggle("active");
    document.querySelector(".hamburguesa").classList.toggle("active");
    if (menu.classList.contains("active")) {
        menu.style.maxHeight = "0px"; 
    } else {
        menu.style.maxHeight = "300px"; 
    }

}

window.onload = function() {
    const formulario = document.getElementById("formulario");
    const mensaje = document.getElementById("confirmacion");

    mensaje.style.display = "none";

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        mensaje.style.display = "block";
        formulario.reset();

        
        setTimeout(function() {
            mensaje.style.display = "none";
        }, 3000);
    });
};
