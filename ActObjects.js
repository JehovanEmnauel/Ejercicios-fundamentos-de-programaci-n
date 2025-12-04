const prompt=require("prompt-sync")();
function Aggdatos(){
 let datos = [];
 let nombre = "";
 let edad = "";
 let peso = "";
 let i = 0;

   let cantidad=parseInt(prompt("Ingresa la cantidad de personas a agg: "));
 while(i < cantidad){

    nombre=prompt("Ingresa el nombre de la persona: ");
    edad=parseInt(prompt("Ingresa la edad de la persona: "));
    peso=parseInt(prompt("Ingresa el peso de la persona: "));
    i++;

    let personas = {nombre, edad, peso};
    datos.push //para guardar los datos xd
    console.log(personas);
 }
}
Aggdatos();