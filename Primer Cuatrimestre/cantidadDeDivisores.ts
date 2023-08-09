/* 
- Implemente un metodo llamado cantidadDeDivisores que reciba un numero entero y devuelva la cantidad de divisores
- Por ejemplo, para el numero 16, sus divisores son 1, 2 ,4, 8, 16, por lo que la respuesta deberia ser 5
-Re-utilice el metodo esMultiplo implementado para el ejercicio anterior
*/

import * as rls from 'readline-sync'

let esMultiplo = (num1: number, num2: number): boolean => {
    return num1 % num2 === 0 ;    
}

let num: number = rls.questionInt("Ingrese un numero entero: ")

let cantidadDeDivisores = (num: number) => {
    let divisores = 0;
    for(let i = 0; i <= num; i++ ){
        if (esMultiplo(num, i) === true){
            divisores = divisores + 1;
        }
    }
    return console.log(`La cantidad de divisores es: ${divisores}`);
    
}

cantidadDeDivisores(num)