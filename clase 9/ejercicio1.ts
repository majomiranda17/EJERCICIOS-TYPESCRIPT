/* 1. Mueblería: Actualización de Precios
En una mueblería, se requiere un sistema que permita actualizar los precios de
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
un identificador único. Implementa las siguientes funciones:
• Añadir un nuevo mueble.
• Actualizar el precio de un mueble después de 3 segundos utilizando
setTimeout().
• Mostrar el inventario de muebles. */

class Muebleria {
  private _inventario: { id: number; nombre: string; precio: number }[] = [];

  public agregarMueble(id: number, nombre: string, precio: number): void {
    const existe = this._inventario.some((m) => m.id === id);
    if (existe) {
      console.log(`ya existe un mueble con el ID ${id}`);
    } else {
      this._inventario.push({ id, nombre, precio });
      console.log(`mueble agregado: ${nombre}, Precio: $${precio}`);
    }
  }
  public actualizarPrecio(id: number, nuevoPrecio: number): void {
    const mueble = this._inventario.find((m) => m.id === id);
    if (!mueble) {
      console.log(`no se encontró un mueble con el ID ${id}`);
      return;
    }

    console.log(`actualizando precio de ${mueble.nombre}...`);

    setTimeout(() => {
      mueble.precio = nuevoPrecio;
      console.log(`precio actualizado: ${mueble.nombre} ahora cuesta $${nuevoPrecio}`);
    }, 3000);
  }


  public mostrarInventario(): void {
    console.log("inventario actual:");
    if (this._inventario.length === 0) {
      console.log("no hay muebles en el inventario.");
    } else {
      this._inventario.forEach((m) => {
        console.log(`ID: ${m.id}, Nombre: ${m.nombre}, Precio: $${m.precio}`);
      });
    }
  }
}

const muebleria = new Muebleria();
muebleria.agregarMueble(1, "silla de madera", 120);
muebleria.agregarMueble(2, "mesa redonda", 350);
muebleria.agregarMueble(3, "sofá", 800);
muebleria.mostrarInventario();


muebleria.actualizarPrecio(2, 400);
setTimeout(() => {
  muebleria.mostrarInventario();
}, 4000);