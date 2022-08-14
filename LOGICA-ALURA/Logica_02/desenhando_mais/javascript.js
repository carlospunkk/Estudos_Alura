var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')

pincel.fillStyle = 'grey'
pincel.fillRect(0, 0, 600, 400)

var desenha = false

function desenhaCirculo(evento) {
  if (desenha) {
    var cores = document.querySelector('input') // cores do input
    var x = evento.pageX - tela.offsetLeft
    var y = evento.pageY - tela.offsetTop
    pincel.fillStyle = cores.value //passando as cores com o valor
    pincel.beginPath()
    pincel.arc(x, y, 10, 0, 2 * 3.14)
    pincel.fill()
  }
  console.log(x + ',' + y)
}
tela.onmousemove = desenhaCirculo

function habilitaDesenhar() {
  desenha = true
}
function desabilitaDesenhar() {
  desenha = false
}
tela.onmousedown = habilitaDesenhar
tela.onmouseup = desabilitaDesenhar

// atribuindo diretamente a função anonima

/*
function() { // expressão 1
  desenha = true
}
function() {  // expressão 2
  desenha = false
}
tela.onmousedown = function() // expressão 1 
tela.onmouseup = function()   // expressão 2
*/
