var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')

pincel.fillStyle = 'gray'
pincel.fillRect(0, 0, 600, 400)

function desenhaCirculo(x, y, raio) {
  pincel.fillStyle = 'blue'
  pincel.beginPath()
  pincel.arc(x, y, raio, 0, 2 * Math.PI)
  pincel.fill()
}

function limpaTela() {
  pincel.clearRect(0, 0, 600, 400)
}

var x = 20
var sentido = 1
function atualizaTela() {
  limpaTela()
  if (x > 600) {
    // se x for maior que 600 o sentido fica negativo
    sentido = -1
  } else if (x < 0) {
    //senão se x for menor que 0 o sentido fica positivo
    sentido = 1
  }

  desenhaCirculo(x, 40, 10)
  x = x + sentido
}

setInterval(atualizaTela, 10)

/*function exibemsg() {
  console.log('chamei msg')
}
setInterval(exibemsg, 1000)*/

/*limpaTela()
desenhaCirculo(x, 20, 10)

// x , y , raio
desenhaCirculo(20, 20, 10)
desenhaCirculo(80, 20, 10)*/
