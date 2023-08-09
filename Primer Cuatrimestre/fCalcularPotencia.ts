/* 
- Realice un programa que devuelva la potencia de un numero
- La base y el exponente deben ser ingresados por teclado
- Solo deben admitirse exponentes mayores o iguales a 0
- Recuerde que el resultado de un numero elevado a 0 es 1.
- Separe la lógica de calcular la potencia utilizando metodos
*/

import * as rls from 'readline-sync'

let base: number = rls.questionInt("Ingrese un numero como base: ")
let exponente: number = rls.questionInt("Ingrese un numero mayor o igual a 0 como exponente : ")

let calcularPotencia = (base: number, exponente: number) => {
    while(exponente < 0){
        exponente = rls.questionInt("Debe ingresar un numero mayor o igual a 0: ")
    }
    return base ** exponente
}


console.log(calcularPotencia(base, exponente));


