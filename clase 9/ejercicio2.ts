/* 2. Florería: Envío Programado de Pedidos

Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
contener el nombre del cliente, la cantidad de flores y el tipo de flores.
Implementa las siguientes funciones:
• Añadir un pedido.
• Programar el envío de un pedido utilizando setTimeout() para simular un
retraso de 5 segundos.
• Mostrar todos los pedidos pendientes */

class Floreria {
  private _pedidos: { cliente: string; cantidad: number; tipo: string }[] = [];

  public agregarPedido(cliente: string, cantidad: number, tipo: string): void {
    if (cantidad <= 0) {
      console.log(`la cantidad debe ser mayor que 0.`);
      return;
    }
    this._pedidos.push({ cliente, cantidad, tipo });
    console.log(`pedido agregado: ${cliente} - ${cantidad} ${tipo}`);
  }

  public programarEnvio(cliente: string): void {
    const pedido = this._pedidos.find(p => p.cliente === cliente);
    if (!pedido) {
      console.log(`no se encontró un pedido para el cliente ${cliente}.`);
      return;
    }

    console.log(`enviando pedido de ${pedido.cliente} en 5 segundos...`);

    setTimeout(() => {
      this._pedidos = this._pedidos.filter(p => p !== pedido);
      console.log(`pedido enviado: ${pedido.cantidad} ${pedido.tipo} para ${pedido.cliente}.`);
    }, 5000);
  }


  public mostrarPedidos(): void {
    console.log("pedidos pendientes:");
    if (this._pedidos.length === 0) {
      console.log("no hay pedidos pendientes.");
    } else {
      this._pedidos.forEach((p, index) => {
        console.log(`${index + 1}. Cliente: ${p.cliente}, Flores: ${p.cantidad} ${p.tipo}`);
      });
    }
  }
}

const floreria = new Floreria();

floreria.agregarPedido("majo", 17, "rosas rojas");
floreria.agregarPedido("jhan", 18, "tulipanes amarillos");
floreria.agregarPedido("josefina", 6, "lirios blancos");

floreria.mostrarPedidos();
floreria.programarEnvio("jhan");

setTimeout(() => {
  floreria.mostrarPedidos();
}, 6000);