/*
• Diseñar un algoritmo que recorra las 
butacas de una sala de cine y determine 
cuántas butacas desocupadas hay 
• Suponga que para modelar este 
problema, se utiliza un arreglo con 
valores lógicos
• La presencia de un valor verdadero (true) en 
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el 
arreglo indica que la butaca está desocupada 
*/

let arrButacas: any = [];
let freeSeats: number = 0;

for (let i = 0; i < 150 ; i++){
    let randomBoolean = Math.random() >= 0.5;
    arrButacas [i] = randomBoolean

    if(arrButacas[i] === false){
        freeSeats += 1;
    } 
}


console.log(`Quedan ${freeSeats} butacas disponibles`);

