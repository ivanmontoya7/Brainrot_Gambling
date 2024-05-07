class tablero{
    constructor(){
        this.i=0;
        this.x=0;
        this.tabla=document.getElementById("tabla");
        this.t=document.getElementById("tbodyt");
    }
    
    

    dibujar_tablero(){
        while(this.i<3){
            /* tr */
            this.tr=document.createElement("tr");  
            this.x=0;      
            while (this.x<3){
                /* td */
                this.cas=new casilla();
                this.cas.crear_celda(this.i,this.x,this.tr);
                this.x+=1;
            }
            this.t.appendChild(this.tr);
            this.i+=1;
        }   
    }
}







/**class tablero{
    constructor(){
        this.i=0;
        this.x=0;
        this.tabla=document.getElementById("tabla");
        this.t=document.getElementById("tbodyt")
        
    }
    
    

    dibujar_tablero(){
        while(this.i<3){
            
            const tr=document.createElement("tr");  
            this.x=0;      
            while (this.x<3){
                
                const td=document.createElement("td");
                td.id=""+this.i+","+this.x+"";
                tr.appendChild(td);
                this.x+=1;
            }
            this.t.appendChild(tr);
            this.i+=1;
    }
}*/