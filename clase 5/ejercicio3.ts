/* Ejercicio 3: Métodos en Objetos

1. Modifica el objeto del ejercicio anterior para que incluya un método
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola. */

interface libro {
    Titulo: string,
    Autor: string,
    Aniopublicacion: number,
    descripcion: () => string
}
export const libroFavorito: libro = {
    Titulo: "El coronel no tiene quien le escriba",
    Autor: "Gabriel Garcia Marquez",
    Aniopublicacion: 1961,

    
    descripcion: function() {
        return `${libroFavorito.Titulo}, el autor es ${libroFavorito.Autor}
         el Anio de publicacion: ${libroFavorito.Aniopublicacion}`;    
    }
 };

 console.log(libroFavorito.descripcion());




