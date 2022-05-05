//EXERCICIOS DE INTERPRETAÇÃO
// 1 - 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// Vai imprimir o array igual com nome e apelido

// 2 -

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

// Vai imprimir apenas os nomes

//   console.log(novoArrayB)

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
// Não vai imprimir os apelidos diferentes de Chijo,

//   console.log(novoArrayC)

// EXERCICIOS DE ESCRITA
// 1 -
// a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

let arrayNome = pets.map((item, index, array) =>{
    return item.nome

})

    console.log(arrayNome)

//b

let arrySalsicha = pets.filter((item,index,array) =>{
    return item.raca == "Salsicha"

})
    console.log(arrySalsicha)

//c

let mensagemPuddle = pets.filter((item, index, array) =>{
    return item.raca == "Poodle"
})
    console.log(mensagemPuddle)

let imprimePoodle = mensagemPuddle.map ((item, index, array) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
    console.log(imprimePoodle)

//2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a)

 let soONome = produtos.map((item, index, array) =>{
    return item.nome

 })
    console.log(soONome)

//b)

 let complicando = produtos.map((item, item2, index, array) =>{

    let nomePreço = {
        nome: item.nome,
        precoNovo: (item.preco*0.95)
    }
    return nomePreço
 })
    console.log (complicando)

// c)

let bebidas = produtos.filter((item, index, array) =>{
    return item.categoria == "Bebidas"
})

    console.log(bebidas)

// d)

let achaOYpe = produtos.filter((item, index, array) =>{
    return item.nome.includes("Ypê")
})

    console.log(achaOYpe)

// e)

let mensagemYpe = achaOYpe.map((item, index, array) =>{

    return `compre ${item.nome} por ${item.preco}`
})

    console.log(mensagemYpe)