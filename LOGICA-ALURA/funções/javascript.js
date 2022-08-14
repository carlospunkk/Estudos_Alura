//chamada com parametros
function exibeSaudacao(nome) {
  alert('olá ' + nome)
}
exibeSaudacao('pedro')
//uma serie de instruções para executar um unico comportamento com return
function somarDoisValores(valor1, valor2) {
  resultadoDasoma = valor1 + valor2
  return resultadoDasoma
}
console.log(somarDoisValores(200, 1000))
