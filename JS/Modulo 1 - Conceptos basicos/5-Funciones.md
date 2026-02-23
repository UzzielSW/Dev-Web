# Funciones en JavaScript

## Tipos de Funciones

### 1. Función Normal

#### Sintaxis

```javascript
function nombreDeFuncion(parametros) {
  // la función debe realizar una sola acción
  return resultado;
}
```

#### Ejemplo Práctico

```javascript
function RaizCuadrada(valor) {
  return Math.fround(Math.sqrt(valor));
}
```

### 2. Función Anónima

Una función sin nombre que se asigna a una variable.

#### Sintaxis

```javascript
var nombreDeVariable = function (parametros) {
  // proceso de la función
  return resultado;
};
```

#### Ejemplo Práctico

```javascript
var potencia = function (X, exp) {
  return Math.pow(X, exp);
};
```

### 3. Función Flecha

> Las funciones flecha son especialmente útiles para funciones cortas y callbacks, pero no son adecuadas para métodos de objetos porque no tienen su propio `this`

```javascript
var nombreDeVariable = (parametros) => {
  return resultado;
};
```

#### Ejemplo Práctico

```javascript
var suma = (a, b) => {
  return a + b;
};
```

## Métodos en Objetos

Las funciones también pueden ser propiedades de objetos, conocidas como métodos.

```javascript
let objeto = {
  nombre: "objeto",
  metodo(parametros) {
    return resultado;
  },
};
```

### Ejemplo Práctico

```javascript
let obj = {
  nombre: "objeto",
  sumar(a, b) {
    return a + b;
  },
};
```

## Buenas Prácticas

1. **Nombrado de Funciones**

   - Usa nombres descriptivos que indiquen su propósito
   - Sigue la convención camelCase
   - Evita nombres genéricos como "función" o "proceso"

2. **Principio de Responsabilidad Única**

   - Cada función debe realizar una sola tarea
   - Evita funciones demasiado largas
   - Divide funciones complejas en funciones más pequeñas

3. **Parámetros y Retorno**

   - Limita el número de parámetros
   - Usa valores por defecto cuando sea apropiado

4. **Documentación**
   - Comenta funciones complejas
   - Describe los parámetros y el valor de retorno
   - Incluye ejemplos de uso cuando sea necesario
