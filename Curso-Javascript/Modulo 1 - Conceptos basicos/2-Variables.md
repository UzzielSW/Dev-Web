# Variables en JavaScript

JavaScript es un lenguaje dinámicamente tipado, lo que significa que no necesitas especificar el tipo de dato al declarar una variable. En este documento, exploraremos los diferentes tipos de datos y cómo trabajar con variables en JavaScript.

## Declaración de Variables

- `var`
- `let` 

> **Nota**: Aunque ambas palabras clave funcionan, tienen diferentes alcances (scopes) en el código.

## Tipos de Datos

### 1. Numérico
Pueden ser enteros o decimales
```javascript
var edad = 19;
var saldo = 12.54;
```

### 2. String 
```javascript
var texto = 'usando comillas simples';
var texto = "usando comillas dobles";
var texto = `usando backticks`;
```

### 3. Array 
Pueden contener diferentes tipos de datos
```javascript
var array = ["texto", true, 2, 12.4];
```

### 4. Object 
```javascript
var objeto = {
    name: "ball",
    color: "black",
    size: 12
};
```

### 5. Boolean
```javascript
var respuesta = true;
```

### 6. Undefined
```javascript
var sinValor; // Variable declarada sin valor asignado
```

### 7. Null
```javascript
var numero = null;
```

### 8. NaN (Not a Number)
Se produce cuando se realizan operaciones matemáticas inválidas
```javascript
var texto2 = "hola como estas";
console.log(texto2 * 2); // Resultado: NaN
```

## Ejemplos Prácticos

### Trabajando con Strings
```javascript
let amigo = "KD";
let numero = 2;
// Template literals con backticks
let saludo = `Bienvenido, ${amigo}, ${numero * 3} veces`;
```

## Métodos de Salida

### Consola
```javascript
console.log("texto: " + cadena); // Concatenación tradicional
console.log(`edad: ${edad}`);    // Template literal
```

### Documento HTML
```javascript
document.write(cadena + " " + entero);
```

### Entrada de Datos
```javascript
prompt("ingrese un numero: ", 2); // Solo funciona en HTML
```

> **Nota**: La función `prompt()` solo funciona cuando se ejecuta en un navegador web. 