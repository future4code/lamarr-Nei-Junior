/*Exercícios de Interpretação
 
Exercicio 1 

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

/* O código acima da valor a duas variáveis e imprime o valor de b, (10) logo depois por ser uma "let" e nao uma "const" 
o código altera o valor de 10 para 5 e imprime o valor de a e b, 10 e 5 respectivamente */

/*____________________________________________________________________________________________________________________

Exercicio 2  

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)


/* ele vai usar uma terceira variável para alterar os valores das outras, pra mim vai imprimir tudo com valor 10*/

/* __________________________________________________________________________________________________________________

Exercicio 3

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/* Primeira variável "cargaHoraria", segunda variavel "pagamentoMensal"  

____________________________________________________________________________________________________________ */

// Exercícios de escrita de código

let Nome
let idade

console.log(typeof Nome)
console.log(typeof idade)



//Resultado impresso apresenta não identificado porque não especificamos valores para as variáveis

const altura = prompt("voce e alto? SIM/NAO")
const cor = prompt("voce gosta de vermelho? SIM/NAO")
const bebida = prompt("voce bebe? SIM/NAO")

console.log("sou", "alto?", altura, "gosto", "de", "vermelho?", cor, "bebo?", bebida)

// As variáveis tal como a pergunta que puxa seus resultados

let a = 10
let b = 25
let c = 0


c = a
a = b
b = c

console.log (a, b)

/*___________________________________________________________________________________________________________________
DESAFIOOOO */

const primeiroNumero = Number(prompt("me diga um numero"))
const segundoNumero = Number(prompt("me diga outro numero"))

alert("Seu primeiro numero é")
alert(primeiroNumero+segundoNumero)
alert("Seu segundo numero é")
alert(primeiroNumero*segundoNumero)


