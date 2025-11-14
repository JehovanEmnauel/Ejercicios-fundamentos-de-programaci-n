const prmopt=require("prompt-sync")();
function rango(){
    let valor=0;
    while(valor<=1 || valor>=5){
        valor=parseInt(prmopt("ingresa un numero del 1 al 5: "));
        console.log(`El numero ${valor} es valido`);
    }
}
rango();