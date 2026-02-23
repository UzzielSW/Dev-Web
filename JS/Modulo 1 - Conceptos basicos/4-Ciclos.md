# Ciclos en JavaScript

## Tipos de Ciclos

### 1. Ciclo for

El ciclo `for` es ideal cuando conoces el número exacto de iteraciones.

```javascript
for (inicialización; condición; incremento) {
  // código a ejecutar
}
```

#### Ejemplo Práctico

```javascript
// Tabla de multiplicar
for (i = 0; i <= 12; i++) {
  console.log("2 x " + i + " = " + 2 * i);
}
```

### 2. Ciclo while

El ciclo `while` se ejecuta mientras una condición sea verdadera.

```javascript
while (condición) {
  // código a ejecutar
}
```

#### Ejemplo Práctico

```javascript
var family = ["Wester", "Moises", "Fermin"];
var i = 0;

while (i < family.length) {
  console.log("-" + family[i++]);
}
```

### 3. Ciclo do/while

Similar al `while`, pero garantiza que el código se ejecute al menos una vez.

```javascript
do {
  // código a ejecutar
} while (condición);
```

### 4. Ciclo for...of

Especialmente útil para iterar sobre elementos iterables (arrays, strings, etc.).

```javascript
for (let elemento of iterable) {
  // código a ejecutar
}
```

#### Ejemplo Práctico

```javascript
for (let value of family) {
  console.log(" - " + value);
}
```

## Buenas Prácticas

1. **Elección del Ciclo**

   - Usa `for` cuando conozcas el número de iteraciones
   - Usa `while` cuando la condición sea compleja
   - Usa `for...of` para iterar sobre colecciones

2. **Prevención de Bucles Infinitos**

   - Asegúrate de que la condición de salida se cumpla
   - Verifica que las variables de control se actualicen correctamente
   - Usa `break` cuando sea necesario

3. **Optimización**
   - Evita cálculos innecesarios dentro del ciclo
   - Considera usar `continue` para saltar iteraciones
