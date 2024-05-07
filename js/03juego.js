class juego{
    constructor(){
        console.log("CLASS JUEGO");
        this.img_selector=Math.floor(Math.random() * 2);
        this.i=0;
        this.x=0;
        this.sonido();
        this.setTimeout(this.pintar_casillas(),4000);
    }

    sonido(){
        new Audio("audio/init.mp3").play();
    }

    pintar_casillas(){
        while(this.i<3){
            this.x=0;      
            while (this.x<3){
                document.getElementById(this.i+","+this.x).src="imgs/"+this.img_selector+".png";
                this.img_selector=Math.floor(Math.random() * 3);
                this.x+=1;
            }
            
            this.i+=1;
        }
        this.premio();   
    }

    // premio(){
    //     if(document)
    // }
}