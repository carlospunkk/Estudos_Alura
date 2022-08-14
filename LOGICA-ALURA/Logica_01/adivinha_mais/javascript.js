// abrindo o console eu cosigo ver o meu codigo da função apenas clicando no enter.

var input = document.querySelector('input') // pegando dados do mundo html e armazenando na variavel javascript (input).

var segredo = Math.round(Math.random() * 10) //round arredonda e random sorteia de um há 10
//input.value é o valor dentro da caixinha do input
input.focus()
function verifica() {
  if (input.value == segredo) {
    alert('seu segredo é ' + segredo)
  } else {
    alert('voce errou')
  }
  input.value = '' //deixar a caixa do input vazia
  input.focus() //deixar o focus piscando no input
}

var botao = document.querySelector('button')
botao.onclick = verifica //chamando o evento onclick a minha variavel botao e linkando a função verifica sem a inicialização pelos () parenteses...não executa o codigo ....mas o codigo só é executado após o click.

// outra forma de exiber texto pelo botao ao clicar
/*var input = document.querySelector('input')

function exibetexto() {
  alert(input.value)
}
var bot = document.querySelector('button')
bot.onclick = exibetexto*/
