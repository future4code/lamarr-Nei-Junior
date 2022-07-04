function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 
 let contador = 0

  for (let i = 0; i < arrayDeNumeros.length; i++) {
  if (arrayDeNumeros[i] === numeroEscolhido)
    contador++
    
  else if (numeroEscolhido===3){
    console.log("Número não encontrado")
  }
  
}

return `o número ${numeroEscolhido} aparece ${contador}`)