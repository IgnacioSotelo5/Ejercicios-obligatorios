/* Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno) 
*/
import * as rls from 'readline-sync'

let estudiante: string = rls.question("Ingrese nombre del alumno: ");
let notaPractica: number = 0.1;
let notaProblemas: number = 0.5; 
let notaTeorica: number = 0.4;
let notaTotal: number = 0;

while(estudiante !== ''){
    let i: number = 0;
    for (i = 0; i < 3 ; i++){
        let notas: number = rls.questionFloat("Ingrese las notas del alumno: ");
        if (i == 0 && notas >= 0 && notas <= 10){
            notaTotal = notas * notaPractica
        } else if (i == 1 && notas >= 0 && notas <= 10){
            notaTotal = notaTotal + (notas * notaProblemas)
        }else if(notas >= 0 && notas <= 10){
            notaTotal = notaTotal + (notas * notaTeorica)
        } else {
            i = -1
            estudiante = rls.question("Ingrese el nombre del alumno: ")
        }
    }
    console.log(`El alumno ${estudiante}, finalizo con una nota de: ${notaTotal}`);
    estudiante = rls.question("Ingrese el nombre del alumno: ")
}