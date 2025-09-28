/* Ejercicio 5: Interfaz

1. Define una interfaz llamada IPersona con propiedades nombre, edad y un
método presentarse().
2. Crea una clase llamada Persona que implemente esta interfaz y
proporciona la implementación del método presentarse(). */

interface IPersona {
    Nombre: string;
    Edad: number;

    presentarse: ()=> void
}

class Persona implements IPersona{
    Nombre: string;
    Edad: number;

    constructor(Nombre: string,  Edad: number,){
        this.Nombre = Nombre;
        this.Edad = Edad;
    }
    presentarse(): void {
        console.log(`Hola, me llamo ${this.Nombre} y tengo ${this.Edad} anios.`);
  }
}
const persona1 = new Persona("María", 17);
persona1.presentarse();


