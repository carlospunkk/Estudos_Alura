var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')
pincel.fillStyle = 'lightgray'
pincel.fillRect(0, 0, 600, 400)

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor
  pincel.beginPath()
  pincel.arc(x, y, raio, 0, 2 * 3.14)
  pincel.fill()
}
//função dentro de função
function desenhaFlor(x, y) {
  desenhaCirculo(x, y + 20, 10, 'blue')
  desenhaCirculo(x, y, 10, 'red')
  desenhaCirculo(x, y - 20, 10, 'yellow')
  desenhaCirculo(x - 20, y, 10, 'orange')
  desenhaCirculo(x + 20, y, 10, 'black')
}
//parametros desenha flor
desenhaFlor(300, 200)
