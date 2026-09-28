// ENUM:
// Sirve para crear un conjunto de valores constantes.
// Aquí definimos los 3 roles posibles de un usuario.
enum Rol {
    ADMIN,
    EDITOR,
    LECTOR
}


// TIPO UNIÓN:
// "Estado" solo puede tener uno de estos 3 valores.
// Si intentamos usar otro valor, TypeScript dará error.
type Estado = 'activo' | 'inactivo' | 'pendiente';


// INTERFAZ:
// Define la estructura que debe tener un objeto Usuario.
// Cada Usuario necesita nombre, rol y estado.
interface Usuario {

    nombre: string,  // Texto
    rol: Rol,        // Tiene que ser un valor del enum Rol
    estado: Estado   // Solo puede ser activo, inactivo o pendiente

}


// FUNCIÓN:
// Recibe un objeto Usuario y devuelve un string.
// "usuario: Usuario" → el parámetro debe cumplir la interfaz Usuario.
// ": string" → la función devuelve un texto.
function describirUsuario(usuario: Usuario): string {
    
    // Comprobamos el ROL mediante el enum
    // y el ESTADO mediante el tipo unión.
    //
    // && significa "Y": las dos condiciones deben cumplirse.
    if (usuario.rol === Rol.ADMIN && usuario.estado === 'activo') {
        return `${usuario.nombre} es administrador y está activo.`;
    }


    // Comprobamos si es EDITOR y está activo.
    if (usuario.rol === Rol.EDITOR && usuario.estado === 'activo') {
        return `${usuario.nombre} es editor y está activo.`;
    }


    // Comprobamos únicamente el estado.
    if (usuario.estado === 'pendiente') {
        return `${usuario.nombre} tiene su cuenta pendiente.`;
    }


    // Comprobamos si el usuario está inactivo.
    if (usuario.estado === 'inactivo') {
        return `${usuario.nombre} está inactivo.`;
    }


    // Si ninguna de las condiciones anteriores se cumple,
    // llegamos a este return.
    //
    // Rol[usuario.rol] obtiene el nombre del valor del enum.
    // Por ejemplo: Rol[0] → "ADMIN".
    return `${usuario.nombre} tiene el rol ${Rol[usuario.rol]} y está activo.`;
}


// ARRAY TIPADO:
// Usuario[] significa "array de objetos de tipo Usuario".
// Todos los elementos deben cumplir la interfaz Usuario.
const usuarios: Usuario[] = [

    {
        nombre: "Ana",
        rol: Rol.ADMIN,
        estado: "activo"
    },

    {
        nombre: "Pedro",
        rol: Rol.EDITOR,
        estado: "activo"
    },

    {
        nombre: "Laura",
        rol: Rol.LECTOR,
        estado: "pendiente"
    },

    {
        nombre: "Carlos",
        rol: Rol.LECTOR,
        estado: "inactivo"
    }
];


// FOREACH:
// Recorre todos los elementos del array.
// En cada vuelta, "usuario" representa un elemento del array.
usuarios.forEach(usuario => {

    // Llamamos a describirUsuario() y mostramos
    // el resultado por consola.
    console.log(describirUsuario(usuario));
});


// ERROR DE TIPOS:
// Este objeto NO es válido porque "bloqueado"
// no pertenece al tipo Estado.
//
// Estado solo permite:
// 'activo' | 'inactivo' | 'pendiente'
//
// Por tanto, TypeScript marcará "bloqueado" como error.
const usuarioIncorrecto: Usuario = {
    nombre: "Javier",
    rol: Rol.EDITOR,
    estado: "bloqueado"
};
