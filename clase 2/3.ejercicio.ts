let deportista = {
    nombre: "maria",
    deporte: "patinaje",
    energia: 80
}

function entrenar(deportista: { nombre: string; deporte: string; energia: number }, horas: number) {
    deportista.energia -= horas * 5;
} 
 entrenar(deportista, 2);

console.log(`nombre:${deportista.nombre}, deporte: ${deportista.deporte}, energia:${deportista.energia}`);

