/*
Cantidad y Distribución de Positivos

• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total
*/
import * as rls from 'readline-sync'

let num : number = rls.questionInt("Ingrese un numero: ")
let positivos: number = 0;
let total: number = 0;
let porcentaje: number= 0;

while (num !=0 ){
    if (num > 0 && num != 0){
        positivos += 1;
    }
    total += 1;
    porcentaje = positivos / total * 100
    num = rls.questionInt("Ingrese un numero: ")
    
}

console.log(`${positivos} positivos, ${porcentaje}% del total.`);

