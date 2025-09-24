/* Actividad 5: Usar aserciones dobles
Crea una variable de tipo any y haz una conversión con aserciones dobles para
convertirla en un number. Muestra el resultado */

let boxes: any = 37;
let longitud: number = (boxes as any as number);
console.log(longitud);

