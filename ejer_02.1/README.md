# React + Vite

## Ejercicio 1 · Explora la estructura del proyecto

## 1. ¿En qué archivo está el punto de entrada de la aplicación? ¿Qué hace la función `createRoot`?

El punto de entrada de la aplicación se encuentra en el archivo **src/main.jsx**, que utiliza lo siguiente:

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

La función **createRoot** nos permite crear la raíz de React en un archivo HTML, para ello busca el elemento que contiene el ID root, finalmente mediante el **.render()** se indica que componente de React se debe mostrar dentro de ese elemento

## 2. ¿Cuál es el ID del elemento HTML donde se monta la aplicación? ¿En qué archivo está definido?

El ID del HTML donde se monta la aplicación es **root**.

Este se encuentra en el archivo **index.html**, concretamente en el **<div id ="root"></div>**, luego en el **main.jsx** se busca ese elemento y React monta la aplicación

## 3. Dibuja el árbol de componentes que se renderiza al arrancar el proyecto recién creado.

El árbol de componentes sería el siguiente

HTML
└── <div id="root">
    └── <StrictMode>
        └── <App>
            ├── <section id="center">
            │   ├── <div class="hero">
            │   ├── <div>
            │   └── <button>
            ├── <div class="ticks">
            ├── <section id="next-steps">
            │   ├── <div id="docs">
            │   └── <div id="social">
            ├── <div class="ticks">
            └── <section id="spacer">

## 4. ¿Qué ocurre en la página si eliminas `<StrictMode>` de `main.jsx`? ¿Y en la consola en modo desarrollo?

**Si eliminamos el StrictMode en el main.jsx**, la aplicación seguirá funcionando, ya que este no añade contenido visual, se utiliza para detectar posibles problemas que puedan suceder durante el desarrollo.

**En la consola en modo desarrollo**, el StrictMode puede provocar que algunas partes del código se ejecuten dos veces para detectar efectos secundarios y cualquier problema, por ello, al eliminarlo pueden desaparecer esas ejecuciones adicionales de código, así como los avisos sobre ellas en la consola


## 5. Abre `App.jsx` y localiza tres fragmentos de código JavaScript escritos entre llaves `{ }` dentro del JSX. Explica qué hace cada uno.

**{count}**: Es una variable de estado que muestra en pantalla el valor actual del contador

**{() => setCount((count) => count + 1)}**: Es una función que se ejecuta cuando se hace click en el botón, cada vez que se lleva a cabo esta acción el valor de count aumenta en 1

Solo encontré esos dos fragmentos de códigoe scritos entre llaves

## 6. ¿Qué es el elemento `<>` que envuelve el JSX devuelto por `App`? ¿Genera algún elemento en el DOM? Compruébalo con las herramientas de desarrollo del navegador (pestaña *Elementos*).

**El elemento <>** se conoce como Fragmento(Fragment) de React y permite agrupar varios elementos sin necesidad de introducir un elemento HTML adicional, como un **div**.

**El Fragmento <>** no genera ningún tipo de elemento dentro del DOM y al comprobarlo con las herramientas de desarrollo del navegador, se ven directamente las etiquetas y sin que aparezca ningún div o otro elemento que corresponda a <>

___________________________________________________________

## Ejercicio 2 · Localización de errores

Cada fragmento contiene **un error**. Indica cuál es, qué síntoma produce y escribe la versión corregida.

## 2.1

**Error**: El nombre de la función comienza con minúscula
**Síntoma**:React lo detecta como una etiqueta HTML y no como un componente
**Corrección**: 

```jsx
export function Saludo() {
  return<p>¡Hola, clase!</p>;
}
```

## 2.2

**Error**: El return contiene dos elementos sin un elemento raíz
**Sintoma**: Se produce un error de sintaxis en JSX
**Corrección**: 

```jsx
export function Tarjeta() {
  return (
    <>
    <h2>Desarrollo Web en Entorno Cliente</h2>
    <p>Segundo curso de DAW</p>     
    </>
  );
}
```
**2.3**

**Error**: La función Pie no está exportada
**Sintoma** : Se produce un error al intentar importarlo en App.jsx
**Correción**:

```jsx
// Archivo: src/Pie.jsx
export function Pie() { //Se ha añadido el export antes de la función
  return<footer>© Departamento de Informática</footer>;
}

// Archivo: src/App.jsx
import { Pie } from './Pie';
```

**2.4**

**Error** : Se está exportando como exportación nombrada, pero al importarse se hace como exportación por defecto
**Sintoma**: Se produce un error al importar
**Corrección**:

```jsx
// Archivo: src/Cabecera.jsx
export function Cabecera() {
  return<header>Mi aplicación</header>;
}

// Archivo: src/App.jsx
import {Cabecera} from './Cabecera'; //Puse el nombre de Cabecera entre llaves para que sea exportación nombrada

```

## 2.6

**Error**: anioActual está escrito como texto en vez de ponerse como expresión JavaScript
**Sintoma**: En la página aparecerá 'Estamos en el año anioActual', en vez de salir el año especificado
**Corrección**:

```jsx
export function Fecha() {
  const anioActual = new Date().getFullYear();
  return<p>Estamos en el año {anioActual}</p>;
}
```

