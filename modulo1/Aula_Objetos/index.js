// Exercícios de Interpretação 

// 1 -

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// // Resposta ___________________________________________________________________________________________

// - Matheus Nachtergaele
// - Virginia Cavendish
// - canal: "Canal Brasil", horario: "19h"


// 2 -

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// Resposta__________________________________________________________________________________________________

// nome: "Juca", 
// idade: 3, 
// raca: "SRD"

// nome: "Juba", 
// idade: 3, 
// raca: "SRD"

// nome: "Jubo", 
// idade: 3, 
// raca: "SRD"


// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// R: 
// false
// undefined

// EXERCICIOS DE ESCRITA

// 1 - 

let apelidos = {
nome: "Rafael",
apelidos: ["Rafa","Rafinha","Fael"]
}

function funcaoApelidos(){

console.log(`Ola meu nome é ${apelidos.nome} mas pode me chamar de ${apelidos.apelidos}`)
}

funcaoApelidos(apelidos)


// 2-

let exercicioComplicado= {

nome1: "Matheus",
idade1: 19,
profissao: "Testador de colchao"
}

let exercicioComplicado2 = {
   
nome2: "Marcos",
idade2: 100,
profissao2: "Levantador de garfo"
}

function Ex2(){

return[exercicioComplicado.nome1, exercicioComplicado2.nome2, exercicioComplicado.nome1.length, exercicioComplicado2.nome2.length, 
    exercicioComplicado.idade1, exercicioComplicado2.idade2, exercicioComplicado.profissao, exercicioComplicado2.profissao2,
    exercicioComplicado.profissao.length, exercicioComplicado2.profissao2.length]

}

console.log(Ex2(exercicioComplicado, exercicioComplicado2))

// 3-

let carrinho = []

let objeto1 = {
    nome2: "Mamao",
    disponibilidade: true

    }

let objeto2 = {
    nome2: "Laranja",
    disponibilidade: true
    
    }

let objeto3 = {
    nome2: "Morango",
    disponibilidade: true
        
    }

function deuRuim (fruta1,fruta2,fruta3) {

carrinho.push(fruta1)
carrinho.push(fruta2)
carrinho.push(fruta3)
return carrinho
}

console.log(deuRuim(objeto1,objeto2,objeto3))



