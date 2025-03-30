var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro");
var canvas_cinco = document.getElementById("lienzo-cinco");

if(canvas_tres.getContext){
    console.log("Sí se soporta la propiedad getContext");

    //Obteniendo el contexto del objeto <canvas>
    var ctx_3= canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(200,0,0)" //Crear un objeto con un color de fondo
    ctx_3.fillRect(10,10,55,50); //Dibujar el objeto en la posición x=10, y=10, con ancoh de 55px y alto de 50px

    ctx_3.fillStyle = "rgba(0,0,200,0.5)" //Crear un objeto con un color de fondo
    ctx_3.fillRect(30,30,55,50); //Dibujar el objeto en la posición x=30, y=30, con ancoh de 55px y alto de 50px

    ctx_3.fillStyle = "rgba(0,200,0,0.5)" //Crear un objeto con un color de fondo
    ctx_3.fillRect(50,50,55,50); //Dibujar el objeto en la posición x=50, y=50, con ancoh de 55px y alto de 50px

}else{
    console.log("No se soporta la propiedad getContext");
}

if(canvas_cuatro.getContext){
    console.log("Sí se soporta la propiedad getContext");

    //Obteniendo el contexto del objeto <canvas>
    var ctx_4= canvas_cuatro.getContext("2d");

    ctx_4.beginPath() //Indica un trazado
    ctx_4.moveTo(5,5); //Coloca el puntero del lápiz en la posición 5,5
    ctx_4.lineTo(125,125); //Dibuja o traza una línea hasta la posición 125,125
    ctx_4.strokeStyle = "#FFFFFF"; //Se asigna un color al trazo
    ctx_4.stroke(); //Se imprime en el lienzo

}else{
    console.log("No se soporta la propiedad getContext");
}

if(canvas_cinco.getContext){
    console.log("Sí se soporta la propiedad getContext");

    //Obteniendo el contexto del objeto <canvas>
    var ctx_5= canvas_cinco.getContext("2d");

    ctx_5.beginPath();
    ctx_5.setLineDash([5,5]); //Establecer una línea punteada con 15 pixeles dibujados y 5 pixeles sin dibujar
    ctx_5.moveTo(0,40); //Colocar el puntero del lápiz en la posición x=0; y=40
    ctx_5.lineTo(150,40); //Dibujar o mover el lápiz hasta la posición x=150, y=40
    ctx_5.strokeStyle = "#FFFFFF";
    ctx_5.stroke();

    ctx_5.beginPath();
    ctx_5.setLineDash([]); //Establecer una línea contínua
    ctx_5.moveTo(0,120); //Colocar el puntero del lápiz en la posición x=0; y=120
    ctx_5.lineTo(150,120); //Dibujar o mover el lápiz hasta la posición x=150, y=120
    ctx_5.strokeStyle = "#FFFFFF";
    ctx_5.stroke();

}else{
    console.log("No se soporta la propiedad getContext");
}