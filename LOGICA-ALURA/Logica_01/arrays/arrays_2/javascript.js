var input = document.querySelector('input')

function sortiei() {
  return Math.round(Math.random() * 10)
}

function sorteiaNumeros(quantidade) {
  var segredos = []
  var numero = 1
  while (numero <= quantidade) {
    var numerAleatório = sortiei() //recebe os numeros sorteados
    segredos.push(numerAleatório) //empurrei numeros aleatorios para o array
    var achou = false
    for (var posicao = 0; posicao < segredos.length; posicao++) {
      if (segredos[posicao] == numerAleatório) {
        achou = true
        break
      }
    }

    if (achou == false) {
      segredos.push(numerAleatório)
      numero++
    }
  }
  return segredos
}

var segredos = sorteiaNumeros(5) //parametro quantidade
input.focus()

function verifica() {
  var achou = false
  for (var posicao = 0; posicao < segredos.length; posicao++)
    if (input.value == segredos[posicao]) {
      alert('voce acertou!!!')
      achou = true
      break
    }
  if (achou == false) {
    alert('voce errou')
  }
  input.value = ''
  input.focus()
}

var botao = document.querySelector('button')
botao.onclick = verifica
