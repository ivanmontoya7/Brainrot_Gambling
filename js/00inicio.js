let rows = 3;
let cols = 5;
let partidas=0;
let score=0;
let ia_black=document.getElementById("ia_black");

let boton = document.getElementById("gamblear");


let dark_mode_button=document.getElementById("dark_mode");

dibujar_tablero();
boton.addEventListener("click", iniciar);
dark_mode_button.addEventListener("click", dark_mode);

function iniciar() {
    new juego(rows,cols,score);
    
    partidas=partidas+1;
    if (partidas>=10){
        dark_mode_button.hidden=false;
    }
}

function dibujar_tablero(){
    let clase_tablero = new tablero(cols, rows);
    clase_tablero.dibujar_tablero();
}

function dark_mode(){
    ia_black.hidden=false;
    let audio = new Audio("audio/Full scream sound FNaf.mp3");
    audio.addEventListener("ended", dark_mode);
    audio.play();
}

