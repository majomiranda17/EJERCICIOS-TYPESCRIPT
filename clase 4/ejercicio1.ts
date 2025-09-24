/* Actividad 1: Usar For...In para recorrer propiedades de un objeto
Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un
bucle for...in para recorrer y mostrar cada propiedad y su valor. shifl+alt+a*/

let Participante ={
    nombre: "majose",
    edad: 18 ,
    ciudad: 'Bogota'
}

for (let propiedad in Participante) {
    console.log(`Clave: ${propiedad}, Valor: ${Participante[propiedad as keyof typeof Participante]}`);
}