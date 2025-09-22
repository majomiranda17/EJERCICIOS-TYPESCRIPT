// RECORDAR:
// FOR IN -> CLAVES / INDICES (arrays)
// FOR OF -> VALORES (iterables) NO objeto tradicional 

//Ejemplo basico con array 
export let lenguajes = ["javascript", "Python", "Java"]

for (let lenguaje of lenguajes) {
    console.log(`Ejemplo de array: ${lenguaje}`);
}

// Ejemplo con una cadena de texto 
let saludo = "hola muchachasss"

for (let letra of saludo) {
    console.log(`Ejemplo cadena de texto: ${letra}`);
}