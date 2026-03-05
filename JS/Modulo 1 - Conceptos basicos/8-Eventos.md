# Eventos en JavaScript

Los eventos en JavaScript permiten ejecutar código cuando ocurren acciones específicas, como:

- Clics del usuario
- Movimientos del ratón
- Envío de formularios
- Carga de páginas
- Cambios en elementos



## Evento de mouse

- click
- dblclick (doble click)
- mouseenter (entra al area)
- mouseleave (sale del area)
- contextmenu (capturar click derecho)
- mousedown (presionas click)
- mouseup (dejas de presionar click
- mousemove (te mueves dentro de un elemento)

```

```

## Eventos de Carga de Página

### Evento `onload`

Se activa cuando toda la página ha sido cargada completamente.

```javascript
window.onload = () => {
  // Código a ejecutar después de cargar la página
};
```

### Evento `onunload`

Se activa cuando el usuario sale de la página.

## Eventos de Cambio

### Evento `change`

Se activa cuando:

- El texto dentro de un textBox cambia
- El elemento pierde el foco

## Gestión de Eventos

### Agregar Eventos

Para agregar eventos a un elemento, se utiliza el método `addEventListener`:

```javascript
elemento.addEventListener("event", nameFunction, useCapture);
```

#### Parámetros:

1. **event**: Tipo de evento ('click', 'mousedown', etc.)
2. **nameFunction**: Función a ejecutar cuando ocurra el evento
3. **useCapture**: Valor booleano que especifica el tipo de propagación
  - Por defecto es `false`
  - Opcional

### Tipos de Propagación de Eventos

#### Bubbling (Falso)

- Los eventos internos se ejecutan primero
- Propagación de adentro hacia afuera
- Comportamiento por defecto

#### Capturing (Verdadero)

- Los eventos externos se ejecutan primero
- Propagación de afuera hacia adentro

### Eliminar Eventos

Para eliminar un evento de un elemento:

```javascript
element.removeEventListener("event", nameFunction);
```

## Ejemplo Práctico

```javascript
window.onload = () => {
  // Obtener elemento del HTML con id='boton'
  var boton = document.getElementById("boton");

  // Agregar evento 'click'
  boton.addEventListener("click", printRandom);

  function printRandom() {
    alert(Math.random());
    // Eliminar el evento del elemento botón
    boton.removeEventListener("click", printRandom);
  }
};
```

## Buenas Prácticas

1. **Gestión de Eventos**
  - Usar `addEventListener` en lugar de atributos HTML inline
  - Limpiar eventos cuando ya no sean necesarios
  - Evitar múltiples registros del mismo evento
2. **Rendimiento**
  - Delegar eventos cuando sea posible
  - Usar `useCapture` solo cuando sea necesario
  - Remover event listeners para evitar memory leaks
3. **Compatibilidad**
  - Considerar la compatibilidad con navegadores antiguos
  - Usar polyfills cuando sea necesario
  - Verificar la existencia de elementos antes de agregar eventos

