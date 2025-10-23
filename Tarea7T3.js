/*Este programa le pide al usuario que vaya tecleando números una y otra vez, pero solo 
números pares, en caso de que teclee un número impar el programa acabará y dirá la 
cantidad de números pares ingresados (el 0 cuenta como par).*/

const prompt=require("prompt-sync")();
let contador =0;
let numero= parseInt(prompt("Ingresa un numero par: "));
while(numero % 2 === 0){
    contador++;
    numero= parseInt(prompt("Ingresa un numero par: "));
}
console.log("La cantidad de numeros pares ingresados es: " +contador);