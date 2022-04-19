// Exercicios de interpretação

// 1 - 

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

// Vai dar false 

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

// false 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

// true 

console.log("d. ", typeof resultado)

// Vai dar que é um booleano pois só pode ser true ou false


// Exercicio 2 - Ta como string, não vai somar, ou vai juntar os numeros, por exemplo 1+4 vai dar 14, ou vai dar erro pois não se pode
// usar esses operadoores com string

// Exercicio 3

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

// Exercicios de escrita

// Exercicio 1

let suaIdade = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual idade do seu amigo?"))

console.log (suaIdade > idadeAmigo)
console.log (suaIdade-idadeAmigo)

// Exercicio 2

let numeroPar = Number(prompt("Digite um numero par"))
console.log (numeroPar%2)

// Vai dar sempre 0, afinal todo numero par é divisivel por 2

// Se for impar vai dar sempre resto 

let idadeAnos = Number(prompt("Qual sua idade?"))

console.log (idadeAnos)

const idadeEmMeses = idadeAnos*12
const idaddeEmDias = idadeEmMeses*30
const idadeEmHoras = idaddeEmDias*24


console.log (idadeEmMeses)
console.log (idaddeEmDias)
console.log (idadeEmHoras)

// Exercicio 4

let numeroPrimeiro = Number(prompt("Diga um numero"))
let numeroSegundo = Number(prompt("Diga um numero"))

console.log ('O primeiro numero é maior que segundo?', numeroPrimeiro>numeroSegundo)
console.log ('O primeiro numero é igual ao segundo?', numeroPrimeiro===numeroSegundo)
let divisivel = numeroPrimeiro%numeroSegundo
console.log (divisivel)
console.log (divisivel ===0)
let segundoDivisivel = numeroSegundo%numeroPrimeiro
console.log(segundoDivisivel)
console.log (segundoDivisivel ===0)

