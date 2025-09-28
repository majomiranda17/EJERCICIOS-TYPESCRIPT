/* Ejercicio 2: Creación de Objetos y Atributos
1. Define un objeto que represente un libro con las siguientes propiedades:
título, autor, y año de publicación.
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola. */

interface libro {
    Titulo: string,
    Autor: string,
    Aniopublicacion: number

}
const libroFavorito: libro = {
    Titulo: "El coronel no tiene quien le escriba",
    Autor: "Gabriel Garcia Marquez",
    Aniopublicacion: 1961
}

console.log(`Titulo: ${libroFavorito.Titulo},
     Autor: ${libroFavorito.Autor}, Anio de publicacion: ${libroFavorito.Aniopublicacion}`);