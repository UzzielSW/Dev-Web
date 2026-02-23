# Variables en TypeScript

TypeScript añade tipado estático opcional a JavaScript, permitiendo detectar errores en tiempo de compilación y mejorar la mantenibilidad del código.

## Declaración de Variables

```typescript
const PI: number = 3.14159;        // ✅ Constante - no cambia
let contador: number = 0;          // ✅ Variable mutable
// var -> ❌ No usar (problemas de scope y hoisting)
```

## Tipos de Datos

### Primitivos
```typescript
const edad: number = 19;                    // Enteros y decimales
const saldo: number = 12.54;
const nombre: string = 'Juan';              // Comillas simples (convención)
const mensaje: string = `Hola ${nombre}`;   // Backticks para interpolación
const activo: boolean = true;
const vacio: null = null;                   // Intencionalmente vacío
const sinAsignar: undefined = undefined;    // Valor no inicializado
const idUnico: symbol = Symbol('id');       // Identificador único (ES6+)

// BigInt para números muy grandes (ES2020+)
const numeroGrande: bigint = 9007199254740991n;
```

### Estructuras de Datos

```typescript
// Arrays tipados
const numeros: number[] = [1, 2, 3];
const nombres: Array<string> = ['Ana', 'Luis'];  // Notación genérica alternativa

// Tuplas (arrays de longitud fija con tipos específicos)
const coordenadas: [number, number] = [10, 20];
const usuario: [string, number] = ['Juan', 25];

// Enums para conjuntos de constantes
enum Color {
  Rojo = 'rojo',
  Verde = 'verde',
  Azul = 'azul'
}
const miColor: Color = Color.Rojo;
```

### Objetos
```typescript
// Interface (recomendado para objetos)
interface Producto {
  readonly id: number;      // Solo lectura
  name: string;
  color?: string;           // Opcional
  size: number;
  enStock: boolean;
}

const objeto: Producto = {
  id: 1,
  name: 'ball',
  color: 'black',
  size: 12,
  enStock: true
};

// Type alias (alternativa a interface)
type Punto = {
  x: number;
  y: number;
};

// Clases
class Persona {
  constructor(
    public nombre: string,
    private edad: number    // Acceso restringido
  ) {}
  
  saludar(): string {
    return `Hola, soy ${this.nombre}`;
  }
}
```

### Tipos Especiales
```typescript
// NaN detection
const resultado: number = NaN;
const esInvalido: boolean = Number.isNaN(resultado);  // ✅ Método específico

// Unknown (más seguro que any)
let valorDesconocido: unknown = 4;
valorDesconocido = 'texto';

// Any (evitar si es posible)
let cualquierCosa: any = 4;  // ❌ Desactiva el tipado

// Void (funciones sin retorno)
function logMensaje(msg: string): void {
  console.log(msg);
}

// Never (funciones que nunca retornan)
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}
```

## Template Literals
```typescript
const amigo: string = 'KD';
const numero: number = 2;
const saludo: string = `Bienvenido, ${amigo}, ${numero * 3} veces`;

// Tagged templates (avanzado)
function etiquetar(strings: TemplateStringsArray, ...values: number[]): string {
  return strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
}
```

## Métodos de Salida

```typescript
// ✅ Consola - único método recomendado
console.log(`edad: ${edad}`);
console.table([{a: 1, b: 2}]);  // Formato tabla
console.error('Error');         // Stderr

// ⚠️ Estos solo funcionan en navegador y bloquean el hilo:
// alert('Mensaje');     // ❌ No usar en producción
// confirm('¿OK?');      // ❌ Usar modales HTML
// prompt('Valor:');     // ❌ Usar formularios

// ❌ document.write() - COMPLETAMENTE OBSOLETO
```

## Type Assertions y Guards
```typescript
// Type assertion (cuando sabes más que TS)
const input = document.getElementById('input') as HTMLInputElement;

// Type guard
function procesar(valor: string | number): void {
  if (typeof valor === 'string') {
    valor.toUpperCase();  // TS sabe que es string aquí
  } else {
    valor.toFixed(2);     // TS sabe que es number aquí
  }
}
```

---

## 🗑️ Eliminado (No usar en TypeScript moderno)

| Eliminado | Reemplazo | Razón |
|-----------|-----------|-------|
| `var` | `const`/`let` | Scope de función vs bloque, hoisting problemático |
| Comillas dobles `" "` | Simples `' '` o backticks `` ` ` `` | Consistencia de estilo |
| `document.write()` | DOM API (`textContent`, `createElement`) | Destruye documento, XSS risk |
| `prompt()`/`alert()`/`confirm()` | Componentes UI modernos | Bloqueantes, mala UX |
| Concatenación `+` | Template literals `` `${}` `` | Legibilidad, multilínea |
| `isNaN()` global | `Number.isNaN()` | No coerción de tipos |
| `parseInt()` sin radix | `parseInt(x, 10)` o `Number()` | Comportamiento inconsistente |
| Arrays sin tipo | `tipo[]` o `Array<tipo>` | Type safety |
| `any` implícito | Tipos explícitos o `unknown` | Desactiva verificación |
| Objects sin interface/type | `interface` o `type` | Documentación y validación |
| `undefined` como valor asignado | `null` | Distinguir "no asignado" vs "vacío" |
| Funciones con `function` | Arrow functions `=>` | Lexical `this`, más conciso |
| `==` (doble igual) | `===` (triple igual) | Comparación estricta |