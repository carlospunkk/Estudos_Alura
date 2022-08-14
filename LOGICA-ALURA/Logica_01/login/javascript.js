var loginCadastrado = 'Alura'
var senhaCadastrada = '1234alura'

var maxtentativas = 3
var tentativaAtual = 1

while (tentativaAtual <= maxtentativas) {
  var LoginInformado = prompt('Informe seu Login')
  var SenhaInformada = prompt('Informe sua Senha')
  if (loginCadastrado == LoginInformado && senhaCadastrada == SenhaInformada) {
    alert('bem vindo ao sistema ' + LoginInformado)
    tentativaAtual = maxtentativas
  } else {
    if (tentativaAtual == 3) {
      alert('você atingiu o maximo de tentativas ! ')
    } else {
      alert('login inválido. tente novamente')
    }
  }
  tentativaAtual = tentativaAtual + 1
}
