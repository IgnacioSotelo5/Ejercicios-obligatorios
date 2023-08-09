/*
Desarrolle un algoritmo que 
permita cargar alumnos y sus 
notas en los tres trimestres
• Se debe permitir obtener el 
promedio anual (es decir, de sus 
tres notas) de un alumno 
(ingresado por el usuario)
• Luego de resolverlo, pensar en 
aprovechar métodos y discutir 
cómo representar la información
*/
import * as rls from 'readline-sync'

let alumnos: string = rls.question('Ingrese nombre del alumno: ')
let notas: number = 0;
let notaTotal: number = 0;
let promAnual: number = 0;

while(alumnos !== ''){

    for(let i = 0; i < 3; i++){
        notas = rls.questionInt('Ingrese nota del trimestre: ')
        notaTotal = notaTotal + notas 
    }
    promAnual = notaTotal / 3
    console.log(`El promedio anual del alumno es: ${promAnual}`);
    
    alumnos = rls.question('Ingrese nombre del alumno: ')
    notaTotal = 0;
}
