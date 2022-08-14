var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')

//configurações da tela
pincel.fillStyle = 'grey'
pincel.fillRect(0, 0, 600, 400)

// a variavel (evento) recebe as cordenadas do evento clique por db panos
function exibeCirculo(evento) {
  // passando as coordenadas para as variaveis x , y
  var x = evento.pageX - tela.offsetLeft
  var y = evento.pageY - tela.offsetTop
  // uso tela.offset para tirar a diferença do eixo x , y
  console.log('posicao clique :  ' + 'X: ' + x + ' , ' + 'Y: ' + y)

  // configurando uma bola na tela ao clicar ela aparecer
  pincel.fillStyle = 'blue' //cor bola
  pincel.beginPath() // caminho
  //parametros pincel.arc (coordenadas x , y , raio, anguloinicial, calc radiano)
  pincel.arc(x, y, 10, 0, 2 * 3.14)
  pincel.fill() //preenchimento cores
}
tela.onclick = exibeCirculo // chamando evento ao clicar na tela

function MudarCor() {
  alert('funcionou')
  return false
}
tela.oncontextmenu = MudarCor
