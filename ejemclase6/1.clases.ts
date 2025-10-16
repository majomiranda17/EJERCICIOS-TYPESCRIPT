// HERENCIA

// Clase padre /super clase/ clase base

export class Animal {
    name: string; // propiedad que almacena el nombre el animal 
    
    constructor (name: string ){
        this.name = name
    }
    makeSound(): void {
        console.log(`${this.name} hace un sonido`);
    }
}

// Clase hija / sub clase / clase derivada 
class Dog extends Animal {
    raza: string; // nueva propiedad para la clase dog 
    
    constructor(name: string , raza: string){
        super(name) // llama al constructor de la clase animal para inicializar name 
        this.raza = raza
    }

    // sobrescritura de metodo de clase padre 
    makeSound(): void {
        console.log(`${this.name} ladra`);
    }
    juego(): void {
        console.log(`${this.name} esta buscando la pelota`);
    }
}

// Instanciar 
export const genericAnimal = new Animal('Animal')
genericAnimal.makeSound()

const myDog = new Dog('Luna', 'caniche')
myDog.makeSound()
myDog.juego()
