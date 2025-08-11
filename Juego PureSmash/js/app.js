(function main(){
    
    // clase Objeto Jugador
    class ObjetoJugador{
        constructor(nombre, puntos, color, turnos){
            this.nombre = nombre
            this.puntos = puntos
            this.color = color
            this.turnos = turnos
            this.gemas = []
        }

        AddGemas(gema){
            this.gemas.push(gema)
        }

        addTurno(cant){
            this.turnos += cant
        }
    };


    // constructor del objeto 
    function objetoBox
    (puntos, SupIzq1, SupIzq2, SupDer1, SupDer2, InfIzq1, InfIzq2, InfDer1, InfDer2) 
    {
        this.puntos = puntos;
        //esquinas superiores
        this.SupIzq1 = SupIzq1;
        this.SupIzq2 = SupIzq2;
        this.SupDer1 = SupDer1;
        this.SupDer2 = SupDer2;
        //esquinas inferiores
        this.InfIzq1 = InfIzq1;
        this.InfIzq2 = InfIzq2;
        this.InfDer1 = InfDer1;
        this.InfDer2 = InfDer2;
    }


    // creando jugadores
    var jugador1 = new ObjetoJugador('Jugador1', 0, 'blue', 0)
    var jugador2 = new ObjetoJugador('Jugador2', 0, 'red', 0)

// -------------------------------------------------------------

    // creando matriz de circulos
    const CANTcir = 3  //variable controla la cantidad de circulos
    var matrizCirculos = new Array(CANTcir)
    
    for(var i = 0; i < CANTcir ; i++){
        matrizCirculos[i] = new Array(CANTcir)
    }
    

    //inicializando los valores de ciculos
    for(var i = 0; i < CANTcir ; i++){
        for(var k = 0; k < CANTcir ; k++){
            matrizCirculos[i][k] = 0
        }
    }

//-----------------------------------------------------------------

    // creando matriz de cuadros
    const CANTcua = (CANTcir-1) //variable controla la cantidad de cuadros
    var cuadros = new Array(CANTcua);

    for(var i = 0; i < CANTcua ; i++){
        cuadros[i] = new Array(CANTcua)
    }


    // inicializando los valores de los cuadros
    for(var i = 0; i < CANTcua ; i++){
        for(var k = 0; k < CANTcua ; k++){
            cuadros[i][k] = new objetoBox(1, i, k, i, k+1, i+1, k, i+1, k+1);
        }
    }

//----------------------------------------------------------------------

    // obteniendo nodos del menu principal
    var play = document.getElementById('Play')
    var Score = document.getElementsByClassName("Score")
    var Game_Rules = document.getElementsByClassName("Game-Rules");
    
    
    Play.addEventListener("click", Jugar);
    var turnos = 1
    
    function Jugar(){
        var containerMenu = document.getElementById("containerMenu")
        containerMenu.classList.add("esconder");
        containerMenu.classList.remove("containerMenu");

        var containerPlay = document.getElementById("containerPlay");
        containerPlay.classList.add("containerPlay");

        var boxcirculo = document.getElementById("boxcirculo");

        for(var i = 0; i < CANTcir*CANTcir ; i++){
            var circle = document.createElement("div");
            circle.setAttribute("class", "circle");
            boxcirculo.appendChild(circle);
        }

        var boxcuadro = document.getElementById('boxcuadro')

        for(var i = 0; i < CANTcua*CANTcua ; i++){
            var cuadro = document.createElement("div");
            cuadro.setAttribute("class", "cuadro");
            boxcuadro.appendChild(cuadro);
        }

        var circulos = document.getElementsByClassName("circle");
        console.log(circulos);

        for(var i = 0; i < circulos.length; i++){
            circulos[i].addEventListener("click", selected)
        }


        function selected(e){
            e.target.classList.add("selected");
            var circulos = document.getElementsByClassName("circle");
        
            for(var i = 0; i < circulos.length; i++){
                if(circulos[i].classList.contains('selected')){
                    circulos[i].style.backgroundColor = "#790ddd";
                    circulos[i].classList.remove('selected');
                    circulos[i].style.cursor = "default"
                    circulos[i].removeEventListener("click", selected)
                    switch(i){
                        case 0: posi = 0; posk = 0; break;
                        case 1: posi = 0; posk = 1; break;
                        case 2: posi = 0; posk = 2; break;
                        case 3: posi = 1; posk = 0; break;
                        case 4: posi = 1; posk = 1; break;
                        case 5: posi = 1; posk = 2; break;
                        case 6: posi = 2; posk = 0; break;
                        case 7: posi = 2; posk = 1; break;
                        case 8: posi = 2; posk = 2; break;
                    }
                }
            }

            matrizCirculos[posi][posk] = 1;

            
        }
    };
    
    
    
    //turno extra
    jugador1.addTurno(1);

    // mostrando gemas
    // console.log(jugador1.gemas);


    //inicializando el turno
    
    //comienzo del turno del jugador
    // do{
    //     console.log("generando turno")
    //     turnos--
    // }while(turnos)

}())
