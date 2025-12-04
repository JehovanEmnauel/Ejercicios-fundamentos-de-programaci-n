const prompt=require("prompt-sync")();

function Datos (){

    let datos=[];
    let nombre="";
    let edad="";
    let peso=0;
    let i=0;
    let sueldo=0;
    let totalsueldo=0;
    let dimension=parseInt(prompt("Ingresa el tamaño del arreglo: "));

    while(i<dimension){
        nombre=prompt("Ingresa el nombre: ");
        edad=parseInt(prompt("Ingresa la edad: "));
        peso=parseInt(prompt("Ingresa el peso: "));
        sueldo=parseInt(prompt("Ingresa el sueldo: "));
        perosona={nombre, edad, peso, sueldo};
        datos.push(perosona);
        i++;
    }
    datos.map((persona)=>{
        totalsueldo+=persona.sueldo;
        console.log(`se llama ${persona.nombre} y tiene ${persona.edad} años y su peso es ${persona.peso} kg`);
        console.log(`y su sueldo es de $${persona.sueldo} pesos`);
    })
}
Datos();