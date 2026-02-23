// las promesas son utilizadas junto con consultas de Ajax[usualmente]
// las promesas son una sentencia la cual va a estar a la escucha de si sucede o no algo.
// SI sucede algo ejecutamos una funcion
// sino ejecutamos otra funcion 

// definir una promesa
const promesa = new Promise((resolve, reject)=>{
    let accion = true; 

    if(accion) // si fue correcta la accion ejecuta resolve
        resolve("active function resolve()");
    else
        reject("active function reject()");

});

// si se ejecuta resolve se ejecutara el siguiente codigo
promesa.then((message)=>{
    console.log(message)
});

// si se ejecuta reject se ejecutara el siguiente codigo
promesa.catch((message)=>{
    console.log(message)
});