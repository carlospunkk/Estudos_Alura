function pulalinha() {
  document.write('<br><br>')
}
function mostra(frase) {
  document.write(frase)
  pulalinha()
}
/*var idadePedro = 28
var idadeMarta = 32
var idadeJorge = 60
var idadeBete = 22

var total = idadeBete + idadeMarta + idadeJorge + idadePedro
var media = total / 4
mostra(media)*/

/*var totfamilia = parseInt(prompt('digite quantas pessoas tem na sua familia'))
var numero = 1 // variavel contadora
var totalidades = 0 // variavel acumuladora

while (numero <= totfamilia) {
  var idade = parseInt(prompt('informe a idade do familiar'))
  totalidades = totalidades + idade // somando os totais das idades e armazenando na cvariavel total.
  var media = totalidades / totfamilia
  numero++
}

mostra('o total das idades é ' + totalidades + ' e a minha media é ' + media)*/
// exemplo 2

function pulaLinha() {
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

var totalDeEventos = parseInt(prompt('Informe o total de eventos'))

var contador = 1
var totalGastoComEventos = 0

while (contador <= totalDeEventos) {
  var gasto = parseFloat(prompt('Informe total gasto com evento'))
  totalGastoComEventos = totalGastoComEventos + gasto
  contador++
}

var media = totalGastoComEventos / totalDeEventos

mostra('A média de gastos é ' + media)
