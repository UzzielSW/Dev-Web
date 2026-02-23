window.onload = function () {
  var sumar = document.getElementById("Sumar");
  var restar = document.getElementById("Restar");
  var multiplicar = document.getElementById("Multiplicar");
  var dividir = document.getElementById("Dividir");

  sumar.addEventListener("click", suma); // agregando un evento
  restar.addEventListener("click", resta);
  multiplicar.addEventListener("click", multiplica);
  dividir.addEventListener("click", divide);

  function Operaciones(opc) {

    if (!document.getElementById("numero1").value || !document.getElementById("numero2").value) return

    //obteniendo el dato en forma flotante [parseFloat()]
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = document.getElementById("resultado");

    if (opc == "suma") resultado.value = num1 + num2;
    else if (opc == "resta") resultado.value = num1 - num2;
    else if (opc == "multiplica") resultado.value = num1 * num2;
    else if (opc == "divide") resultado.value = num1 / num2;
    else console.log("opcion invalida");
  }

  function suma() {
    Operaciones("suma");
  }

  function resta() {
    Operaciones("resta");
  }

  function multiplica() {
    Operaciones("multiplica");
  }

  function divide() {
    Operaciones("divide");
  }
};