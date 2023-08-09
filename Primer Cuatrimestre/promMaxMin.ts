/*
Diseñar un algoritmo que
lea números enteros hasta
teclear 0
• Determinar y mostrar el
máximo, el mínimo y la
media de todos los
números ingresados
• Pensar cuidadosamente
cómo debemos inicializar
las variables
*/
import * as rls from 'readline-sync'

let num: number = rls.questionInt("Ingrese un numero entero: ")
let numPlus: number = rls.questionInt("Ingrese un numero entero: ")
let numControl: number = 1;
let total: number = 1;
let max: number = 0;
let min: number = 0;
let groupNum: number = num + numPlus;
let promedio: number = 0;

if(numPlus > num){
    max = numPlus
    min = num
    
} else{
    max = num
    min = numPlus
}

while (numControl != 0){
    
    
    numControl = rls.questionInt("Ingrese un numero entero: ")

    if(numControl > max && numControl !== 0){
        max = numControl
    } else if (numControl < min && numControl !== 0) {
        min = numControl
    }
    total = total + 1;
    groupNum = groupNum + numControl
    promedio = groupNum / total;
}

console.log(`El maximo es ${max}, el minimo es ${min} y la media es ${promedio}, sobre un total de ${total} numeros ingresados.`)