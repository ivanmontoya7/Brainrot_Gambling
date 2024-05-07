class casilla{
    constructor(){
        
        //td.id=""+i+","+x+"";
    }
    
    
    crear_celda(i,x,tr){
        this.td=document.createElement("td");
        this.img=document.createElement("img");
        
        this.img.id=i+","+x;
        this.img.src="imgs/qm.png";
        
        this.td.appendChild(this.img);
        
        tr.appendChild(this.td);
        return tr;
    }
}