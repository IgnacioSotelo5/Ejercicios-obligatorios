class Calculator {
    public Add(a: number, b: number): number{
        return a + b;
        
    }
    public Subtract(a: number, b: number): number{
        return a - b;
        
    }
    public Multiply(a: number, b: number): number{
        return a * b;
        
    }
    public Divide(a: number, b: number): number | string{
        if(b === 0 ) return `Can't divide by 0`
        return a / b;
        
    }
}

const calc01 = new Calculator;
console.log(calc01.Add(10, 5));
console.log(calc01.Divide(10, 0));
