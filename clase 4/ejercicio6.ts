/* Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y
Aserciones
Crea una función genérica llamada filtrarElementos que reciba un arreglo de
valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of,
filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de
tipo para acceder a las propiedades específicas de string */

function filtrarElementos <T>(valores:T[]): string[] {
    const resultado: string[] = []

    for (const valor of valores){
        if (typeof valor === "string") {
            const texto = valor as string
            console.log(`Texto: ${texto}, longitud: ${texto.length}`)
            resultado.push(texto)
        }
    }
    return resultado;
} 
  
const mezcla = [50, "hola", true, "typescript", false, "ADA.ITM"]

const soloString = filtrarElementos (mezcla);

console.log("string filtrados:", soloString);

