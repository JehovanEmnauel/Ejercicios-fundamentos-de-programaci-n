/*Este programa trata de pedir al usuario que teclee un número entre 1 y 5, si escribe 
alguno que esté fuera de ese rango deberá volver a pedir el número.*/

const prompt=require("prompt-sync")();
let  numero=0;
    
  while(numero<1 || numero>5 ||isNaN(numero)){
      numero=parseInt(prompt("Ingresa un numero del 1 al 5: "));
      }
      console.log("Numero dentro del rango."); 