// Creamos una interfaz llamada Alumno.
// Una interfaz define qué propiedades debe tener un objeto Alumno.
interface Alumno {
    nombre: string;      // El nombre debe ser un texto (string).
    nota: number;        // La nota debe ser un número (number).
    activo?: boolean;    // El signo ? indica que esta propiedad es opcional.
}


// Creamos un array llamado "alumnos".
// Alumno[] significa que el array solo puede contener objetos de tipo Alumno.
const alumnos: Alumno[] = [
    {
        nombre: "Ana",
        nota: 8.5,
        activo: true
    },
    {
        nombre: "Luis",
        nota: 7,
        activo: true
    },
    {
        nombre: "Marta",
        nota: 9,
        activo: false
    },
    {
        nombre: "Carlos",
        nota: 6.5
        // "activo" no es obligatorio porque lo hemos definido como opcional (?).
    }
];


// Creamos una función llamada "calcularMedia".
// Recibe un array de alumnos como parámetro.
// Alumno[] indica que debe recibir un array de objetos Alumno.
// : number indica que la función devolverá un número.
function calcularMedia(alumnos: Alumno[]): number {

    // Utilizamos reduce() para sumar todas las notas.
    // "total" representa la suma que llevamos acumulada.
    // "alumno" representa cada alumno del array.
    // Empezamos la suma desde 0.
    const suma = alumnos.reduce((total, alumno) => {
        return total + alumno.nota;
    }, 0);

    // Dividimos la suma de todas las notas
    // entre el número de alumnos para obtener la media.
    return suma / alumnos.length;
}


// Creamos una segunda función llamada "mostrarResumen".
// Recibe un único alumno como parámetro.
// : void significa que la función no devuelve ningún valor.
function mostrarResumen(alumno: Alumno): void {

    // Mostramos por consola el nombre del alumno.
    console.log("Nombre:", alumno.nombre);

    // Mostramos por consola su nota.
    console.log("Nota:", alumno.nota);

    // Mostramos si está activo.
    console.log("Activo:", alumno.activo);
}


// Llamamos a calcularMedia() pasando nuestro array de alumnos.
const media = calcularMedia(alumnos);

// Mostramos el resultado de la media por consola.
console.log("Nota media:", media);


// Llamamos a mostrarResumen().
// alumnos[0] significa que estamos pasando el primer alumno del array.
mostrarResumen(alumnos[0]);


// Esta línea provocaría un error de TypeScript,
// porque calcularMedia() necesita recibir un Alumno[],
// pero estamos pasando un string.

// calcularMedia("hola");