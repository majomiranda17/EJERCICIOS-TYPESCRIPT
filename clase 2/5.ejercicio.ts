/*Consigna: Crea una función llamada sumarTodos que acepte una cantidad
indefinida de números y devuelva su suma. Luego, llama a la función con varios
números y muestra el resultado en la consola.*/

function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acum, actual) => acum + actual , 0);
}
console.log(sumarTodos(1,2,3,4,5,6));
