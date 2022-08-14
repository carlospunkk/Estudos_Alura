function pulaLinha() {
  document.write('<br><br>')
}
function mostra(frase) {
  document.write(frase)
  pulaLinha()
}
function sorteia(sorte) {
  return (sorte = Math.round(Math.random() * 20))
}
// sorte é o numero de parametro recebido
/*var sorte = parseInt(prompt('tente adivinhar digite um numero entre 0 e 20'))
var s = sorteia(sorte)
mostra('o numero é ' + s)

if (s == sorte) {
  mostra('vc acertou')
} else {
  mostra('voce errou')
}
*/
//outra forma de fazer sorteio

function pulaLinha() {
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

function sorteia(n) {
  return Math.round(Math.random() * n)
}
var numeroPensado = sorteia(2)
var tentativas = 1
while (tentativas <= 3) {
  var chute = parseInt(prompt('Já pensei. Qual você acha que é?'))

  if (chute == numeroPensado) {
    mostra('Uau! Você acertou, pois eu pensei no ' + numeroPensado)
    break
  } else {
    if (chute > numeroPensado) {
      mostra('Você errou! Seu chute é maior que o número pensado!')
    } else {
      mostra('Você errou! Seu chute é menor que o número pensado!')
    }
    tentativas++ // nova tentativa
  }
}
