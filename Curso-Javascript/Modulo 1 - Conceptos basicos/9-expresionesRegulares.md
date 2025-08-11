# Expresiones Regulares en JavaScript

## Formas de Crear Expresiones Regulares

### 1. Usando el Constructor RegExp

La forma más flexible y recomendada para expresiones complejas.

#### Sintaxis

```javascript
var expresion = new RegExp("patrón");
```

#### Ejemplo Práctico

```javascript
var expresion1 = new RegExp("abc");
```

### 2. Usando la Sintaxis Literal

Más concisa, ideal para expresiones simples.

#### Sintaxis

```javascript
var expresion = /patrón/;
```

#### Ejemplo Práctico

```javascript
var expresion2 = /abc/;
```

## Expresiones Estáticas vs Dinámicas

### Expresiones Estáticas

Son aquellas que se escriben directamente en el código y no cambian durante la ejecución.

#### Ejemplo de Expresión Estática

```javascript
// Buscar números de teléfono con formato específico
var telefonoRegex = /^\d{3}-\d{3}-\d{4}$/;
var telefono = "123-456-7890";
console.log(telefonoRegex.test(telefono)); // true
```

### Expresiones Dinámicas

Son aquellas que se construyen en tiempo de ejecución, permitiendo usar variables o construir patrones basados en datos.

#### Ejemplo de Expresión Dinámica

```javascript
// Buscar palabras con longitud específica
function buscarPalabrasDeLongitud(texto, longitud) {
  var patron = new RegExp(`\\b\\w{${longitud}}\\b`, "g");
  return texto.match(patron);
}

var texto = "El gato corre rápido por el parque";
console.log(buscarPalabrasDeLongitud(texto, 3)); // ['El', 'por']
```

## Ejemplos Prácticos

### 1. Validación de Email

```javascript
// Expresión estática
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var email = "usuario@ejemplo.com";
console.log(emailRegex.test(email)); // true
```

### 2. Búsqueda de Palabras con Prefijo

```javascript
// Expresión dinámica
function buscarPalabrasConPrefijo(texto, prefijo) {
  var patron = new RegExp(`\\b${prefijo}\\w*\\b`, "gi");
  return texto.match(patron);
}

var texto = "El elefante elegante está en el parque";
console.log(buscarPalabrasConPrefijo(texto, "el")); // ['El', 'elefante', 'elegante', 'el']
```

### 3. Validación de Contraseña

```javascript
// Expresión estática
var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var password = "Contraseña123";
console.log(passwordRegex.test(password)); // true
```

## Buenas Prácticas

1. **Elección del Método**

   - Usa el constructor `RegExp` para expresiones dinámicas
   - Usa la sintaxis literal para expresiones estáticas

2. **Patrones Simples**

   - Para patrones simples, usa la sintaxis literal
   - Mejor rendimiento y legibilidad
   - Más fácil de mantener

3. **Patrones Complejos**

   - Usa el constructor para patrones que cambian
   - Permite concatenación de strings
   - Mejor para expresiones dinámicas

4. **Escape de Caracteres**

   - En expresiones dinámicas, usa doble escape para caracteres especiales
   - En expresiones estáticas, usa un solo escape

   ```javascript
   // Expresión estática
   var regex1 = /\d+/;

   // Expresión dinámica
   var regex2 = new RegExp("\\d+");
   ```
