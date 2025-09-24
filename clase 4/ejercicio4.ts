/* Actividad 4: Usar aserciones de tipo
Declara una variable de tipo any y usa una aserción para tratarla como string,
accediendo a la propiedad .length. */

let caja: any = "Holaaaa :o"
let texto: number = (caja as string).length
console.log(`lo que hay en la caja es: ${texto}`);
