// Alias de tipos

import { nombreUsuario } from "../../clase1/ejercicio4";

 
// 1. alias tipos primitivos 
type ID = number;
type Nombre = string;
type Activo = boolean;

// usando los alias para declarar variables 
let usuarioId: ID = 123;
let NombreUsuarioId: Nombre = "Majo";
let cuentaActiva : Activo = true;

console.log(`Usuario: ${nombreUsuario}, ID : ${usuarioId}, cuenta activa: ${cuentaActiva},`)
