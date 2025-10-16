/* Ejercicio 4: Herencia de Métodos y Sobrescritura
Consigna: Define una clase base Flor con el método describir(), que imprime un
mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol,
cada una sobrescribiendo el método describir() con un mensaje específico */

class Flor {
    describir(): void {
    console.log('una flor acuatica');
    }
}
class Rosa extends Flor{
    describir(): void {
        console.log('una rosa, tiene petalos negros')
    }
}
class Astromelia extends Flor{
    describir(): void {
        console.log('una astromelia, se abre con el agua')
    }
}
const rosa = new Rosa();
rosa.describir();

const astromelia = new Astromelia();
astromelia.describir();  