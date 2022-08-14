function pulaLinha() {
  document.write('<br>')
  document.write('<br>')
}
function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

var limite = prompt('entre com a data limite')
var anoCopa = 1930
while (anoCopa <= limite) {
  mostra('teve copa em ' + anoCopa)
  anoCopa = anoCopa + 4
}
mostra('ufa ! esses foram os anos de copa até '+limite);
