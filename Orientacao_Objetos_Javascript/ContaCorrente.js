import { Cliente } from "./Cliente.js";

//criando nova classe conta corrente
export class contaCorrente {

  static numeroDecontas = 0
  // variaveis privadas
  _cliente;
  _saldo = 0;

  // variaveis publicas
  agencia;

  get saldo() {
    return this._saldo
  }


  // COLOCAR UM NOVO VALOR USO O SET 
  //set // se novovalor for a instancia da classe Cliente a variavel privada recebe o novo valor
  set cliente(novovalor) {
    if (novovalor instanceof Cliente) {
      this._cliente = novovalor
    }

  }

  //PEGAR O VALOR USO O GET 
  get cliente() {
    return this._cliente
  }
  // construtor inicializa atributos e contar 

  constructor(cliente, agencia) {
    this.cliente = cliente
    this.agencia = agencia
    contaCorrente.numeroDecontas += 1;

  }





  //método
  sacar(valorsaque) {
    if (this._saldo >= valorsaque) {
      this._saldo -= valorsaque
      return valorsaque;
    }
  }
  depositar(valordeposito) {
    if (valordeposito <= 0) {
      return;
    }
    this._saldo += valordeposito
  }
  transferir(dinheiro, conta) {
    //conta.cidade = "sao paulo"
    const valorSacado = this.sacar(dinheiro) // chamando o método da minha propria classe
    conta.depositar(valorSacado)// o segundo parametro conta recebe o método depositar o valor sacado.


  }
}
