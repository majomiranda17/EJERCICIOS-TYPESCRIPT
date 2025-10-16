/* Ejercicio 2: Clases Abstractas - Sistema de Vehículos
Crea una clase abstracta Vehiculo con una propiedad velocidad y un método
abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa
los modificadores de acceso para controlar la visibilidad de las propiedades. */

abstract class Vehiculo {

    constructor(protected velocidad: number){}
     
    abstract mover(): void;

    acelerar(): void {
        this.velocidad += 20;
        console.log(`Acelerando el vehiculo a ${this.velocidad} km`);
    }
 }

 class Auto extends Vehiculo{
    mover(): void {
        console.log("el auto esta recorriendo la carretera");
    }
 }

class Bicicleta extends Vehiculo{
    mover(): void {
        console.log("la bicicleta recorre la ciclovia");
    }
}
    
const auto = new Auto(40);
auto.mover();
auto.acelerar();

const bicicleta = new Bicicleta(10);
bicicleta.mover();
bicicleta.acelerar();

    
