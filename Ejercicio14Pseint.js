const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresa un número: "));

if (numero > 0) {
    console.log("El número ingresado es mayor que cero");
} else {
    if (numero % 2 === 0) {
        console.log("Es número par");
    } else {
        console.log("Es número impar");
    }
    console.log("El número no es mayor a cero");
}