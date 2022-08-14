var ingredientes = [] //lista vazia

var quantidade = parseInt(prompt('Quantos ingredientes você vai adicionar?'))

var contador = 1

while (contador <= quantidade) {
  var ingrediente = prompt('Informe o ingrediente ' + contador)

  ingredientes.push(ingrediente)

  contador++
}
// criando a variavel existe para verificar se contem item repetido
var existe = false
for (var posicao = 0; posicao < ingredientes.length; posicao++) {
  if (ingredientes[posicao] == ingrediente) {
    existe = true
    break
  }
}

if (existe == false) {
  ingredientes.push(ingrediente) //se for falso  acrescenta item no array
  contador++
}
console.log(ingredientes)
