import { log } from 'console';
let rls = require('readline-sync')



function sum (){
    let a: number = rls.questionInt('Add a number')
    let b: number = rls.questionInt('Add a number')

    return log(a+b)
}


sum()