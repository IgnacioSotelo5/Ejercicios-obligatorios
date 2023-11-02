class Deportista {
    public nombre: string
    public edad: number
    protected pais: string
    constructor(nombre: string, edad: number, pais: string) {
        this.nombre = nombre
        this.edad = edad
        this.pais = pais
    }

    presentarse(){
        return `Hola! Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy de  ${this.pais}`
    }

    competir(){
        return `${this.nombre} está compitiendo`
    }
}

class Nadador extends Deportista{
    private estiloPreferido: string;
    constructor(estiloPreferido: string, nombre: string, edad: number, pais: string){
        super(nombre, edad, pais)
        this.estiloPreferido = estiloPreferido
    }
    nadar(){
        return `${this.nombre} está nadando en estilo ${this.estiloPreferido}`
    }
}

class Corredor extends Deportista{
    private distanciaPreferida: number;

    constructor(distanciaPreferida: number, nombre: string, edad: number, pais: string){
        super(nombre, edad, pais);
        this.distanciaPreferida = distanciaPreferida;
    }
    correr(){
        return `${this.nombre} está corriendo una carrera de ${this.distanciaPreferida} metros`
    }
}


class Triatleta extends Deportista{
    private nadador: Nadador;
    private corredor: Corredor;

    constructor(nombre: string, edad: number, pais: string, nadador: Nadador, corredor: Corredor){
        super(nombre, edad, pais);
        this.nadador = nadador;
        this.corredor = corredor;
    }

    competirTriatlon(){
        return `${this.nombre} está compitiendo un triatlón. \n ${this.nadador.nadar()} \n ${this.corredor.correr()}`
    }
}

const nadador = new Nadador ('mariposa', 'John', 22, 'USA')
const corredor = new Corredor (100, 'John', 22, 'USA')
const triatleta = new Triatleta ('John', 22, 'USA', nadador, corredor)


console.log(
triatleta.presentarse(), 
`\n`,
`\n`,
triatleta.competirTriatlon()
);
