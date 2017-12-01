{
  window.onload = function(){
    let canvas = document.getElementById('micanvas');
    if(canvas && canvas.getContext){
        let contexto = canvas.getContext('2d');
        if (contexto) {
          contexto.fillStyle = 'white'; // Cambiamos al color naranja
          contexto.beginPath(); // Comienza camino
          contexto.arc(50,50,30,0,Math.PI*2,true); // Dibujamos circulo completo
          contexto.fill(); // Lo rellenamos

          contexto.fillStyle = 'black'; // Cambiamos al color naranja
          contexto.fillRect(30,30,40,40);

          contexto.fillStyle = 'white'; // Elegimos el color negro
          contexto.textAlign='center'; // Centramos el texto
          contexto.font = "bold 3em sans-serif"; // Elegimos la fuente
          
          contexto.fillText('V', 50,65); // Escribimos el texto en x e y        
          
          contexto.fillText('Vsevillano', 190,65); // Escribimos el texto en x e y                 
          
        }
    }
  }

}
