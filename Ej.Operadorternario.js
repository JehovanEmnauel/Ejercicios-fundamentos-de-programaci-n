//CON UN IF NORMAL
const prompt=require("prompt-sync")();
let cal=parseInt(prompt("Ingresa la calificacion: "));
if(cal>=7){
    console.log("Aprobado. ");
}else{
    console.log("Reprobado.")

}

 //*CON EL OPERADOR TERNARIO, SE USA DE 1 A 3 CONDICIONES, EN CASO DE HABER MAS DE 3 SE USA UN IF NORMAL//
 let resultado=cal>6?"Bien":
 cal>8?"Muy bien.":"Excelente"
 console.log("Resultado");