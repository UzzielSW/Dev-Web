window.onload = () =>{
    var app = document.getElementById("app");
    var inputCaracteres = document.getElementById("numero-caracteres");
    var botonMin = document.getElementById("minus")
    var botonMax = document.getElementById("plus")
    var botonSimbolos = document.getElementById("btn-simbolos")
    var botonNumeros = document.getElementById("btn-numeros")
    var botonMayusculas = document.getElementById("btn-mayusculas")
    var botonGenerar = document.getElementById("btn-generar")

    var configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    };

    var arregloNumeros = "0123456789";
    var arregloSimbolos = "!#$%&/()=?><,;.:{[]}*+^-_|";
    var arregloMin = "abcdefjhijklmnopqrstuvwxyz";
    var arregloMay = arregloMin.toLocaleUpperCase();

    // console.log(app.elements)
    // console.log(arregloMin)

    // deshabilitar el submit del formulario
    app.addEventListener("submit", (e) =>{
        e.preventDefault();
    })

    // evento boton minus
    botonMin.addEventListener("click", () =>{
        if(configuracion.caracteres > 1){
            configuracion.caracteres -= 1;
            inputCaracteres.value = configuracion.caracteres;
        } 
    })
    // evento boton plus
    botonMax.addEventListener("click", () =>{
        configuracion.caracteres += 1;
        inputCaracteres.value = configuracion.caracteres;
    })

    // this solo funciona utilizando function(){}
    // invirtiendo valores true y false
    // configuracion.simbolos = !configuracion.simbolos;

    // Evento boton simbolos
    botonSimbolos.addEventListener("click", (e) =>{ 
        changeBoton(e.target);
        configuracion.simbolos = (e.target.classList.contains('icon-check'))? true:false;
        // console.log(configuracion.simbolos)
    })
    

    //Evento boton numeros
    botonNumeros.addEventListener("click", (e) =>{
        changeBoton(e.target);
        configuracion.numeros = (e.target.classList.contains('icon-check'))? true:false;
        // console.log(configuracion.numeros)
    })
    

    //Evento boton mayusculas
    botonMayusculas.addEventListener("click", (e) =>{
        changeBoton(e.target);
        configuracion.mayusculas = (e.target.classList.contains('icon-check'))? true:false;
        // console.log(configuracion.mayusculas)
    })

    // funcion de cambios en los botones (cambio de clases)
    function changeBoton (element){
        element.classList.toggle("false")
        element.classList.toggle("icon-check")
        element.classList.toggle("icon-times")
    };


    // evento boton generar

    botonGenerar.addEventListener("click", () =>{
        generarPasword()
    })

    function generarPasword(){
        var password = ''
        
        var cant=0
        while(true){
            if(cant<configuracion.caracteres && configuracion.minusculas){
                password += arregloMin[Math.floor(Math.random() * arregloMin.length)]
                cant++;
            }else break;
            
            if(cant<configuracion.caracteres){
                if(configuracion.mayusculas){
                    password += arregloMay[Math.floor(Math.random() * arregloMay.length)]
                    cant++;
                }
            }else break;

            if(cant<configuracion.caracteres){
                if(configuracion.simbolos){
                    password += arregloSimbolos[Math.floor(Math.random() * arregloSimbolos.length)]
                    cant++;
                }
            }else break;

            if(cant<configuracion.caracteres){
                if(configuracion.numeros){
                    password += Math.floor(Math.random() * 9)
                    cant++;
                }
            }else break;
        }

        var inputPassword = document.getElementById("input-password")
        inputPassword.value = password;
    }

    // generarPasword()


    // evento del input de password
    var inputPassword = document.getElementById("input-password")

    inputPassword.addEventListener("click", () =>{
        copiarPassword()
    })

    function copiarPassword(){
        inputPassword.select()
        document.execCommand('copy')

        var alertaCopiado = document.getElementById("alerta-copiado")
        alertaCopiado.classList.add("active")

        setTimeout(()=>{ alertaCopiado.classList.remove("active") },1500)
    }
}