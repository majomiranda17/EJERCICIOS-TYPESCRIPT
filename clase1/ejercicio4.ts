/*Ejercicio 4: Parámetros opcionales simulados
Declara dos variables, una para almacenar un nombre y otra para almacenar una
edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no
proporcionada". Si se asigna la edad, imprímela junto al nombre.*/

export let nombreUsuario: string = "liliana"; 
console.log(nombreUsuario);
let edadIndefinida: number | undefined = undefined; 

if  (edadIndefinida !== undefined) {
  console.log(`Nombre: ${nombreUsuario}, Edad: ${edadIndefinida}`);
} else {
  console.log(`Nombre: ${nombreUsuario}, Edad no proporcionada`);
}





