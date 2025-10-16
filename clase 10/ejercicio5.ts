/* Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida
Consigna:
Crea una secuencia de promesas que simulen el flujo de un usuario que se
registra en una plataforma y luego recibe un mensaje de bienvenida. La
secuencia debe ser:
1. Registrar Usuario (promesa que tarda 2 segundos).
2. Enviar Email de Bienvenida (promesa que tarda 1 segundo).
3. Mostrar Mensaje Final al completar ambas tareas.
Si alguna de las promesas falla, debe imprimirse un mensaje de error. */

function registrarUsuario(nombre: string): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(`Registrando al usuario ${nombre}...`);
    setTimeout(() => {
      const exito = Math.random() > 0.2;
      if (exito) {
        resolve(`Usuario ${nombre} registrado correctamente.`);
      } else {
        reject(`Error al registrar al usuario ${nombre}.`);
      }
    }, 2000);
  });
}

function enviarEmailBienvenida(nombre: string): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log(`Enviando correo de bienvenida a ${nombre}...`);
    setTimeout(() => {
      const exito = Math.random() > 0.2;
      if (exito) {
        resolve(`Correo de bienvenida enviado a ${nombre}.`);
      } else {
        reject(`Error al enviar el correo de bienvenida a ${nombre}.`);
      }
    }, 1000);
  });
}

registrarUsuario("Laura")
  .then(mensajeRegistro => {
    console.log(mensajeRegistro);
    return enviarEmailBienvenida("Laura");
  })
  .then(mensajeEmail => {
    console.log(mensajeEmail);
    console.log("Proceso completo: Usuario registrado y correo enviado.");
  })
  .catch(error => {
    console.log("Ocurrió un error en el proceso:", error);
  });