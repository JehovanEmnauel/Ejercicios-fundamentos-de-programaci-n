
function Multiplicacion1 (){
    
    const prompt=require("prompt-sync")();
  let numero= parseInt(prompt("ingrsa un numero: "));
  
    for (i=1;i<=11;i++){
        console.log(`${numero}x${i}=${numero*i}`);
    }
    
}
Multiplicacion1();