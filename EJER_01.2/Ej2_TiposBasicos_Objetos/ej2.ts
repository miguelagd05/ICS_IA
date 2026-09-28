// --------------------------------------------------
// 1. INFERENCIA DE TIPOS
// --------------------------------------------------

// En este caso NO indicamos el tipo de cada variable.
// TypeScript analiza el valor que le damos y deduce
// automáticamente qué tipo debe tener cada variable.

let edad = 25;
// TypeScript deduce que "edad" es de tipo number,
// porque le hemos asignado el número 25.

let nombre = "Pedro";
// TypeScript deduce que "nombre" es de tipo string,
// porque le hemos asignado un texto.

let esActivo = true;
// TypeScript deduce que "esActivo" es de tipo boolean,
// porque le hemos asignado true o false.


// --------------------------------------------------
// 2. TIPOS EXPLÍCITOS
// --------------------------------------------------

// En este caso somos nosotros quienes indicamos
// explícitamente qué tipo tendrá cada variable.

// ": number" indica que edad2 solo puede contener números.
let edad2: number = 20;

// ": string" indica que nombre2 solo puede contener texto.
let nombre2: string = "Chema";

// ": boolean" indica que esActivo2 solo puede ser
// true o false.
let esActivo2: boolean = true;


// Por ejemplo, estas asignaciones provocarían errores:

// edad2 = "veinte";
// ❌ Error porque edad2 es number y estamos intentando
// asignarle un string.

// nombre2 = 30;
// ❌ Error porque nombre2 es string y estamos intentando
// asignarle un number.

// esActivo2 = "sí";
// ❌ Error porque esActivo2 es boolean y estamos
// intentando asignarle un string.


// --------------------------------------------------
// 3. CREAR UN OBJETO TIPADO
// --------------------------------------------------

// Creamos una variable llamada "persona".
// Después de los dos puntos (:) indicamos la estructura
// que debe tener este objeto.

// El objeto persona debe tener:
// - nombre → string
// - edad → number
// - esSocio → boolean

let persona: {
    nombre: string,
    edad: number,
    esSocio: boolean
} = {

    // Asignamos un texto a nombre.
    nombre: "Miguel",

    // Asignamos un número a edad.
    edad: 20,

    // Asignamos true/false a esSocio.
    esSocio: true
};


// --------------------------------------------------
// 4. PROBAR UNA PROPIEDAD QUE NO EXISTE
// --------------------------------------------------

// La siguiente línea provocaría un error:

// persona.apellido = "Diaz";

// ❌ Error porque hemos definido que persona
// solamente tiene estas propiedades:

// nombre
// edad
// esSocio

// "apellido" NO está definido en el tipo de persona,
// por lo que TypeScript no permite añadirla de esta forma.
