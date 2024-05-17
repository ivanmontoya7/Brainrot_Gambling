
class juego {

    constructor(rows, cols,score) {
        this.rows = rows;
        this.cols = cols;

        this.i = 0;
        this.x = 0
        
        this.gazillion = document.getElementById("gazillion");
        this.score = score;
        
        this.probabilidades = document.getElementById("probabilidades");

        this.video = document.getElementById("recompensa");


        //Declara las casillas cogiendo el id de cada una
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this['casilla' + (i * this.cols + j + 1)] = document.getElementById(i + ',' + j);
            }
        }
        this.puntuacion();
        this.sonido();
        
        setTimeout(() => this.pintar_casillas(), 500);

    }

    ocultar_contenido(elemento){
        elemento.hidden = true;
    }

    mostrar_contenido(elemento){
        elemento.hidden = false;
    }

    sonido() {
        new Audio("audio/init.mp3").play();
    }

    pintar_casillas() {
        this.video.pause();
        this.ocultar_contenido(this.video);
        this.mostrar_contenido(this.gazillion);
        this.mostrar_contenido(this.probabilidades);

        while (this.i < this.rows) {
            this.x = 0;
            while (this.x < this.cols) {
                this.img_selector = Math.floor(Math.random() * 7);
                document.getElementById(this.i + "," + this.x).src = "imgs/" + this.img_selector + ".png";

                this.x += 1;
            }

            this.i += 1;
        }
        this.premio();
    }

    premio() {
        this.es_premio();
        if (this.es_premio() != 0) {

            this.score += 1;
            this.audio();
            this.reel(this.es_premio());
        }

    }


    es_premio() {
        if (this.casilla1.src === this.casilla2.src && this.casilla2.src === this.casilla3.src) {
            
            return this.casilla1.src;
        }
        if (this.casilla4.src === this.casilla5.src && this.casilla5.src === this.casilla6.src) {
            return this.casilla4.src;
        }
        if (this.casilla7.src === this.casilla8.src && this.casilla8.src === this.casilla9.src) {
            return this.casilla7.src;
        }
        this.score=this.score-1;
        console.log(this.score);
        return 0;
    }

    audio() {
        new Audio("audio/win.mp3").play();
    }

    reel(source) {
        c
        this.video.hidden = false;
        this.video.autoplay = true;
        this.video.src = source;

        this.video.play();
        this.gazillion.hidden = true;
        this.probabilidades.hidden = true;
    }

    puntuacion() {
        if(this.score<=0){
            this.gazillion.textContent = this.score + " Dollars??1'?!'! GO ASK FOR A LOAN BITCH AHH!";
        }
        else{
            this.gazillion.textContent = this.score + " Gazillion Dollars! U RICH GO TIP YOUR LANDLORD 😎";
        }
        
    }



}