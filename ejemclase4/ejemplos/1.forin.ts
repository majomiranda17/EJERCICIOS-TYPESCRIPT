// Ejemplo basico de un objeto 
 
let alumna ={
    nombre:"Majo",
    edad: 17,
    curso: "Back end"
}

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);

}

//[propiedad es keyof typeof alumna]: con esto , le decimos al copilador que la variable es una 
// clave valida de las propiedades del objeto alumna. es decir , una de las propiedades de alumna 
// (nombre, edad, curso)

//Ejemplo basico con array 
let lenguajes = ["javascript", "Python", "Java"]

for (let indice in lenguajes) {
    console.log(`Indice: ${indice}, Valor: ${lenguajes[indice]}`);
}