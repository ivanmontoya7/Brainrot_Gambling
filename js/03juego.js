class juego {
    constructor(rows, cols) {
        console.log("CLASS JUEGO");

        this.rows = rows;
        this.cols = cols;
        console.log(rows, cols);
        this.img_selector = Math.floor(Math.random() * 2);
        this.i = 0;
        this.x = 0;
        this.probabilidades=document.getElementById("probabilidades");
        this.video = document.getElementById("recompensa");
        this.casilla1 = document.getElementById("0,0");
        this.casilla2 = document.getElementById("0,1");
        this.casilla3 = document.getElementById("0,2");
        this.casilla4 = document.getElementById("1,0");
        this.casilla5 = document.getElementById("1,1");
        this.casilla6 = document.getElementById("1,2");
        this.casilla7 = document.getElementById("2,0");
        this.casilla8 = document.getElementById("2,1");
        this.casilla9 = document.getElementById("2,2");
        this.sonido();

        setTimeout(() => this.pintar_casillas(), 500);
    }

    sonido() {
        new Audio("audio/init.mp3").play();
    }

    pintar_casillas() {
        this.video.hidden = true;
        this.probabilidades.hidden = false;
        while (this.i < 3) {
            this.x = 0;
            while (this.x < 3) {
                document.getElementById(this.i + "," + this.x).src = "imgs/" + this.img_selector + ".png";
                this.img_selector = Math.floor(Math.random() * 3);
                this.x += 1;
            }

            this.i += 1;
        }
        this.premio();
    }

    premio() {
        if (this.casilla4.src === this.casilla5.src && this.casilla5.src === this.casilla6.src
            || this.casilla1.src === this.casilla2.src && this.casilla2.src === this.casilla3.src
            || this.casilla7.src === this.casilla8.src && this.casilla8.src === this.casilla9.src
        ) {
            
            console.log(this.victorias);
            this.audio();
            this.reel();
            this.textoganador();

        }
    }

    audio() {
        new Audio("audio/win.mp3").play();
    }

    reel() {
        this.video.hidden = false;
        this.video.autoplay = true;
        this.video.src = "vids/steveharvey/" + Math.floor(Math.random() * 4) + ".mp4";
        this.video.play();
    }

    textoganador() {

        this.probabilidades.hidden = true;
    }


}