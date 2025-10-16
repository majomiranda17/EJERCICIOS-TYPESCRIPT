/* Ejercicio 2: Herencia Simple con Acceso
Consigna: Crea una clase base Maestro con propiedades protegidas nombre y
materia, y un método enseñar(). Luego, crea una clase derivada
MaestroMatematicas que extienda de Maestro y sobrescriba el método
enseñar() para imprimir un mensaje específico de matemáticas. */

class Maestro {
    protected nombre: string;
    protected materia: string;

    public constructor(nombre: string, materia: string){
        this.nombre = nombre;
        this.materia = materia;
    }

    enseñar(): void{
        console.log(`soy ${this.nombre} y dicto la materia de ${this.materia}`);
    }
}

class MaestroMatematicas extends Maestro{
    constructor(nombre: string){
        super(nombre, "matematicas");
    }
    enseñar(): void {
         console.log(`soy ${this.nombre} y dicto la materia de ${this.materia} con mucha paciencia `); 
    }
}
const profesora1 = new Maestro('jhan' , 'ingles');
profesora1.enseñar()

const profesora2 = new MaestroMatematicas('alfredo');
profesora2.enseñar()







