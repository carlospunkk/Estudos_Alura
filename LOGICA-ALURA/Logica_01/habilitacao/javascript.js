function pulaLinha() {
  document.write('<br><br>')
}
function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

var idade = parseInt(prompt('qual é a sua idade'))
var temcarteira = prompt('tem carteira ? responda S OU N')

if (idade >= 18 && temcarteira == 's') {
  mostra('pode dirigir')
} else {
  mostra('não pode dirigir')
}
