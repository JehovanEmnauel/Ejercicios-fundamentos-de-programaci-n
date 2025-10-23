function  Multiplicacion2 (){
    const prompt=require("prompt-sync")();

    let numero;
    let entrada=parseInt(prompt("Ingresa un numero del 1 al 10: "));
    numero=entrada
    
if (numero>1 && numero<10){
    for (i=1;i<=10;i++){
        console.log(`${numero} x ${i} = ${numero*i}`)
    }


}else{

    console.log("numero fuera de rango")

}
}
Multiplicacion2();


