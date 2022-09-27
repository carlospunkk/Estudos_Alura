console.log(" \n condicionais")
const listaDestinos = new Array(
  "são paulo",
  "fortaleza",
  "goias",
  "rio de janeiro"

);

//usuario
const idadeCompardor = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "são paulo";



//condicionais (OU) ||  e (E) && 

console.log("\n Destinos possiveis")
console.log(listaDestinos)

const podeComprar = idadeCompardor >= 18 || estaAcompanhada == true

// criando a variavel 
let DestinoExiste = false;
let texto = "falso"


let contador = 0;
while (contador <= 3) {
  if (listaDestinos[contador] == destino) {
    DestinoExiste = true;
    texto = "verdadeiro"
    console.log(listaDestinos)
    break;
  } else {
    DestinoExiste = false;
    texto = "falso"
  }
  contador++;
}

console.log("destino existe ", texto)

if (podeComprar && DestinoExiste) {
  console.log("boa viagem")
} else {
  console.log("desculpe tivemos um erro !")
}





// com o For
// for (let cont = 0; cont < listaDestinos.length; cont++) {
//   if (listaDestinos[cont] == destino) {
//     console.log("destino encontado")
//   } else {
//     console.log("destino inexistente")
//   }
// }




