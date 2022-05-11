// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
    array.sort(function(a, b) {
      return a - b;
    });
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = function (item) {
        return item%2==0
    }

    let achandoOsPares = array.filter(pares);
    return achandoOsPares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let paresAoQuad = function (item) {
        let parzin = (item%2==0)
        return Math.pow(parzin, 2)
    }

    let achandoQuadrado = array.filter(paresAoQuad)
    return achandoQuadrado

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let procurandoMaior = 0;
    for (let i = 0; i < array.length; i++) {
    if (array[i] > procurandoMaior) {
    procurandoMaior = array[i];
    
        }
        
    }
    return procurandoMaior
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

let exercicio = {
    maiorNumero: Math.max(num1, num2),
    maiorDivisivelPorMenor: (Math.max(num1, num2)%Math.min(num1,num2)==0),
    diferenca: Math.abs(num1-num2)    ,
}
return exercicio

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {

    function segundoMaior (array) {
        let maximo = Math.max(...array)
        array.splice(array.indexOf(maximo), 1)
        return Math.max(...array)
        

}
    function segundoMenor (array) {
        let minimo = Math.min(...array);
        array.splice(array.indexOf(minimo), 1)
        return Math.min(...array)

}

return [segundoMaior(array), segundoMenor(array)]
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}