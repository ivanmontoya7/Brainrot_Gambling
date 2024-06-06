/* const {app,BrowserWindow} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
       webPreferences: {
            nodeIntegration: true
        }  
    });
    win.loadFile('../index.html');
}  */
let rows = 3;
let cols = 3;
let score = 0;
let partidas = 0;

let ia_black = document.getElementById("ia_black");
let boton = document.getElementById("gamblear");
let dark_mode_button = document.getElementById("dark_mode");

let gazillion = document.getElementById("gazillion");

boton.addEventListener("click", iniciar);
dark_mode_button.addEventListener("click", dark_mode);

puntuacion();
dibujar_tablero();

function iniciar() {
    partidas += 1;
    if (partidas > 20) {
        dark_mode_button.hidden = false;
    }
    let j = new juego(cols, rows);
    setTimeout(() => {
        if (j.es_premio() != 0) {
            score = score + Math.floor(Math.random() * 4000) + 5000;
        }
        if (j.es_premio() == 0) {
            score = score - Math.floor(Math.random() * 7373);
        }
        puntuacion(j);
    }, 500);

}

function dibujar_tablero() {
    let clase_tablero = new tablero(cols, rows);
    clase_tablero.dibujar_tablero();
}

function dark_mode() {
    ia_black.hidden = false;
    let audio = new Audio("audio/Full scream sound FNaf.mp3");
    audio.addEventListener("ended", dark_mode);
    audio.play();
}

function puntuacion(j) {

    if (score <= 0) {
        gazillion.textContent = score + " Dollars??1'?!'! GO ASK FOR A LOAN BITCH AHH!";
    }
    if (score > 0 && j.es_premio() != 0) {
        gazillion.textContent = score + " Gazillion Dollars! U RICH GO TIP YOUR LANDLORD 😎";
    }

}
