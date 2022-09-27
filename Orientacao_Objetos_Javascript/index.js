//importando o modulo
import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

//clientes                   //parametros
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233308);





//conta corrente
const contacorrenteRicardo = new contaCorrente(cliente1, 1001)
//colocando valores na minha contacorrente
//contacorrenteRicardo._saldo = 0
//contacorrenteRicardo.agencia = 
//associação atributo cliente há conta cliente1 
contacorrenteRicardo.cliente = cliente1




// classe conta corrente instanciar
const contacorrenteAlice = new contaCorrente(cliente2, 1002)



//meu atributo cliente recebe o meu molde(instancia) new cliente nome e cpf
//contacorrenteAlice.cliente = new Cliente()
contacorrenteAlice.cliente = cliente2;

//contacorrenteAlice.cliente.nome = "Alice"
//contacorrenteAlice.cliente.cpf = 21213434345


//deposito
contacorrenteRicardo.depositar(500)
//console.log("o valor do deposito de Ricardo é...." + contacorrenteRicardo.saldo)

//contacorrenteAlice.depositar(0)
//console.log("o valor do deposito  de Alice é...." + contacorrenteAlice.saldo)

//transferir
contacorrenteRicardo.transferir(200, contacorrenteAlice)


//saque

//const valorSacado = contacorrenteRicardo.sacar(0)
//console.log("valor sacado da conta de ricardo é : " + valorSacado)
//console.log("o saldo da conta de Ricardo é " + contacorrenteRicardo.saldo)

//contacorrenteAlice.sacar(0)
//console.log("o saldo da conta de alice é " + contacorrenteAlice.saldo)








//mostrando na tela
console.log(contaCorrente.numeroDecontas)
//console.log(cliente2)




