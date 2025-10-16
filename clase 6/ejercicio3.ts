/* Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)
Consigna: Crea dos interfaces: Volador con el método volar() y Transportable
con el método transportar(). Luego crea una clase Avion que implemente ambas
interfaces y sobrescriba los métodos. */

interface Volador {
    volar(): void
}

interface Transportable {
    transportar(): void
}

class Avion implements Volador , Transportable{
    volar(): void {
        console.log("el avion esta volando por las nubes");
    }

    transportar(): void {
        console.log("el avion esta transportando pasajeros y carga pesada");
    }
}
 const miAvion = new Avion();
 miAvion.volar();
 miAvion.transportar();