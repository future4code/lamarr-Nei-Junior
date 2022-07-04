
//JavaScript
const pessoa = {
    nome: "Paula",
    genero: "Feminino"
    }
    
    
    const desejaBoasVindas = (pessoa) => {
    if(pessoa.genero === "Feminino") {
    return "Seja bem-vinda!"
    } else if(pessoa.genero === "Masculino") {
    return "Seja bem-vindo!"
    } else {
    return "Desejamos boas-vindas!"
    }
    }
    
    
    console.log(desejaBoasVindas(pessoa))
    

