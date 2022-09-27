// classe cliente (molde) com seus atributos nome , cpf .
export class Cliente {
  nome;
  _cpf;

  get nome() {
    return this.nome;
  }

  get cpf() {
    return this._cpf;

  }
  // construtor uma função associo o nome e cpf com os meus atributos nome e _cpf 
  constructor(nome, cpf) {
    this.nome = nome
    this._cpf = cpf
  }


}