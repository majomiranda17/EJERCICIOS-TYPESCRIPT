/* 4. Redes Sociales: Notificaciones de Amigos
Implementa un sistema de gestión de amigos en una red social. Cada amigo
debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un
setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una
notificación si un amigo se pone en línea.
*/

class RedSocial {
  private _amigos: { nombre: string; enLinea: boolean }[] = [];
  private _intervalo?: NodeJS.Timeout;

  public agregarAmigo(nombre: string, enLinea: boolean): void {
    const existe = this._amigos.some(a => a.nombre === nombre);
    if (existe) {
      console.log(`El amigo ${nombre} ya existe.`);
      return;
    }

    this._amigos.push({ nombre, enLinea });
    console.log(`Amigo agregado: ${nombre}, Estado: ${enLinea ? "En línea" : "Fuera de línea"}`);
  }


  public cambiarEstado(nombre: string, enLinea: boolean): void {
    const amigo = this._amigos.find(a => a.nombre === nombre);
    if (!amigo) {
      console.log(`No se encontró al amigo ${nombre}.`);
      return;
    }

    amigo.enLinea = enLinea;
    console.log(`El estado de ${nombre} ahora es: ${enLinea ? "En línea" : "Fuera de línea"}`);
  }


  public iniciarVerificacion(): void {
    if (this._intervalo) {
      console.log("La verificación ya está en curso.");
      return;
    }

    this._intervalo = setInterval(() => {
      this._amigos.forEach(amigo => {
        if (amigo.enLinea) {
          console.log(`Notificación: ${amigo.nombre} se ha puesto en línea.`);
        }
      });
    }, 5000);

    console.log("Verificación de estados iniciada (cada 5 segundos).");
  }

  public detenerVerificacion(): void {
    if (this._intervalo) {
      clearInterval(this._intervalo);
      this._intervalo = undefined;
      console.log("Verificación de estados detenida.");
    }
  }


  public mostrarAmigos(): void {
    console.log("Lista de amigos:");
    if (this._amigos.length === 0) {
      console.log("No hay amigos registrados.");
    } else {
      this._amigos.forEach(a => {
        console.log(`${a.nombre} - ${a.enLinea ? "En línea" : "Fuera de línea"}`);
      });
    }
  }
}

const red = new RedSocial();

red.agregarAmigo("majo", false);
red.agregarAmigo("jhan", false);
red.agregarAmigo("josefina", true);

red.mostrarAmigos();


red.iniciarVerificacion();


setTimeout(() => {
  red.cambiarEstado("Carlos", true);
}, 7000);

setTimeout(() => {
  red.cambiarEstado("Laura", true);
}, 12000);

setTimeout(() => {
  red.detenerVerificacion();
}, 20000);
