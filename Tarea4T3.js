const prompt=require("prompt-sync")();
let respuesta = "";
while (respuesta.toLowerCase()!== "n"){
respuesta=prompt("Desea continuar con la ejecucion?, si la respuesta es SI presione (N/n), en caso de NO ser asi presione cualquier tecla: ")
}
console.log("programa terminado. ")