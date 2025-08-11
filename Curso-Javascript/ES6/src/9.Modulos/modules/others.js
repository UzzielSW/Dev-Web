// existen dos formas de exportar. individualmente utilizando palabra [export] antes del elemento

// ejemeplo: export element = value;

// o al final del archivo hacer una lista de todo los que se va exportar

// ejemplo: export {element1, element2, element3};

import Persona from './default'
//importo la clase persona para hacer herencia de ella...nada mas

class Estudiante extends Persona{
    constructor(name, age, genero, carrera){
        super(name,age,genero);
        this.carrera = carrera;
    }

    constructor({name, age, genero, carrera}){
        super(name,age,genero);
        this.carrera = carrera;
    }

    toString(){
        return super.toString() + `\ncarrera: ${this.carrera}`;
    }
}


class Trabajador extends Persona{
    constructor(name, age, genero, oficio, salario){
        super(name,age,genero);
        this.oficio = oficio;
        this.salario = salario;
    }

    constructor({name, age, genero, oficio, salario}){
        super(name,age,genero);
        this.oficio = oficio;
        this.salario = salario;
    }

    toString(){
        return super.toString() + `\noficio: ${this.oficio}\nsalario: ${this.salario}`;
    }
}

export {Estudiante, Trabajador};