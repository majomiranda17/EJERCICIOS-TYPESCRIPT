// Definicio de una clase 
class Gato {
    // Propiedades 
    public nombre: string;
    public edad: number;
    private raza: string; 

    // Constructor 
    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    // Metodos:
    // 1.Metodos para obtener la info del gato 
    public obtenerInformacion(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Raza: ${this.raza}`
    }

    //". Metodos para cambiar la raza del gato "
    public cambiarRaza(nuevaRaza: string): void {
        this.raza = nuevaRaza;
    }
}

// Creamos una instancia de la clave 
const gato1 = new Gato ("Michi", 2 , "Angora")

console.log(gato1.obtenerInformacion());

// Cambiar raza
gato1.cambiarRaza("Siames");
console.log(gato1.obtenerInformacion());
