function Alumnos (){
    const prompt=require("prompt-sync")();
    let alumnos=parseInt(prompt("Ingresa la cantidad de Alumnos: "));
    let costoA=0;
    let pagot=0;

    if(alumnos>100){
        costoA=65;
        pagot= alumnos*costoA;
    } else if(alumnos>=50 && alumnos<= 99){
        costoA=70;
        pagot= alumnos*costoA;
    } else if(alumnos>=30 && alumnos<=49){
        costoA=95;
        pagot= alumnos*costoA;
    }else{
        pagot=4000;
        costoA= pagot/alumnos;
    }
    console.log(`Pago a la compañia: ${pagot}`);
    console.log(`Cada alumno debe pagar: ${costoA}`);
}
Alumnos();