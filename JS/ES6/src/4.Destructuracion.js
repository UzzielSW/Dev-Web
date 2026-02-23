// destructuracion de arreglos

console.log("\n\tDESTRUCTURACION DE VECTOR")

const arr = ['Junior',19,"Universo 11",'Estudiante'];

// destructurar cada elemento del vector(Variables). tambien se puede poner valores por defecto en caso que no este algun elemento(s)
const [name , edad , born, estatus = 'None'] = arr;

// en el caso que se quiera saltar uno. se deja el espacio
// const [name ,  , born, estatus = 'None'] = arr;

// uso habitual de la destructuracion(funciones):

const input = ([name , edad , born, estatus = 'None']) => {
    console.log(
    `
    Nombre: ${name}
    Edad: ${edad}
    Origen: ${born}
    Profesion: ${estatus}
    `
    )
}

input(arr)


// DESTRUCTURACION DE OBJETOS
console.log("\n\tDESTRUCTURACION DE OBJETOS")


const person = {
    name: "Junior",
    edad: 19,
    born: "Universo 11",
    profesion: "Developer [Python, Js, Java]"
}

// ya que los objetos tienen subtitulos en los cuales se accede a los valores
// se puede destructurar exactamente los valores que se necesitan usando los subtitulos

// destructuracion a variables
const {nameOb, bornOb, profesionOb} = person;

// destructuracion a funciones

const printObjet = ({name, born, profesion="Estudiante"}) => {
    console.log(
        `\n${name} is ${profesion}\nviene de ${born}`
    )
}

printObjet(person);
