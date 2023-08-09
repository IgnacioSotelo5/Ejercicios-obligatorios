/* 
- Cree un metodo esMultiplo con 2 parametros que devuelva el valor logico verdadero o falso segun si el primer numero que se indique como parametro es multiplo del segundo
- Recuerde que un numero es multiplo de otro si al dividirlo su resto es cero
- Recuerde que la operacion mod permite saber si el resto de una division es cero

*/

let esMultiplo = (num1: number, num2: number): boolean => {
    return num1 % num2 === 0;

}

console.log(esMultiplo(40, 8));

