class tablero{
    i=0;
    x=0;
    tabla=document.getElementById("tabla");
    
    dibujar_tablero(){
        while(i<3){
            while (x<3){
                casilla.crear_celda();
                
                x+=1;
            }
            i+=1;
    }

}
}

dibujar_tablero();