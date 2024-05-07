const boton=document.getElementById("gamblear");
boton.addEventListener("click",iniciar);

function iniciar(){    
    new juego();
}


const clase_tablero=new tablero();
clase_tablero.dibujar_tablero();
