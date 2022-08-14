function pulaLinha() {
  document.write('<br><br>')
}
function mostra(frase) {
  document.write(frase)
  pulaLinha()
}
var contador = 30

while (contador >= 0) {
  mostra(contador)
  contador = contador - 1
}

mostra('fim')
