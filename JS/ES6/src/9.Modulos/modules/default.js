// cuando se importa por default se importa un solo elemento
// este puede ser recibido con cualquier nombre, mientras las otras opciones se debe respetar el nombre de cada elemento.

class Persona{
    constructor(name, age, genero){
        this.name = name,
        this.age = age,
        this.genero = genero;
    }

    toString(){
        return `\nname: ${this.name}\nage: ${this.age}\ngenero: ${this.genero}`
    }
}

// se debe exportar el elemento
export default Persona;