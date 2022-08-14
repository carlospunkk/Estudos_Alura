var input = document.querySelector('input')

var segredos = [5, 10, 7, 8, 3] //defini o array
input.focus() // foquei o cursor
function verifica() {
  // função verificar
  var achou = false // tratamento da mensagem
  for (
    var posicao = 0;
    posicao < segredos.length;
    posicao++ // for para percorrer as posições do array
  )
    if (input.value == segredos[posicao]) {
      //condicional se valor digitado for igual ao segredo na posição "msg= vc acertou"
      alert('voce acertou!!!')
      achou = true //tratamento mensagem
      break //break para na hora que vc acertar
    }
  if (achou == false) {
    // se variavel achou for igual a false vc errou
    alert('voce errou')
  }
  input.value = '' //deixar a caixa do input vazia
  input.focus() //deixar o focus piscando no input
}

var botao = document.querySelector('button')
botao.onclick = verifica //junção do btn click com a função verifica
