
const prompt = require("prompt-sync")();

let edad = parseInt(prompt("Ingresa tu edad:"));

if (edad >= 18) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}