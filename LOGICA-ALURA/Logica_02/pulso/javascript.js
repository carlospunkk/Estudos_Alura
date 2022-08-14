var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')

pincel.fillStyle = 'lightgray'
pincel.fillRect(0, 0, 600, 400)

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor
  pincel.beginPath()
  pincel.arc(x, y, raio, 0, 2 * Math.PI)
  pincel.fill()
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400)
}

var raio = 19
var fatorcrescimento = 0

function atualizaTela() {
  limpaTela()
  if (raio > 30) {
    fatorcrescimento = -1
  } else if (raio < 20) {
    fatorcrescimento = 1
  }
  raio = raio + fatorcrescimento
  desenhaCirculo(300, 200, raio, 'blue')
}

setInterval(atualizaTela, 20)

/*function exibemsg() {
  console.log('chamei msg')
}
setInterval(exibemsg, 1000)*/

/*limpaTela()
desenhaCirculo(x, 20, 10)

// x , y , raio
desenhaCirculo(20, 20, 10)
desenhaCirculo(80, 20, 10)*/
