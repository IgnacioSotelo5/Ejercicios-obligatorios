class Personaje {
    private name: string;
    private age: number;
    private health: number = 100;
    private level: number = 1;
    private country: string;
    private specialMove: string;

    constructor(name: string, age: number, country: string, specialMove: string) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.specialMove = specialMove;
        this.level
        this.health
    }
    receiveDamage(damage: number){
        this.health -= damage;
        console.log(`${this.name}, received ${damage} damage points. Current health ${this.health}`);    
    }
    increaseLevel(){
        this.level ++;
        console.log(`${this.name} rose to level ${this.level}`);
    }
    useSpecialMove(target: string){
        console.log(`${this.name} used ${this.specialMove} against ${target}`);
        
    }
}

class Enemy {
    private name: string;
    private type: string;
    private damage: number;
    private personaje: Personaje;

    constructor(name: string, type: string, damage: number){

    }
}

const Hero1 = new Personaje('Sub-Zero', 28, 'Japon', 'Freeze')

console.log(Hero1);
