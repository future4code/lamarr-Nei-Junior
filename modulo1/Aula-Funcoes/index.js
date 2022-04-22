// Exercicios de Interpretação
// 1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))



// a) 10, 50
// b) Acredito que não iria fazer nada, não pedimos a impressão

// Exercicio 2
// A função pega um texto joga tudo para minusculo para ficar mais fácil localizar no "includes" e verifica se no texto tem a palavra cenoura

    //1 true
    //2 true
    //3 false 



// Exercicio 1


function ex1 (nome,idade, cidade, profissao){

    console.log(`Eu sou ${nome}. tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
return ex1
}

let resultado = ex1('Nei','16','Santa Maria','Bancario')
// _________________________________________

    function exercicio2(nome1,idade1,cidade1,profissao1){
nome1 = prompt('Qual seu nome?')
idade1 = prompt('qual sua idade?')
cidade1 = prompt('qual sua cidade?')
profissao1 = prompt('qual sua profissao?')
console.log(`Eu sou ${nome1}. tenho ${idade1} anos, moro em ${cidade1} e sou ${profissao1}`)
return exercicio2
}

console.log(exercicio2())


// Exercicio 2

    function somar(n1,n2){
let soma = n1+n2
console.log(soma)
return somar 
}

console.log(somar(2,3))

    function maiorOuMenor (m1,m2){
let comparativo = m1>m2
console.log(comparativo)
return maiorOuMenor
}

console.log(maiorOuMenor(8,2))


    function par (y){
y=y%2
console.log(y)
if (y==0) {console.log("seu número é par")}
else if (y!=0) {console.log("seu número é impar")}
}

par(2)



let transformacao = prompt("Diga uma frase")

    function indicar (parametro){

let separar = parametro.split(" ")
console.log(separar)
let tamanho = separar.lenght
let maisuculo = parametro.toUpperCase()


console.log(`Sua frase tem ${tamanho} e em maisculo fica ${maisuculo}`)

}

indicar(transformacao)


// Exercicio 3

let pedido = Number(prompt("Me diga dois números"))
let pedido2 = Number(prompt("Me diga dois números"))

    function somando(x1,x2){
let mais = x1+x2
console.log(mais)
return somando
}
    function dividndo(x1,x2){
let divisao = x1/x2
console.log(divisao)
return dividndo
}
    function diferença(x1,x2){
let subtraindo = x1-x2
console.log(subtraindo)
return diferença
}
    function multiplicacao(x1,x2){
let vezes = x1*x2
console.log(vezes)
return multiplicacao   
}

somando(pedido,pedido2)
dividndo(pedido,pedido2)
diferença(pedido,pedido2)
multiplicacao(pedido,pedido2)
