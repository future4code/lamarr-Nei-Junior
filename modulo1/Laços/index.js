//EXERCICIOS DE INTERPRETAÇÃO
//1 - 

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// Vai incrementar o próprio número enquanto for menor que 5, vai dar 10

//2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//Vai ser impresso do 19 em diante, afinal pede números maiores do 19

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Ele vai acrescentar asteriscos até completar o número digitado pelo usuário

//EXERCÍCIOS DE ESCRITA

//1 

let adotaCachorro = Number(prompt("Qual animais de estimação você tem?"))

    if (adotaCachorro === 0) {console.log("Que pena! Você pode adotar um pet!")}
    else
        for(let i=0; i<adotaCachorro; i++){
        let nomesDosCaes = prompt("Cite o nome de um deles")
        let array = []
        array.push(nomesDosCaes)
        console.log(array)
    }

//2

// Este array será usado para exemplificar as respostas de todos os itens
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a
for(let i=0; i<array.length; i++){
    const elemento = array[i]
console.log(elemento)
}



//e
function meDaOMaior(lista){
    let oMaior = 1;
    for(let i=0;i<lista.length;i++){
        let numeroDoArray = lista[i];
        if(numeroDoArray>oMaior){
            oMaior = lista[i];
        }
    }
    return `o maior numero é ${oMaior}`
}
console.log(meDaOMaior(array))

function meDaOMenor(lista){
    let oMenor = 9999;
    for(let i=0;i<lista.length;i++){
        let numeroDoArray = lista[i];
        if(numeroDoArray<oMenor){
            oMenor = lista[i];
        }
    }
    return `o menor numero é ${oMenor}`
}
console.log(meDaOMenor(array))

// d

let Strings = []
for(let i=0;i<array.length;i++){
    let index = `O elemento index ${i} é ${array[i]}`
    console.log(index)
}

// b


function divisao (array){
    let array2 =[]

    for(let i=0;i<array.length;i++){


    if (array[i]%2===0){      
        array2.push(array[i])   
    }
    
}console.log(array2)
}
divisao(array)