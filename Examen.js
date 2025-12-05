const prompt=require("prompt-sync")();
function Examen(){

    let datos=[];
    let nombre="";
    let rfc="";
    let edad="";
    let sexo="";
    let sueldo="";
    let pagototal=0;
    let i=0;
    
    let cantidad=parseInt(prompt("Ingresa la cantidad de trabajadores: "));
     
    while(i < cantidad){
        nombre=prompt("Ingresa el nombre del personal: ");
        rfc=parseInt(prompt("Ingresa el RFC: "));
        edad=parseInt(prompt("Infresa la edad: "));
        sexo=prompt("Ingrsa el genero H/M: ");
        sueldo=parseInt(prompt("Ingresa el sueldo: "));
        personal={nombre, rfc, edad, sexo, sueldo};
        datos.push(personal);
        i++;

    }
    datos.map((personal) =>{
        pagototal+=personal.sueldo
        
    })
    console.log(`El pago total es: ${pagototal}`);
    
}
Examen();
