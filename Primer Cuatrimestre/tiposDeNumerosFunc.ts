import * as rls from 'readline-sync'


let arrTypeNums = () => {
    let dim: number = rls.questionInt('Ingrese la dimension del Array: ')
    let arrNums = new Array (dim)
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

    console.log(`${positivos} positivos, ${negativos} negativos y ${ceros}`);
}

arrTypeNums();