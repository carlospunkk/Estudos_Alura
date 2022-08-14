function pulaLinha() {
  document.write('<br>')
  document.write('<br>')
}
function mostra(frase) {
  document.write(frase)
  pulaLinha()
}
var vitorias = parseInt(prompt('entre com o numero de vitorias'))
var empates = parseInt(prompt('entre com o numero de empates'))
var pontos = vitorias * 3 + empates

mostra('os pontos do seu time é : ' + pontos)
//condição (IF)
if (pontos > 28) {
  mostra('seu time esta melhor do que o ano passado')
}
if (pontos < 28) {
  mostra('seu time esta pior que o ano passado')
}
if (pontos == 28) mostra('seu time esta igual ao ano passado')
mostra('fim')
