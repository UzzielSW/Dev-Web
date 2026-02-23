// CLASES Y OBJETOS DE CLASES

class Usuario{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    toString(){
        // obligatorio poner this para referirse a los atributos 
        return `\nUsr: ${this.name}\nID: ${this.id}`;
    }
};

// herencia
class Estudiante extends Usuario{
    constructor(name, id, carrera){
        super(name, id);
        this.carrera = carrera;
    }

    toString(){
        return super.toString() + `\nCarrera: ${this.carrera}`
    }
}



// creacion de objetos

// USUARIO
const us1 = new Usuario("Jr.","11");

console.log(us1.toString());

// ESTUDIANTE
const est1 = new Estudiante("Wardell", "1127", "NetHunter");

console.log(est1.toString());