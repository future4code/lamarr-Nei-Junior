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
    let quadradinho = item%2==0
    let problema = quadradinho*4
    return problema 
        
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

        let adicionandoPares = []
        for (let i = 0; adicionandoPares.length < n; i++) {
            if (i % 2 == 0) {
                adicionandoPares.push(i)
            }
        }
        return adicionandoPares
        

}
    

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

if (ladoA==ladoB&&ladoA==ladoC&&ladoB==ladoC) {
    return "Equilátero"
}
else if (ladoA==ladoB && (ladoA!==ladoC) || (ladoA==ladoC&&ladoB!==ladoC) || (ladoB==ladoC&&ladoA))
{
    return "Isósceles"
}
else return "Escaleno"

}

// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {

    let procurandoMaior = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i-1] > procurandoMaior) {
        procurandoMaior = array[i];
        

        }
}

 let procurandoMenor = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > procurandoMenor) {
        procurandoMenor = array[i+1];
        
}

return [procurandoMaior, procurandoMenor]
  
}
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

return  `Venha assistir ao filme ${filme.nome}, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci.`


}
  

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

const novoObjeto = {
...pessoa,
nome: "ANÔNIMO",


}
return novoObjeto

}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let PeossasAutorizadas = function (item) {
        return (item.idade>14&&item.idade<60)&&(item.altura >=1.5) 
    }

    let autorizacaoPessoas = pessoas.filter(PeossasAutorizadas);
        return autorizacaoPessoas

}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    let PesNaoAutorizadas = function (item) {
        return (item.idade<=14||item.idade>60)||(item.altura <=1.5) 
    }

    let NautPessoas = pessoas.filter(PesNaoAutorizadas);
    return NautPessoas
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
        

}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    consultas.sort(function(a,b) {
        if(a.nome < b.nome) return -1;
        if(a.nome > b.nome) return 1;
        return 0;
    
    })
    return consultas
}




// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
}