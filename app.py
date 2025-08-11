import sqlite3

def crear_conexion():
    try:
        conexion = sqlite3.connect('base_datos.db')
        return conexion
    except sqlite3.Error as e:
        print(f"Error al conectar con la base de datos: {e}")
        return None

def crear_tabla():
    conexion = crear_conexion()
    if conexion:
        try:
            cursor = conexion.cursor()
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    email TEXT NOT NULL UNIQUE
                )
            ''')
            conexion.commit()
            print("Tabla creada exitosamente")
        except sqlite3.Error as e:
            print(f"Error al crear la tabla: {e}")
        finally:
            conexion.close()

def insertar_usuario(nombre, email):
    conexion = crear_conexion()
    if conexion:
        try:
            cursor = conexion.cursor()
            cursor.execute('INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
                         (nombre, email))
            conexion.commit()
            print("Usuario insertado exitosamente")
        except sqlite3.Error as e:
            print(f"Error al insertar usuario: {e}")
        finally:
            conexion.close()

def obtener_usuarios():
    conexion = crear_conexion()
    if conexion:
        try:
            cursor = conexion.cursor()
            cursor.execute('SELECT * FROM usuarios')
            usuarios = cursor.fetchall()
            for usuario in usuarios:
                print(f"ID: {usuario[0]}, Nombre: {usuario[1]}, Email: {usuario[2]}")
        except sqlite3.Error as e:
            print(f"Error al obtener usuarios: {e}")
        finally:
            conexion.close()

def actualizar_usuario(id, nombre, email):
    conexion = crear_conexion()
    if conexion:
        try:
            cursor = conexion.cursor()
            cursor.execute('UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?',
                         (nombre, email, id))
            conexion.commit()
            print("Usuario actualizado exitosamente")
        except sqlite3.Error as e:
            print(f"Error al actualizar usuario: {e}")
        finally:
            conexion.close()

def eliminar_usuario(id):
    conexion = crear_conexion()
    if conexion:
        try:
            cursor = conexion.cursor()
            cursor.execute('DELETE FROM usuarios WHERE id = ?', (id,))
            conexion.commit()
            print("Usuario eliminado exitosamente")
        except sqlite3.Error as e:
            print(f"Error al eliminar usuario: {e}")
        finally:
            conexion.close()

if __name__ == "__main__":
    # Crear la tabla
    crear_tabla()
    
    # Insertar algunos usuarios de ejemplo
    insertar_usuario("Juan Pérez", "juan@ejemplo.com")
    insertar_usuario("María García", "maria@ejemplo.com")
    
    # Mostrar todos los usuarios
    print("\nLista de usuarios:")
    obtener_usuarios()
    
    # Actualizar un usuario
    actualizar_usuario(1, "Juan Pérez Actualizado", "juan.nuevo@ejemplo.com")
    
    # Mostrar usuarios después de la actualización
    print("\nLista de usuarios después de la actualización:")
    obtener_usuarios()
    
    # Eliminar un usuario
    eliminar_usuario(2)
    
    # Mostrar usuarios después de la eliminación
    print("\nLista de usuarios después de la eliminación:")
    obtener_usuarios() 