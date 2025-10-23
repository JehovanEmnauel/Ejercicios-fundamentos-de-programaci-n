const prompt=require("prompt-sync")();

function calificacion(){
    let cal=parseInt(prompt("Ingresa la calificacion: "));
    let respuesta = cal >= 6 && cal <= 8?"Regular":"Excelente"
    console.log(`La calificacion es ${cal} y es ${respuesta}`);
}
calificacion();