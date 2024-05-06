function iniciar(){    
    console.log("el juego ha sido iniciado");
}

new tablero();
const boton=document.getElementById("gamblear");
boton.addEventListener("click",iniciar);