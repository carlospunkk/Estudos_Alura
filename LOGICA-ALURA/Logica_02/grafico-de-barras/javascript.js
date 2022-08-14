function desenhaquadrado(x, y, tamanho, cor) {
  var tela = document.querySelector('canvas')
  var pincel = tela.getContext('2d')
  //quadrado
  pincel.fillStyle = cor // cor de preenchimento
  pincel.fillRect(x, y, tamanho, 50) // config tamanho
  //borda
  pincel.fillStroke = 'black' // borda preta
  pincel.strokeRect(x, y, 50, 50) //config borda
}
//desenha 4 quadrados de 50 em 50
for (x = 0; x < 200; x = x + 50) {
  //              0  y tam   cor
  desenhaquadrado(x, 0, 50, 'red') //parametros
}
