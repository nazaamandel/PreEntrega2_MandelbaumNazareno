/*Situación
Estás armando un simulador para inscribir personas a un taller de programación. 
El taller tiene 5 cupos disponibles y solo pueden inscribirse personas mayores 
de 18 años. El sistema debe pedir datos por prompt hasta que se llenen los cupos
 o hasta que el usuario escriba "0"*/

const MaxCupos= 5;
const MinEdad= 18;

let cupos=0;
let nombre="x";
do{
    nombre= prompt("Ingresa tu nombre completo ('0' para finalizar): ");
    if(nombre!=="0"){
        let edad= prompt("Ingresa tu edad: ");
        edad= parseInt(edad);
        if(edad>=MinEdad){
            console.log("Felicidades "+ nombre+" lograste inscribirte al Taller de Programacion!");
            cupos++;
        }else{
            console.log("No te puedes inscribir porque eres menor de edad. ");
        }

    }
}while(cupos<MaxCupos && nombre!=="0");

console.log("Inscripciones finalizadas. Se ocuparon "+cupos+" cupo/s");