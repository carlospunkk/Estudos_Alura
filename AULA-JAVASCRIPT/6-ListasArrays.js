console.log("Listas")

// const salvador = 'Salvador'
// const saoPaulo = 'São Paulo'
// const rioDejaneiro = "Rio de Janeiro"
// console.log("Destinos Possiveis")
// console.log(salvador, saoPaulo, rioDejaneiro)

const novaLista = new Array(
  "salvador",
  "sao paulo",
  "rio de janeiro"
)
//adicionado item na lista (push)
novaLista.push('curitiba')
// mostrando na tela 
console.log(novaLista)

//removendo itens da lista (splice) 
// Precisaremos declarar a quantidade de itens a serem deletados e a posição inicial para que a remoção seja feita
//novaLista.splice(1, 2)
console.log(novaLista)
//acessando item  da lista
console.log(novaLista[1])

