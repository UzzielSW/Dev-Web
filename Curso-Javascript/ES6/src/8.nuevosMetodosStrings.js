// NUEVOS METODOS PARA LAS CADENAS DE TEXTO Y ARREGLOS

texto = "Hola Mundo"

letra = 'a'
//SABER SI UN TEXTO EMPIEZA CON UN CARACTER O NO
console.log(texto, ` empieza con letra "${letra}":`,texto.startsWith(letra));

letra = 'H'
console.log(texto, ` empieza con letra "${letra}":`,texto.startsWith(letra));

//SABER SI UN TEXTO TERMINA CON UN CARACTER O NO
letra = 'o'
console.log(texto, ` termina con letra "${letra}":`,texto.endsWith(letra));

// SABER SI UN TEXTO INCLUYE UNA PALABRA
letra = "Hola"
console.log(texto, ` incluye "${letra}":`,texto.includes(letra));


// ___________________________________________________________________
arr = ["Hola","mijo","kiuvo", "constancia","pure smash"]

// METODO: .include tambien funciona para los arreglos
console.log(arr, ` incluye "${letra}":`,arr.includes(letra));


// METODO BUSCAR EL PRIMER ELEMENTO DEL ARREGLO QUE CUMPLA UNA CONDICION Y RETORNAR SU VALOR

// buscar el primer elemento del arreglo que tenga mas de 5 letras
console.log(arr.find((element => element.length > 5)))

// METODO BUSCAR EL PRIMER ELEMENTO DEL ARREGLO QUE CUMPLA UNA CONDICION Y RETORNAR SU POSICION
console.log(arr.findIndex((element => element.length > 5)))

// en el caso que no encuentre al elemento retorna -1
console.log(arr.findIndex((element => element.length > 10)))