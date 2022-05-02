
/// SEJA BEM VINDO AO MELHOR JOGO DE BLACKJACK DO PLANETA

// VARIÁVEIS 

if(confirm('Quer jogar uma partida de BlackJack?')) {alert('Vamos começar então')
	
// GERANDO AS CARTAS E AS VARIÁVEIS

   let maoDoPlayer = []
   let maoDoPc = []

      let primeiraCartaPlayer = comprarCarta()
      alert (`Você comprou a carta ${primeiraCartaPlayer.texto}`)
      let segundaCartaPlayer = comprarCarta()
      alert (`Você comprou a carta ${segundaCartaPlayer.texto}`)
      let primeiraCartaPC = comprarCarta()
      let segundaCartaPC = comprarCarta()
      alert (`As cartas do computador são ${primeiraCartaPC.texto} e ${segundaCartaPC.texto}`)


// COMPRANDO AS CARTAS DO PLAYER

   maoDoPlayer.push(primeiraCartaPlayer)
   maoDoPlayer.push(segundaCartaPlayer)

// COMPRANDO AS CARTAS DO PC

   maoDoPc.push(primeiraCartaPC)
   maoDoPc.push(segundaCartaPC)

// CARTAS NA MÃO

   console.log(maoDoPlayer)
   console.log(maoDoPc)

// COMPARANDO AS MÃOS

   let pontuacaoPlayer = (primeiraCartaPlayer.valor+segundaCartaPlayer.valor)
   console.log(pontuacaoPlayer)
   let pontuacaoPC = (primeiraCartaPC.valor+segundaCartaPC.valor)
   console.log(pontuacaoPC)

   alert(`As suas cartas são ${primeiraCartaPlayer.texto} e ${segundaCartaPlayer.texto} e sua pontuação é ${pontuacaoPlayer}
   As cartas do PC são ${primeiraCartaPC.texto} e ${segundaCartaPC.texto} e a pontuação dele é ${pontuacaoPC}`)

   if (pontuacaoPlayer > pontuacaoPC) {alert('Você ganhou!!!!')}
   else if (pontuacaoPC > pontuacaoPlayer) {alert('Você perdeu')}
   else {alert('você empatou')}

} 

else {alert('Que pena vamos encerrar')
	// o que fazer se o usuário clicar "cancelar"
}

