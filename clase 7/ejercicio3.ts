/* Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y
Moto. Cada clase debe sobrescribir el método arrancar de la clase base para
proporcionar una implementación específica de cómo arrancar */

export class Vehiculo {
    arrancar(): void {
        console.log("El vehículo está arrancando...");
    }
}

class Coche extends Vehiculo {
    arrancar(): void {
        console.log("El coche está arrancando con una llave.");
    }
}

class Moto extends Vehiculo {
    arrancar(): void {
        console.log("La moto está arrancando con el botón de encendido.");
    }
}

const vehiculo: Vehiculo = new Coche();
vehiculo.arrancar();

const moto: Vehiculo = new Moto();
moto.arrancar();