import * as rls from 'readline-sync'
/* 
• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo 
*/
let num: number = rls.questionInt("Ingrese un numero: ");
let max: number= 0;
while (num != 0){
    if (num >= max){ //Para hallar el minimo, invertir el signo >.
        max=num;
    }
    num = rls.questionInt("Ingrese un numero: ")
}

console.log(`El numero maximo es: ${max}`);
