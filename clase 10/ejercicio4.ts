/* Ejercicio 4: Promise.race() - Carrera entre Tareas
Consigna:
Crea tres promesas que representen tareas con tiempos de ejecución aleatorios.
Usa Promise.race() para que el programa imprima solo la primera tarea que se
complete. Luego:
1. Asegúrate de que se imprime qué tarea ganó la carrera.
2. Controla posibles errores si alguna de las promesas falla. */

function crearTarea(nombre: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const tiempo = Math.floor(Math.random() * 4000) + 1000;
    console.log(`Iniciando ${nombre} (tardará ${tiempo} ms)...`);

    setTimeout(() => {
      const exito = Math.random() > 0.2; 
      if (exito) {
        resolve(`${nombre} completada en ${tiempo} ms`);
      } else {
        reject(`Error en ${nombre}`);
      }
    }, tiempo);
  });
}

const tarea1 = crearTarea("Tarea 1");
const tarea2 = crearTarea("Tarea 2");
const tarea3 = crearTarea("Tarea 3");


Promise.race([tarea1, tarea2, tarea3])
  .then(resultado => {
    console.log(`Ganadora: ${resultado}`);
  })
  .catch(error => {
    console.log(`Fallo en la carrera: ${error}`);
  });