/*Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
titulo (string), autor (string) y paginas (number). La función debe devolver un
objeto con esas propiedades. Luego, crea dos libros utilizando la función y
muestra sus detalles en la consola.*/

function crearLibro(titulo:string ,autor:string, paginas:number) {
    return {
    titulo: titulo,
    autor: autor,
    paginas: paginas 
    };
}
let libro1= crearLibro("Cronica de una muerte anunciada","Gabriel Garcia Marquez",158);
let libro2= crearLibro("Relato de un naufrago","Gabriel Garcia Marquez",176);

console.log(libro1,libro2)

