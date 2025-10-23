/*En este programa se pedirá al usuario que teclee un número cada vez. El proceso acaba 
cuando teclee un 0 en caso contrario mostrará la suma de todos los números tecleados.*/

const prompt=require("prompt-sync")();
let suma = 0;
let numero = parseInt(prompt("Ingresa un numero (teclea 0 para terminar): "), 10);
while(numero !== 0){
    suma+=numero;
    numero = parseInt(prompt("Ingresa un numero (teclea 0 para terminar): "), 10);
}
console.log("la suma de los numeros es: " +suma);

