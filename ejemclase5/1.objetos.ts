// Definicion de interfaz 
interface Estudiante {
    nombre: string, // Propiedad: tipo
    edad: number,
    materiaFavorita: string,
    promedio: number

    saludar: () => void // Metodo saludar(que no devuelve valor)
    obtenerDetalles: () => string // Metodo que devuelve cadena de texto 
}

// Creacion de un objeto que cumple con la interfaz 
const miEstudiante : Estudiante = {
    nombre: 'majo',
    edad: 17,
    materiaFavorita: 'ingles', 
    promedio: 8.7,

    saludar: function() {
        console.log(`Hola, soy ${miEstudiante.nombre}`);
    },

    obtenerDetalles: function() {
        return `Nombre:${miEstudiante.nombre}, tengo ${miEstudiante.edad} anios,
         Mi materia favorita es ${miEstudiante.materiaFavorita}, Mi promedio es ${miEstudiante.promedio}`
    }
}

// Uso de los metodos: 

miEstudiante.saludar()

const detalles = miEstudiante.obtenerDetalles()
console.log(detalles);
