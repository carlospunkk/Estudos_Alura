function pulaLinha() {
  document.write('<br><br>')
}
function mostra(frase) {
  document.write(frase)
  pulaLinha()
}
/*var multiplicador = 1

while (multiplicador <= 10) {
  mostra(7 * multiplicador)
  multiplicador = multiplicador + 1
}*/

// outra estrutura for
/*for (var multiplicador = 1;multiplicador <= 10; multiplicador++ ){
  mostra(mostra * multiplicador);
}*/
// input usuário tabuada
/*var contador = parseInt(prompt('qual tabuada você quer saber ? digite....'))
for (var numero = 1; numero <= 10; numero++) {
  mostra(
    'a tabuada do ' + contador + ' x ' + numero + ' = ' + contador * numero
  )
}*/
