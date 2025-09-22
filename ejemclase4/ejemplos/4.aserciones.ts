// Ejemplo 1. Asercion basica de any a number 

let valorGenerico: any = "este es un texto"
let longitudString: number = (valorGenerico as string).length
console.log(`la longitud del string es: ${longitudString}`);

// Ejemplo 2. aserciones de tipo union 
function obtenerNombreEnMayusculas(nombre: string | null): string{
    if (nombre){
        return (nombre as string).toUpperCase()
    } else {
        return "nombre no proporcionado"
    }
}

console.log(obtenerNombreEnMayusculas("Majo"));
console.log(obtenerNombreEnMayusculas(null));

// Ejemplo 3. Aserciones con unknow 
let valorDesconocido : unknown = "este es un valor desconocido"
if (typeof valorDesconocido === "string") {
    let longitud :number = (valorDesconocido as String).length
    console.log(`la longitud del string desconocido es : ${longitud}`);
}