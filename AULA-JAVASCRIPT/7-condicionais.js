console.log("condicionais")
const listaDestinos = new Array(
  "são paulo",
  "fortaleza",
  "goias",
  "rio de janeiro"

);
//usuario
// const idadeCompardor = 15;
// const estaAcompanhada = true;

// //condicional
// console.log(listaDestinos)
// //true
// if (idadeCompardor >= 18) {
//   console.log("comprador maior de idade")
//   listaDestinos.splice(0, 1)

// } else if (estaAcompanhada) {
//   console.log("comprador esta acompanhado")
//   listaDestinos.splice(0, 1)
// } else {
//   console.log("não é maior de idade e não posso vender")
// }

// console.log(listaDestinos)


//usuario
const idadeCompardor = 21;
const estaAcompanhada = false;
const temPassagemComprada = true;


//condicionais (OU) ||  e (E) && 
console.log(listaDestinos)
//true
if (idadeCompardor >= 18 || estaAcompanhada == true) {
  console.log("comprador maior de idade")
  listaDestinos.splice(0, 1)

} else {
  console.log("não é maior de idade e não posso vender")
}
console.log("embarcando")
if (idadeCompardor >= 18 && temPassagemComprada == true) {
  console.log("boa viagem")
} else {
  console.log("não pode embarcar")
}

console.log(listaDestinos)






