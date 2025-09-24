/* Actividad 3: Crear una función genérica
Crea una función genérica que tome un parámetro de cualquier tipo y lo
devuelva. Prueba la función con diferentes tipos de datos.  */

function alumnas <T>(lista: T) : T {
    return lista
}

// Ejemplo de uso 
let edad = alumnas<number>(8) // T es un numero 
let nombre = alumnas<string>("Majo")
let inscrita = alumnas<boolean>(true)
console.log(edad,nombre,inscrita);