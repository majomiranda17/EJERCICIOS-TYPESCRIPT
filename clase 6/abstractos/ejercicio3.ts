/* Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
Crea una interfaz Usuario que tenga las propiedades:
• nombre (obligatoria).
• edad (opcional).
• readonly id (solo lectura).
Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta
modificar la propiedad id para mostrar cómo se aplican las restricciones de solo
lectura. */

interface Usuario {
    nombre: string;
    edad?: number;
    readonly id: number;
}

class UsuarioConcreto implements Usuario {
    constructor(public id: number ,  public nombre: string, public edad?: number ,) {} 
    }

    /* mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}, Id: ${this.id}, edad: ${this.edad ?? "no dicha"}`);
    } */


const usuario = new UsuarioConcreto(2 ,"majo", 17);
console.log(usuario.nombre);