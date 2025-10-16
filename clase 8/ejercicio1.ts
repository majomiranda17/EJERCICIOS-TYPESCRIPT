//Abstracción – Ejercicio7:
// Ejercicio 7: Comparación Completa - Sistema de Transporte Público
// Diseña un sistema que combine interfaces y clases abstractas para gestionar un transporte público.
// •	Crea una clase abstracta Transporte con un método abstracto mover().
// •	Define dos interfaces:
// o	Electrico con el método cargarBateria().
// o	Combustible con el método llenarTanque().
// •	Implementa dos clases:
// o	AutobusElectrico: Extiende de Transporte e implementa Electrico.
// o	Taxi: Extiende de Transporte e implementa Combustible.

interface Electrico {
    cargarBateria(): void;
}

interface Combustible {
    llenarTanque(): void;
}

abstract class Transporte {
    protected pasajeros: number;
    constructor(pasajeros: number) {
        this.pasajeros = pasajeros;
    }
    
    abstract mover(): void;

    describir(): void {
        console.log(`Este transporte lleva ${this.pasajeros} pasajeros.`);
    }
}

class AutobusElectrico extends Transporte implements Electrico {
    mover(): void {
        console.log("El autobús eléctrico se mueve por la ciudad.");
    }

    cargarBateria(): void {
        console.log("Cargando la batería del autobús ...");
    }
}

class Taxi extends Transporte implements Combustible {
    mover(): void {
        console.log("El taxi se mueve por la carretera.");
    }

    llenarTanque(): void {
        console.log("Llenando el tanque del taxi ...");
    }
}

// Prueba del sistema de transporte
const autobus = new AutobusElectrico(50);

autobus.describir();        
autobus.cargarBateria();    
autobus.mover();            


const taxi = new Taxi(4);
taxi.describir();          
taxi.llenarTanque();       
taxi.mover();