/* 3. Compañía de Seguros: Renovación Automática de Pólizas

Desarrolla un sistema que gestione las pólizas de seguros de una compañía.
Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y
una fecha de renovación. Implementa las siguientes funciones:
• Añadir una póliza.
• Programar la renovación de la póliza utilizando setTimeout().
• Mostrar todas las pólizas activas. */

class CompaniaSeguros {
  private _polizas: {
    id: number;
    cliente: string;
    monto: number;
    fechaRenovacion: Date;
  }[] = [];

  public agregarPoliza(id: number, cliente: string, monto: number, fechaRenovacion: Date): void {
    const existe = this._polizas.some(p => p.id === id);
    if (existe) {
      console.log(`Ya existe una póliza con el ID ${id}.`);
      return;
    }

    this._polizas.push({ id, cliente, monto, fechaRenovacion });
    console.log(`Póliza agregada: ID ${id}, Cliente: ${cliente}, Monto: $${monto}, Renovación: ${fechaRenovacion.toLocaleDateString()}`);
  }

  public programarRenovacion(id: number): void {
    const poliza = this._polizas.find(p => p.id === id);
    if (!poliza) {
      console.log(`No se encontró la póliza con ID ${id}.`);
      return;
    }

    console.log(`Programando renovación automática para la póliza ID ${id} (${poliza.cliente})...`);

    setTimeout(() => {
      poliza.fechaRenovacion.setFullYear(poliza.fechaRenovacion.getFullYear() + 1);
      console.log(`Póliza ID ${poliza.id} renovada. Nueva fecha: ${poliza.fechaRenovacion.toLocaleDateString()}`);
    }, 5000);
  }

  public mostrarPolizas(): void {
    console.log("Pólizas activas:");
    if (this._polizas.length === 0) {
      console.log("No hay pólizas registradas.");
    } else {
      this._polizas.forEach(p => {
        console.log(
          `ID: ${p.id}, Cliente: ${p.cliente}, Monto: $${p.monto}, Renovación: ${p.fechaRenovacion.toLocaleDateString()}`
        );
      });
    }
  }
}

const compania = new CompaniaSeguros();

compania.agregarPoliza(1, "Laura Gómez", 150000, new Date(2025, 5, 12));
compania.agregarPoliza(2, "Carlos Pérez", 200000, new Date(2025, 8, 20));
compania.agregarPoliza(3, "Ana Torres", 180000, new Date(2025, 10, 1));

compania.mostrarPolizas();

compania.programarRenovacion(2);

setTimeout(() => {
  compania.mostrarPolizas();
}, 6000);
