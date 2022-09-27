console.log("loja Carros")

const listaCarros = new Array("Audi", "Uno", "Ferrari")

//adicionar novo carro 
listaCarros.push("Palio")
//mostrar lista 
console.log(listaCarros)

//variaveis
const habilitacao = false;
const idade = 18;

//condicionais 
if (idade >= 18 && habilitacao == true) {
  console.log("posso comprar o carro , habilitação e idade ok")
  listaCarros.splice(0, 1)
  console.log(listaCarros)
} else {
  console.log("habilitação ou idade irregular regularize sua situação")
}


