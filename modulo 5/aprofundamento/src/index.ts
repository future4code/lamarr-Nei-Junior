// Exercicio 1
// a)

// const minhaString: string = 12

// Aparece que a mensagem que a variável aceita apenas o tipo string

// b) fazemos da seguinte forma 
// const meuNumero: string|number = 12



enum corFavorita {
    Vermelho = "vermelho",
    Laranja = "Laranja",
    Amarela = "Amarelo",
    Verde = "Verde",
    Azul = "Azul",
    AzulEscuro = "AzulEscuro",
    Violeta = "Violeta"
}

type person = {
    nome: string,
    idade: number
    corFavorita: corFavorita
}

const exercicio: person = {
    nome: "pedro",
    idade: 20,
    corFavorita: corFavorita.Amarela
}
const exercicio2 = {
    nome: "matheus",
    idade: 20,
    corFavorita: 'verde'
}
const exercicio3 = {
    nome: "Sabrina",
    idade: 20,
    corFavorita: 'Preto'
}


