// ahora en ES6 trae una forma mas facil de crear y trabajar con objetos. en este ejemplo aremos una funcion para crear un objeto de como se hacia antes y luego de forma nueva


// ANTES

const crearObjeto = function (name, edad){
    return {
        name: name,
        edad: edad,
        // y los metodos
        toString: function(){
            return(name + " tiene " + edad + " años")
        }
    }
}

const objOld = crearObjeto("bryan", 18);

console.log("\n old: "+objOld.toString())


// NUEVA FORMA DE HACERLO CON ES6

const newCreateObjet = (name, edad) => {
    return{
        name, edad,
        toString(){
            return `${name} tiene ${edad} años`;
        }    
    }
}

const evoObjet = newCreateObjet("JUNIOR", 19);

console.log("\n new: "+ evoObjet.toString())