let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Correcto, Acertaste el numero en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero Secreto es Menor");
    } else {
      asignarTextoElemento("p", "El numero Secreto es Mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  let valorCaja = (document.getElementById("valorUsuario").value = "");
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se asignaron todos los numeros posibles');
  }else{

  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
}
function condicionesiniciales() {
  asignarTextoElemento("h1", "Juego del número Secreto!");
  asignarTextoElemento("p", "Indica un numero entre 1 y 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  // Indicar mensaje de numeros
  condicionesiniciales();
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}
condicionesiniciales();
