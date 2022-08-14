/* Funções 2 parâmetros */

//função pula linha
/*function PularLinha() {
  document.write('<br>')
}
// função mostra frase
function mostra(frase) {
  document.write(frase)
  PularLinha()
}
//função calcula imc
function CalcularImc(altura, peso) {
  var imc = peso / (altura * altura)
  return imc
}
// a variavel recebe a função calcula imc + o valor de retorno
var FlavioImc = CalcularImc(1.71, 73) // + valor de retorno return imc.
var AmigoImc = CalcularImc(1.72, 68)
var tot = FlavioImc + AmigoImc
// chamada de função
mostra(FlavioImc)
mostra(AmigoImc)
document.write('a soma dos imcs é : ' + tot)*/

// interação com usúarios
function pulaLinha() {
  document.write('<br><br>')
}
function mostra(frase) {
  document.write(frase)
  pulaLinha()
}
function calcularImc(altura, peso) {
  return peso / (altura * altura)
}
var nome = prompt('informe seu nome ')
var alturaInformada = prompt(nome + ' informe sua altura')
var pesoInformado = prompt('informe seu peso')

var imc = calcularImc(alturaInformada, pesoInformado)
mostra(nome + ' O imc calculado é ' + imc)

if (imc < 18.5) {
  mostra('voce está abaixo do recomendado')
}
if (imc > 35) {
  mostra('voce está acima do recomendado')
}
if (imc >= 18.5 && imc <= 35) {
  mostra('voce está na média')
}
