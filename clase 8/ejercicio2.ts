// ENCAPSULAMIENTO – Ejercicio 7
// Ejercicio de Bodega
// Diseña una clase Bodega que tenga propiedades privadas para nombre, direccion,
//  e inventario (un array de objetos con producto y cantidad). Implementa métodos para agregar productos al inventario, eliminar productos, y listar el inventario. Si se intenta agregar un producto con una cantidad negativa, imprime un mensaje informativo.

export class Bodega {                                       
    private _nombre: string;                              
    private _direccion: string;                           
    private _inventario: { producto: string; cantidad: number }[];

    constructor(nombre: string, direccion: string) {
        this._nombre = nombre;                              
        this._direccion = direccion;                       
        this._inventario = [];                              
    }

    public get nombre(): string {
        return this._nombre;                                
    }


   
    public agregarProducto(producto: string, cantidad: number): void {
        if (cantidad < 0) {
            console.log("La cantidad no puede ser negativa.");     
        } else {
            this._inventario.push({ producto, cantidad });
            console.log(`Producto agregado: ${producto}, Cantidad: ${cantidad}`); 
        }
    }    
    
    public eliminarProducto(producto: string): void { 
        const index = this._inventario.findIndex(item => item.producto === producto);
        if (index === -1) { 
            console.log(`Producto no encontrado: ${producto}`); 
        } else {
            this._inventario.splice(index, 1);             
            console.log(`Producto eliminado: ${producto}`);
        }
    }


    public listarInventario(): { producto: string; cantidad: number }[] {
        return this._inventario;               
    }
}

const bodega = new Bodega("Bodega Central", "Calle Principal 456");
bodega.agregarProducto("Manzanas", 50);
bodega.agregarProducto("Peras", -10);
console.log(`Inventario de la bodega ${bodega.nombre}:`, bodega.listarInventario());  
bodega.eliminarProducto("Naranjas");
bodega.eliminarProducto("Manzanas");
console.log(`Inventario de la bodega ${bodega.nombre}:`, bodega.listarInventario());  
