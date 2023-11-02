class Person{
    private name: string;
    private dob: number

    constructor(name: string, dob: number){
        this.name = name;
        this.dob = dob;
    }

    setName(name: string){
        this.name = name
    }
    getAge(dob: string) {
        let today = new Date()
        let birthdate = new Date(dob)
        let age = today.getFullYear() - birthdate.getFullYear()
        let months = today.getMonth() - birthdate.getMonth()

        console.log(birthdate.getFullYear());
        console.log(today.getFullYear());
        
        if (
          months < 0 ||
          (months === 0 && today.getDate() < birthdate.getDate())
        ) {
          age--
        }
        this.dob = age
      }
    getInfo() {
        return console.log(`
        Name: ${this.name}
        Age: ${this.dob}
        `)
    }
}

const Person01 = new Person('Ignacio', 19/10/2001)

Person01.getAge('2001/10/19')
Person01.getInfo()



