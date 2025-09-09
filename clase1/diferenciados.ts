// ejemplos de tipos de diferenciados en typescript 

// 1.any: permite almacenar cualquier tipo de datos 

let variableAny: any = `hola soy un any`
console.log(variableAny);
let variableAny2: any = `17`
console.log(variableAny2);
let variableAny3: any = {name: `majo`}
console.log(variableAny3); 

// 2.unknow: similar a any pero mas robus y seguro (requiere verificacion) 

let variableaUnknow: unknown = `hola soy un unknow`
console.log(variableaUnknow);

// 3.void: se usa en funciones q gral no retornan nada 

function logMessage(message: string): void{
    console.log(message);
}
logMessage(`esto es una funcion void`)

// 4.never: representa el tipo de funciones que nunca retornan 

function  throwError(errorMgs: string): never{
    throw new Error(errorMgs)
}
throwError(`esto es un error y nunca retorna`)