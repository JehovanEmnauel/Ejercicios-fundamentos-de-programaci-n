function suma1(){
const prompt=require("prompt-sync")();
  let n1=parseInt=(prompt("Ingresa un número para la suma: "));
  let n2=parseInt=(prompt("Ingresa un número para la suma: "));
  
  
  let resultado=n1+n2
  console.log(`la suma de ${n1} y ${n2} es: ${resultado}`);

}
suma1();