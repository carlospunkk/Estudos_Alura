var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')

//configurações da tela
pincel.fillStyle = 'grey'
pincel.fillRect(0, 0, 600, 400)

//criando array de cores
var cores = ['blue', 'red', 'green', 'yellow']
var idcorAtual = 0 // começa com blue

//criando função desenha circulo e o fillstyle com seu array de cores
function desenhaCirculo(evento) {
  var x = evento.pageX - tela.offsetLeft
  var y = evento.pageY - tela.offsetTop
  pincel.fillStyle = cores[idcorAtual]
  pincel.beginPath()
  pincel.arc(x, y, 10, 0, 2 * 3.14)
  pincel.fill()
  console.log(x + '' + y)

  if (evento.shiftKey) {
    alert('vc apertou o shift')
  }
}
//chamando a tela ao clicar desenhar o circulo
tela.onclick = desenhaCirculo

// criando a função que vai mudar a cor dos circulos
function mudaCor() {
  idcorAtual++
  if (idcorAtual >= cores.length) {
    idcorAtual = 0
    // volta para a primeira cor azul
  }
  return false // para não exibir o menu padrao do canvas
}
tela.oncontextmenu = mudaCor // chama a função mudar cor
