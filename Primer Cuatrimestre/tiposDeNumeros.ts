import * as rls from 'readline-sync'
/* 
SIN METODOS
Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.
1
Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3
*/

let dim: number = rls.questionInt('Ingrese la dimension del Array: ')
let arrNums: number [] = new Array (dim);
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;


for (let i = 0; i < arrNums.length ; i++){
    arrNums[i] = rls.questionInt('Ingrese un numero: ')
    if(arrNums[i] > 0){
        positivos += 1;
    } else if(arrNums[i] < 0){
        negativos += 1;
    } else {
        ceros += 1;
    }
}

console.log(`${positivos} positivos, ${negativos} negativos y 
${ceros}`);
