const boton = document.getElementById("gamblear");
boton.addEventListener("click", iniciar);
let rows = 3;
let cols = 3;
let victorias=0;
let dark_mode_button=document.getElementById("dark_mode");

function iniciar() {
    new juego(rows,cols);
    victorias=victorias+1;
    console.log(victorias);
    if (victorias>=10){
        dark_mode_button.hidden=false;
    }
}

function dark_mode(){
    dark_mode_button.onclick(document.getElementById("ia_black").hidden=false);
}

const clase_tablero = new tablero(rows, cols);
clase_tablero.dibujar_tablero();