var filmes = []

var quantidadedefilmes = parseInt(prompt('quantos filmes quer colocar'))
var contador = 1

while (contador <= quantidadedefilmes) {
  var novofilme = prompt('digite o novo filme ' + contador)
  filmes.push(novofilme)
  contador++
}

console.log(filmes)
