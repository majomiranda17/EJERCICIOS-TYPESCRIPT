function saludar(nombre: string, saludo?: string ): string { 
    if (saludo) {
        return `${saludo}, ${nombre}`
    }
    return `hola, ${nombre}`
}
console.log(saludar('majolocha'));
 