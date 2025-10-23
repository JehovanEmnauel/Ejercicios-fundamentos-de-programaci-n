function Potencias (){
    const prompt=require("prompt-sync")();
    let resultado=0;
    let base=parseInt(prompt("Ingresa la base: "));
    let exponente=parseInt(prompt("Ingresa el exponente: "));
    if (exponente > 0){
        resultado=base ** exponente;
    } else if(exponente === 0){
        resultado=1;
    }else{
        resultado = 1/(base **(-exponente));
    }
    console.log(`Resultado: ${resultado}`);
    return resultado;
}
Potencias();