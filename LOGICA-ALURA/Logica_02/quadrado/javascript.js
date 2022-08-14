function desenhaquadrado(x, y, cor) {
  var tela = document.querySelector('canvas')
  var pincel = tela.getContext('2d')
  //quadrado
  pincel.fillStyle = cor // cor de preenchimento
  pincel.fillRect(x, y, 50, 50) // config tamanho
  //borda
  pincel.fillStroke = 'black' // borda preta
  pincel.strokeRect(x, y, 50, 50) //config borda
}
/*eixo x = horizontal eixo y = vertical*/

// quadrados
/*var x = 0
while (x < 400) {
  desenhaquadrado(x, 50, 'green')

  x = x + 50
}*/
//exemplo com o for
for (var x = 0; x < 400; x = x + 50) {
  desenhaquadrado(x, 0, 'green')
}
