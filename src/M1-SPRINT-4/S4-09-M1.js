function gerarNumeroAleatorio(){
  const numero = 20
  let numeroAleatorio = Math.round(Math.random()*numero)
  return numeroAleatorio
}

function verificaPlapilte(){
  let palpite = parseInt(prompt('Informe um palpite e 1 a 20'))
  let tentativa = 1
  let aleatorio = gerarNumeroAleatorio()
  while (palpite != aleatorio){
      tentativa ++
      alert('Tente novamente')
      palpite = parseInt(prompt('Informe um palpite e 1 a 20'))
  } if (palpite == aleatorio){
      alert(`Você acertou na tentativa ${tentativa}`)
  }
} 
verificaPlapilte() 