const prompt=require("prompt-sync")();
let edad=parseInt(prompt("Ingresa tu edad: "));
let nota=parseInt(prompt("Ingresa tu nota: "));
let sexo=(prompt("Ingresa tu genero (f/m): "));

if (nota>=5 && edad>=18 && sexo==="f"){
    console.log("Aceptada");
} else if (nota>=5 && edad>=18 && sexo==="m"){
    console.log("Aprobada")
} else{
    console.log("No aceptada")
}
    