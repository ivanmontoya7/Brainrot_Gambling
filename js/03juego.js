
class juego {

    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;

        this.i = 0;
        this.x = 0

        this.video = document.getElementById("recompensa");


        //Declara las casillas cogiendo el id de cada una
        //TODO:habría que meter las casillas en matriz
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this['casilla' + (i * this.cols + j + 1)] = document.getElementById(i + ',' + j);
            }
        }

        this.sonido();

        setTimeout(() => this.pintar_casillas(), 500);

    }

    ocultar_contenido(elemento) {
        elemento.hidden = true;
    }

    mostrar_contenido(elemento) {
        elemento.hidden = false;
    }

    sonido() {
        new Audio("audio/init.mp3").play();
    }

    pintar_casillas() {
        this.video.pause();
        this.ocultar_contenido(this.video);

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
            this.zoom();
            setTimeout(() => {
                this.audio();
                this.reel();
            }, 600);
        }
    }

    zoom() {
        for (let z = 0; z < this.es_premio().length; z++) {
            this.es_premio()[z].className = 'zoom';
            setTimeout(() => {
                this.es_premio()[z].className = '';
            }, 600);
        }
    }

    audio() {
        new Audio("audio/win.mp3").play();
    }

    reel() {
        this.eleccion_video=Math.floor(Math.random()*11);
        this.ruta_video = this.es_premio()[0].src[74];
        console.log(this.eleccion_video);
        /* this.video.src = "file:///C:/Users/MONTOYA/Desktop/Programacion/vsc_extension_gambling/vids/" + this.ruta_video + "/"+0+".mp4"; */
        this.video.src="https://player.vimeo.com/video/949676768?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";

/*         let error = false;
        while (error) {
            console.log("Error al cargar el video");
            this.eleccion_video = Math.floor(Math.random() * 11);
            this.video.src = "file:///C:/Users/MONTOYA/Desktop/Programacion/vsc_extension_gambling/vids/" + this.ruta_video + "/" + this.eleccion_video + ".mp4";
            console.log(error);
            error = false; // Set error to false to exit the loop
        } */
        
        this.mostrar_contenido(this.video);
        this.video.autoplay = true;
        this.video.play();
        

    }

    es_premio() {
        //TODO: hacer combinaciones con la matriz al declarar las casillas, o crear matrices con combinaciones ganadoras
        switch (true) {
            case (this.casilla1.src === this.casilla2.src && this.casilla2.src === this.casilla3.src):
                return [this.casilla1, this.casilla2, this.casilla3];
            case (this.casilla4.src === this.casilla5.src && this.casilla5.src === this.casilla6.src):
                return [this.casilla4, this.casilla5, this.casilla6];
            case (this.casilla7.src === this.casilla8.src && this.casilla8.src === this.casilla9.src):
                return [this.casilla7, this.casilla8, this.casilla9];
            case (this.casilla1.src == this.casilla4.src && this.casilla4.src == this.casilla7.src):
                return [this.casilla1, this.casilla4, this.casilla7];
            case (this.casilla2.src == this.casilla5.src && this.casilla5.src == this.casilla8.src):
                return [this.casilla2, this.casilla5, this.casilla8];
            case (this.casilla3.src == this.casilla6.src && this.casilla6.src == this.casilla9.src):
                return [this.casilla3, this.casilla6, this.casilla9];
            case (this.casilla1.src == this.casilla5.src && this.casilla5.src == this.casilla9.src):
                return [this.casilla1, this.casilla5, this.casilla9];
            default:
                return 0;
        }

    }

    /*     es_premio() {
        const casillas = [
            [this.casilla1.src, this.casilla2.src, this.casilla3.src],
            [this.casilla4.src, this.casilla5.src, this.casilla6.src],
            [this.casilla7.src, this.casilla8.src, this.casilla9.src],
            [this.casilla1.src, this.casilla4.src, this.casilla7.src],
            [this.casilla2.src, this.casilla5.src, this.casilla8.src],
            [this.casilla3.src, this.casilla6.src, this.casilla9.src],
            [this.casilla1.src, this.casilla5.src, this.casilla9.src]
        ];

        for (const casilla of casillas) {
            if (casilla[0] === casilla[1] && casilla[1] === casilla[2]) {
                console.log(casilla);
            return casilla[0], casilla[1], casilla[2];
            }
        }

        return 0;

    } */


}