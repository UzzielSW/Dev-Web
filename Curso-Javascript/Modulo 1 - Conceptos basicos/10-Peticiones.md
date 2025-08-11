# Peticiones HTTP en JavaScript

Las peticiones HTTP son fundamentales para la comunicación entre el cliente y el servidor en aplicaciones web. JavaScript proporciona varias formas de realizar estas peticiones, siendo `fetch` una de las más modernas y utilizadas.

## Método Fetch

### Sintaxis Básica

```javascript
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    // Procesar los datos
  })
  .catch((error) => {
    // Manejar errores
  });
```

### Parámetros

1. **url**: La URL del recurso que se desea obtener
2. **options**: Objeto de configuración opcional que puede incluir:
   - `method`: Método HTTP (GET, POST, PUT, DELETE, etc.)
   - `headers`: Cabeceras de la petición
   - `body`: Datos a enviar
   - `mode`: Modo de la petición (cors, no-cors, same-origin)

## Ejemplos Prácticos

### GET Request

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // Procesar datos
    console.log(data);
  });
```

### POST Request

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Transformación de Datos

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // Transformar datos
    let transformedData = data.map((user) => ({
      name: user.name,
      email: user.email,
    }));
    return transformedData;
  })
  .then((data) => console.log(data));
```

## Manejo de Respuestas

### Tipos de Respuesta

```javascript
response.json(); // Para datos JSON
response.text(); // Para texto plano
response.blob(); // Para archivos binarios
response.formData(); // Para datos de formulario
```

### Verificación de Estado

```javascript
fetch(url).then((response) => {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
});
```

## Buenas Prácticas

1. **Manejo de Errores**

   - Siempre incluir `.catch()` para manejar errores
   - Verificar el estado de la respuesta
   - Implementar reintentos para peticiones fallidas

2. **Seguridad**

   - Usar HTTPS para peticiones sensibles
   - Implementar CORS adecuadamente
   - Validar datos antes de enviar

3. **Rendimiento**
   - Cancelar peticiones innecesarias
   - Implementar caché cuando sea apropiado
   - Usar AbortController para peticiones largas

## Ejemplo Completo con Manejo de Errores

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la petición");
    }
    return response.json();
  })
  .then((data) => {
    let transformedData = data.map((user) => ({
      name: user.name,
      email: user.email,
    }));
    return transformedData;
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.error("Error:", error);
  });
```

> **Nota**: Es importante manejar siempre los errores y verificar el estado de la respuesta para crear aplicaciones robustas.
