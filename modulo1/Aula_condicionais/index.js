// EXERCICIOS DE INTERPRETAÇÃO 





// EXERCICIOS DE ESCRITA

let idadeDirecao = Number(prompt("Qual sua idade?"))

    if (idadeDirecao>=18) {console.log("Você pode dirigir")}
    else  {console.log("Você nao pode dirigir")}


let curso = prompt("Qual turno do seu curso? M (matutino) ou V (Vespertino) ou N (Noturno)")

    if (curso==="M") {console.log("Bom dia")}
    else if (curso==="V") {console.log("Boa tarde")}
    else if (curso==="N") {console.log("Boa noite")}
    else console.log("Não entendi o turno do seu curso")

let cursoSwitch = prompt("Qual turno do seu curso? M (matutino) ou V (Vespertino) ou N (Noturno)")
    switch(cursoSwitch){
        case 'M': console.log("Bom dia")
        break
        case 'V': console.log("Boa tarde")
        break
        case 'N': console.log("Boa noite")
        break
        default: console.log("Não entendi o turno do seu curso")
        break
    }

let generoFilme = prompt('Qual gênero do filme que voce quer ver?')
let preçoIngresso = Number(prompt('Qual preço do ingresso?'))

    if (generoFilme === "fantasia"&& preçoIngresso<=15){console.log("Bom filme")}
    else console.log("Escolha outro filme=(")
