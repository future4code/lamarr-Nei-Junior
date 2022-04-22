// // Exercicios de interpretação 

// let array
// console.log('a. ', array)

// R: undefined

// array = null
// console.log('b. ', array)

// R: Nulo

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// R: 11

// let i = 0
// console.log('d. ', array[i])

// R:3

// array[i+1] = 19
// console.log('e. ', array)

// R:Essa eu respondi, depois joguei o codigo e vi que errei, nao entendi porque sumiu o 4

// const valor = array[i+6]
// console.log('f. ', valor)

// R:como o i=3 3+6 = 9


const frase1 = prompt("Subi num ônibus em Marrocos")

console.log(frase1.toUpperCase().replaceAll("A", "I"), frase1.length)

// 1 - "SUBI NUM ONIBUS EM MIRROCOS" 27 

// Exercicios de Escrita

// 1 - 

let nome = prompt(`Qual seu nome?`)
let email = prompt(`Qual seu email?`)

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}`)

// 2 -
//a

let array = ["Feijão", "Arroz", 'Churrasco', 'Batata', 'Macarrão']
console.log(`Essas são minhas comidas preferidas:${array}`)
//b
console.log('Essas são minhas comidas preferidas')
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
// c
let qualSuaComida = prompt('diga sua comida preferida')
let novaLista = array.toString().replaceAll('Arroz',qualSuaComida)
console.log(novaLista)


// 3 - 

let tarefas = []

let escolha1 = prompt(`Cite 1 tarefa que voce precisa fazer`)

let escolha2 = prompt(`Cite a 2 tarefa que voce precisa fazer`)

let escolha3 = prompt(`Cite a 3 tarefa que voce precisa fazer`)

console.log(escolha1, escolha2, escolha3)
tarefas.push(escolha1,escolha2,escolha3)
console.log(tarefas)
let pergunta = prompt(`Digite o indice da tarefa que voce ja realizou, 1, 2 ou 3`)
if (pergunta=1) {tarefas.splice(0,1)}
else if (pergunta = 2) {tarefas.slice(1,1)}
else if (pergunta = 3) {taregas.slice(2,1)}

console.log(tarefas)

// Desafio

let frase = prompt('Diga uma frase')
let divisao = frase.split(" ",(1,2,3,4,5,6,7,8,9))
let array1 = divisao
console.log(frase)
console.log(array1)
console.log(array1.length)
console.log(array1.indexOf("Abacaxi"))
