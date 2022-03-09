'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var BASE = 2;
  var posicion = 0;
  var acumulador = 0;
    for(var i = num.length - 1; i >= 0; i--) {
      var valor = num[i]
      var acumulador = acumulador + Math.pow(BASE, posicion) * valor
      var posicion = posicion +1                                   
} 
  return(acumulador)
}

function DecimalABinario(num) {
  // tu codigo aca
    var binario = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binario =  (num % 2) + (binario);
    }
    return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}