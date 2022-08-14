function DesenhaQuadrado(x, y, cor) {
  var tela = document.querySelector('canvas') // variavel tela
  var pincel = tela.getContext('2d') //variavel pincel recebe a tela com o conteudo 2d

  pincel.fillStyle = cor

  pincel.fillRect(x, y, 50, 50)
  pincel.fillStroke = 'black' //borda cor
  pincel.strokeRect(x, y, 50, 50) //cordenadas borda
}

//passando os parametros
DesenhaQuadrado(0, 0, 'blue')
DesenhaQuadrado(0, 50, 'red')
DesenhaQuadrado(0, 100, 'orange')
