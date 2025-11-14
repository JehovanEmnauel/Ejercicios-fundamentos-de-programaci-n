//declaracion de arreglos
/*
tipos de datos
Number
strig
boolean
null
undifined
tipos de datos compuestos
objet
array
function
*/

function datosarreglos(){
    let datos=[3,7,9,3,2,6];
   /*let suma=0;
    for(i=0;i<datos.length;i++){
   if((datos[i])%2===0){
    suma += datos[i];
  
   }

  console.log(la suma de los datos es ${suma});*/

//for..of

/*for(let numeros of datos){
    console.log(`los datos del arreglo son:${numeros}`);*/


//for... each
/*datos.forEach(function(numeros)){
    console.log(numeros);
    }*/

   // datos.forEach(numeros=>console.log(numeros))


   /*while
   let i=0;
   while(i<datos.length){
    console.log(datos[i])
    i++;
   }*/


  /*  do{
        console.log(datos[i]);
        i++
    }while(i<datos.length)*/


//map
   // datos.map(numeros=>console.log(numeros))


    //filter
    /*const newArray=datos.filter((numeros)=>{
        return numeros<7
    })
console.log(newArray);*/


//reduce
let suma=0;
datos.reduce((a,b)=>suma=a+b)
console.log(suma);



}
datosarreglos();