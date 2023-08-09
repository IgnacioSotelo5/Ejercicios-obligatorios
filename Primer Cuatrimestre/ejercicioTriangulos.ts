/*
-Realice un programa que devuelva el area del triangulo usando los siguientes pares de base-altura: (1,2) (2,4) (3,6) (4,8) (5,10) (6,12) (7,14)
*/

let calcularAreaTriangulo = (base: number, altura: number) =>{
    return (base*altura) / 2;
    
}
console.log(`El area es: ${calcularAreaTriangulo(1,2)}`);
console.log(`El area es: ${calcularAreaTriangulo(2,4)}`);
console.log(`El area es: ${calcularAreaTriangulo(3,6)}`);
console.log(`El area es: ${calcularAreaTriangulo(4,8)}`);
console.log(`El area es: ${calcularAreaTriangulo(5,10)}`);
console.log(`El area es: ${calcularAreaTriangulo(6,12)}`);
console.log(`El area es: ${calcularAreaTriangulo(7,14)}`);
