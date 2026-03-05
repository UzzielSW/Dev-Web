# Documentación del DOM (Document Object Model)

## Introducción

El DOM (Document Object Model) es una representación en forma de árbol de un documento HTML. Permite manipular dinámicamente los nodos de una página web para añadir, borrar y modificar elementos.

## Estructura del DOM

El DOM proporciona acceso a varios elementos clave del documento:

- `.body` - Elemento body
- `.documentElement` - Elemento root (html)
- `.links` - Enlaces
- `.scripts` - Scripts
- `.images` - Imágenes
- `.head` - Elemento head
- `.styleSheets` - Hojas de estilo CSS

## Obtención de Elementos

Existen múltiples formas de obtener elementos del DOM:

### Métodos Tradicionales

```javascript
document.getElementById("id");
document.getElementsByClassName("className");
document.getElementsByTagName("tagName");
```

### Selectores Modernos

```javascript
document.querySelector("cssSelector");
document.querySelectorAll("cssSelector");
```

> **Nota**: Si no se encuentran elementos, estos métodos devuelven `null`.

## Navegación del DOM (DOM Traversing)

### Relaciones entre Hermanos

```javascript
element.nextElementSibling; // Hermano siguiente (elemento)
element.nextSibling; // Hermano siguiente (nodo)
element.previousElementSibling; // Hermano anterior (elemento)
element.previousSibling; // Hermano anterior (nodo)
```

### Relaciones con Padres

```javascript
element.parentElement; // Padre del elemento
element.parentNode; // Nodo padre
```

### Relaciones con Hijos

```javascript
element.children; // Lista de elementos hijos
element.childNodes; // Array de nodos hijos
element.firstElementChild; // Primer elemento hijo
element.firstChild; // Primer nodo hijo
element.lastElementChild; // Último elemento hijo
element.lastChild; // Último nodo hijo
element.hasChildNodes; // Verifica si tiene hijos
```

## Propiedades de los Elementos

### Contenido

```javascript
element.textContent; // Texto plano (lectura/escritura)
element.innerHTML; // HTML interno
```

### Atributos

```javascript
element.attributes;
element.getAttribute("attr");
element.setAttribute("attr", "value");
element.removeAttribute("attr");
```

### Clases

```javascript
element.classList.add("className");
element.classList.remove("className");
element.classList.toggle("className");
element.classList.contains("className");
```

### Estilos CSS

```javascript
element.style.cssProperty; // Usar camelCase para propiedades CSS
```

## Transformación del DOM

### Creación de Elementos

```javascript
element.cloneNode(); // Clona un elemento
document.createElement("tagName"); // Crea nuevo nodo
document.createTextNode("text"); // Crea nodo de texto
```

### Inserción de Elementos

```javascript
parent.appendChild(element); // Inserta al final
parent.insertBefore(newElement, element); // Inserta antes de otro elemento
```

### Reemplazo de Elementos

```javascript
parent.replaceChild(newNode, oldNode);

//hacerlo desde el mismo elemento
child.replaceWith(newChild) // reemplazar un hijo con un nuevo hijo
```

### Eliminación de Elementos

```javascript
parent.removeChild(element); // Retorna el elemento eliminado
element.remove(); // Elimina directamente el elemento
```

## Ejemplos Prácticos

### Modificación de Atributos

```javascript
var image = document.getElementById("myImage");
image.src = "apple.png";
```

### Modificación de Estilos

```javascript
element.style.color = "red";
element.style.backgroundColor = "white";
```

### Creación y Adición de Elementos

```javascript
var p = document.createElement("p");
var pText = document.createTextNode("Some new text");
p.appendChild(pText);
var div = document.getElementById("demo");
div.appendChild(p);
```

## Metodos equivalentes

```javascript
// hermano anterior
parent.insertAdjacentElement('beforebegin', element);
parent.before(element)

// hermano siguiente
parent.insertAdjacentElement('afterend', element);
parent.after(element)

// primer hijo
parent.insertAdjacentElement('afterbegin', element);
parent.prepend(element)

// ultimo hijo
parent.insertAdjacentElement('beforeend', element);
parent.append(element)

```

## Buenas Prácticas

1. **Selección de Elementos**
  - Usa IDs para elementos únicos
  - Usa clases para grupos de elementos
  - Prefiere `querySelector` para selectores CSS complejos
2. **Manipulación del DOM**
  - Minimiza las operaciones directas al DOM
  - Agrupa las modificaciones cuando sea posible
  - Usa fragmentos para múltiples inserciones
3. **Rendimiento**
  - Almacena referencias a elementos frecuentemente usados
  - Evita selecciones repetidas del mismo elemento
  - Usa `classList` en lugar de manipular `className` directamente

> **Nota**: El DOM es una representación en memoria del documento HTML. Las modificaciones al DOM son inmediatas pero no afectan al archivo HTML original.

