//let numeroSecreto = 6;
//let numeroUsuario = prompt("Me indicas un n�mero por favor:");

//console.log(numeroUsuario);

//if (numeroUsuario == numeroSecreto) {
  //  alert('Acertaste el n�mero');
//}

/*
let NOMBRE; ("Luna");
let EDAD; 25;
let numeroDeVentas; 50;
let saldoDisponible; 1000;

alert( "¡Error! Completa todos los campos");

let mensajeDeError;

if (NOMBRE; EDAD; numeroDeVentas; saldoDisponible)
*/

// si tiene manzana o tiene banama…

let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
  }
}