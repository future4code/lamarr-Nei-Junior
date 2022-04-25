// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui


  let alturaRetangulo = Number(prompt("digite um numero para altura do retangulo"))
  let larguraRetangulo = Number(prompt("digite um numero para largura do retangulo"))
  console.log(alturaRetangulo*larguraRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt("diga que ano é?"))
  let seuNascimento = Number(prompt("diga seu ano de nascimento"))
  console.log(anoAtual-seuNascimento)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return(peso/(altura*altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let meuNome = prompt("Me diga seu nome")
  let minhaIdade = Number(prompt("Me diga sua idade"))
  let meuEmail = prompt("Me diga seu email")
  console.log(`Meu nome é ${meuNome}, tenho ${minhaIdade} anos, e o meu email é ${meuEmail}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
 
  let corFav1 = prompt("Me dia sua primeiro cor favorita")
  let corFav2 = prompt("Me diga sua segunda cor favorita")
  let corFav3 = prompt("Me diga sua terceira cor favorita")

  let cores = [corFav1, corFav2, corFav3]
  console.log(cores)



}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 
  return(string.toUpperCase())
  console.log(string)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return(custo/valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return(string1.length==string2.length)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return(array[0]) 


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return(array.slice(-1)[0])

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

let numeroPrimeiro=array[0]
array[0] = array[array.length-1]
array[array.length-1]=numeroPrimeiro
return array
  

  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return(string1.toUpperCase()==string2.toUpperCase())
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let atual = Number(prompt('que ano estamos?'))
  let nascimento = Number(prompt("que ano voce nasceu?"))
  let cnh = Number(prompt('qual ano da sua cnh?'))
  let calculocnh = (atual-cnh)
  
  let pessoascomate20 = (((atual-nascimento)<=20&&calculocnh>=5))
  let pessoas20a50 = (((20<atual-nascimento&&atual-nascimento<50))&&calculocnh>=10)
  let pessoasacima50 = (((atual-nascimento>50)&&calculocnh>=15))
  
  console.log(pessoascomate20)
  console.log(pessoas20a50)
  console.log(pessoasacima50)
  
  console.log(pessoascomate20||pessoas20a50||pessoasacima50)
  


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  
  ano = ((ano%400==0)||(ano%4==0&&!(ano%100==0&&ano%400!==0)))

  return(ano)

  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  let maiorIdade = prompt("Você é maior de idade? (sim/nao)")
  let ensinoMedio = prompt('voce possui ensino médio completo? (sim/nao)')
  let dispHorario = prompt('voce possui disponibilidade de horário? (sim/nao)')

  console.log(maiorIdade)
  console.log(ensinoMedio)
  console.log(dispHorario)

  console.log(maiorIdade=="sim"&&ensinoMedio=="sim"&&dispHorario=="sim")


}