var tela = document.querySelector('canvas') // variavel tela
var pincel = tela.getContext('2d') //variavel pincel recebe a tela com o conteudo 2d

//triangulo 01 black
pincel.fillStyle = 'black'
pincel.beginPath()
pincel.moveTo(50, 50) //posiciona o ponto partida da linha 1
pincel.lineTo(50, 400) //linha 2
pincel.lineTo(400, 400) //linha 3
pincel.fill() //preencher cores

//triangulo 02 white
pincel.fillStyle = 'green'
pincel.beginPath()
pincel.moveTo(100, 175)
pincel.lineTo(100, 350)
pincel.lineTo(275, 350)
pincel.fill()
