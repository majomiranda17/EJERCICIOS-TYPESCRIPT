/* Ejercicio 6: Uso de this
1. Crea una clase llamada Mariposa con propiedades nombre y color, y un
método volar() que use this para referirse a las propiedades de la
instancia.
2. Crea una instancia de la clase y llama al método. */

class mariposa {
    nombre: string;
    color: string;

    constructor(nombre: string, color: string) {
        this.nombre = nombre;
        this.color = color;
    }

    volar(): void {
        console.log(`${this.nombre}, es de color: ${this.color}`);
    }
}
const miMariposa = new mariposa("mariposa", "azul");
miMariposa.volar();

