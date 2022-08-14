var tela = document.querySelector('canvas') // variavel tela
var pincel = tela.getContext('2d') //variavel pincel recebe a tela com o conteudo 2d
pincel.fillStyle = 'lightgrey' //atribuindo uma cor ao meu estilo do pincel antes de preencher
pincel.fillRect(0, 0, 600, 400) //posicionamento do pincel no eixo x, y zero com a altura e largura preenchimento
pincel.fillStyle = 'green'
pincel.fillRect(0, 0, 200, 600)

pincel.fillStyle = 'red'
pincel.fillRect(400, 0, 200, 600)

//criando triangulo
pincel.fillStyle = 'yellow'
pincel.beginPath() //começando caminho
pincel.moveTo(300, 200) //movendo o ponto do pincel
pincel.lineTo(200, 400)
pincel.lineTo(400, 400)
pincel.fill()

//fazendo a bolinha
pincel.fillStyle = 'orange'
pincel.beginPath()
pincel.arc(300, 200, 50, 0, 2 * 3.14)
pincel.fill()
