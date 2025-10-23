const prompt = require("prompt-sync")();

function Multi(){
    let N = parseInt(prompt("ingresa un numero del 1 al 10 "));

    if(N > 0 && N < 11){
        for(let i=1;i<=10;i++){
            console.log(N + " x " + i + " = " + (N*i));
        }
    } else {
        console.log("no sirve jeje")
    }
}
Multi();