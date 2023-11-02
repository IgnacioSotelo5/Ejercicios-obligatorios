 class Auto {
    private marca : string;
    private modelo : string;
    private color : string
    private año: number | undefined;

    constructor(marca: string, modelo: string, color : string, año?: number) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.año = año;
        
        if (año == undefined) {
            this.año = -1
        } else {
            this.año = año;
        }
    }

}

let auto1 : Auto = new Auto ('Chevrolet', 'Camaro', 'Amarillo', 2022)

let auto2: Auto = new Auto('Ford', 'Mustang', 'Negro')
console.log(auto1);
console.log(auto2);

