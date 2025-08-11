# Estructuras Condicionales en JavaScript

## Estructura Básica if-else

```javascript
if (condicion1) {
  // ejecuta código
} else if (condicion2) {
  // ejecuta código
} else {
  // ejecuta código
}
```

## Operadores de Comparación

### Comparación Estricta (===)

Compara tanto el valor como el tipo de dato:

```javascript
if (numero === numero2) {
  console.log("numero y numero2 son idénticos");
} else {
  console.log("numero y numero2 no son idénticos");
}
```

## Operador Ternario

El operador ternario es una forma concisa de escribir una condición if-else en una sola línea.

### Sintaxis

```javascript
variable = condicion ? valor1 : valor2;
```

### Ejemplo Práctico

```javascript
var age = 19;
var isAdult = age < 18 ? true : false;
```

## Operadores de Comparación Comunes

- `===` : Igualdad estricta (con tipo)
- `!==` : Desigualdad estricta (con tipo)
- `>` : Mayor que
- `<` : Menor que
- `>=` : Mayor o igual que
- `<=` : Menor o igual que

## Buenas Prácticas

1. **Uso de Comparaciones Estrictas**

   - Siempre usa `===` en lugar de `==` para evitar conversiones de tipo inesperadas
   - Esto hace el código más predecible y seguro

2. **Operador Ternario**

   > El operador ternario es especialmente útil en asignaciones de variables basadas en condiciones simples.

   - Útil para condiciones simples
   - Evita el uso excesivo para condiciones complejas
   - Mejora la legibilidad del código

3. **Estructura if-else**
   - Evita anidar demasiadas condiciones
   - Considera usar `switch` para múltiples condiciones sobre la misma variable
