const estudiantes = [

    {
        nombre: 'Carlos',
        calificacion: 20
    },
    {
        nombre: 'Juan',
        calificacion: 12
    },
    {
        nombre: 'Maria',
        calificacion: 9
    },
    {
        nombre: 'Pepe',
        calificacion: 7
    },
    {
        nombre: 'Arturo',
        calificacion: 17
    },
];


console.log("\nejemplo 1 [arreglo de cantidad de caracteres de los nombres de los objetos]") 

const cant_carac_nom = estudiantes.map( estudiante => `${estudiante.nombre} -> caracteres:[${estudiante.nombre.length}]`)


console.log(cant_carac_nom)


console.log("\nejemplo 2 [coleccion de nombres de los objetos]")

let estudiantesNombres = [];
    estudiantesNombres = estudiantes.map( estudiante => estudiante.nombre)

estudiantesNombres.forEach(nombre => console.log(`Nombre: ${nombre}`))
