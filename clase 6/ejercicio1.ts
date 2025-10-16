/* Ejercicio 1: Herencia Simple
Consigna: Define una clase base Torta que tenga propiedades generales como
nombre y tipo, y un método hacerDescripcion() que devuelva una descripción
general de la torta. Luego, crea una clase derivada TortaDeChocolate que
extienda de Torta y sobrescriba el método hacerDescripcion() para que devuelva
"Soy una torta de chocolate, deliciosa y suave." */

class Torta {
    nombre: string;
    tipo: string;

    constructor(nombre: string, tipo: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    }
    hacerDescripcion(): void {
        console.log(`${this.nombre} de ${this.tipo}`);
    }
}

class TortaDeChocolate extends Torta {
    sabor: string; // nueva propiedad para la clase sabor
    
    constructor(nombre: string , tipo: string, sabor: string ){
        super(nombre, tipo) // llama al constructor de la clase animal para inicializar nombre
        this.sabor = sabor
    }

    // sobrescritura de metodo de clase padre 
    hacerDescripcion(): void {
        console.log(`${this.nombre} , deliciosa y suave`);
    }
}

const miTorta = new Torta('torta de vainilla', 'esponjosa')
miTorta.hacerDescripcion()

const miTortaChocolate = new TortaDeChocolate("Torta de chocolate" ,"deliciosa y", "suave");
miTortaChocolate.hacerDescripcion(); 
