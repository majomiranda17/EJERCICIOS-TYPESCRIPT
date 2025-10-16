/* Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
Implementa una clase Calculadora que tenga un método sumar. El método debe
estar sobrecargado para permitir la suma de:
 Dos números enteros.
 Tres números enteros.
 Dos cadenas, concatenando las dos cadenas. */

 class Calculadora {
    sumar(a: number, b:number): number;

    sumar(a: number, b: number, c: number): number;

    sumar(a: string, b: string, c?: string): string;

    sumar(a: number | string, b: number | string, c?: number | string): number | string | null {
        if (typeof a === "number" && typeof b === "number") {
            if (c !== undefined) {
                return a + b +  (c as number); 
            }
            return a + b; 
        }

        
        if (typeof a === "string" && typeof b === "string") {
            return a + b; 
        }
        return null;
    }
}

// Pruebas
const calculadora = new Calculadora();
console.log(calculadora.sumar(2, 3));          
console.log(calculadora.sumar(1, 2, 3));       
console.log(calculadora.sumar("oliiii, ", "world",)); 
console.log(calculadora.sumar("oliiii, ", "como", "estan")); 