function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui

  let salarioFixo = 2000
  let salarioVariavel = (100*qtdeCarrosVendidos)+(0.05*valorTotalVendas)
  return salarioVariavel+salarioFixo
}
