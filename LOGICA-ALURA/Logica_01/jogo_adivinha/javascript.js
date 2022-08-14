function pulaLinha() {
  document.write('<br><br>')
}
function mostra(frase) {
  document.write(frase)
  pulaLinha()
}
// arredonda com round e o Math.randon sorteia um numero aleatorio até 10
var numeroPensado = Math.round(Math.random() * 10)
var chute = parseInt(prompt('chuta um numero pra min e tente acertar'))

if (chute == numeroPensado) {
  mostra('voce acertou ')
} else {
  mostra('você errou o numero foi ' + numeroPensado)
}
