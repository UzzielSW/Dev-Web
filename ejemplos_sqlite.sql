-- Crear una tabla de ejemplo
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE,
    edad INTEGER,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de ejemplo
INSERT INTO usuarios (nombre, email, edad) VALUES 
    ('Juan Pérez', 'juan@ejemplo.com', 25),
    ('María García', 'maria@ejemplo.com', 30),
    ('Carlos López', 'carlos@ejemplo.com', 28);

-- Consultas básicas

-- 1. Seleccionar todos los usuarios
SELECT * FROM usuarios;

-- 2. Seleccionar solo nombre y email
SELECT nombre, email FROM usuarios;

-- 3. Filtrar por edad mayor a 25
SELECT * FROM usuarios WHERE edad > 25;

-- 4. Ordenar por edad de forma descendente
SELECT * FROM usuarios ORDER BY edad DESC;

-- 5. Contar el número total de usuarios
SELECT COUNT(*) as total_usuarios FROM usuarios;

-- 6. Calcular el promedio de edad
SELECT AVG(edad) as edad_promedio FROM usuarios;

-- 7. Buscar usuarios por nombre (usando LIKE)
SELECT * FROM usuarios WHERE nombre LIKE '%Juan%';

-- 8. Actualizar datos
UPDATE usuarios SET edad = 26 WHERE nombre = 'Juan Pérez';

-- 9. Eliminar un usuario
DELETE FROM usuarios WHERE email = 'carlos@ejemplo.com';

-- 10. Agrupar por edad y contar cuántos usuarios hay en cada edad
SELECT edad, COUNT(*) as cantidad
FROM usuarios
GROUP BY edad
HAVING cantidad > 0; 