function lerNumero(){
  let numero = parseInt(prompt('Digite um número'))
  alert(numero)
}
lerNumero()

function soma (){
  let a = parseInt(prompt('Digite um número'))
  let b = parseInt(prompt('Digite um número'))
  let c = parseInt(prompt('Digite um número'))
  let somar = a + b + c
  alert(somar)
}
soma()

function mediaAnual (){
  let nota1 = parseInt(prompt('Digite uma nota'))
  let nota2 = parseInt(prompt('Digite uma nota'))
  let media = (nota1+nota2)/12
  alert(media.toFixed(2))
}
mediaAnual()

function resto(){
  let numero1 = parseInt(prompt('Digite um numero'))
  let numero2 = parseInt(prompt('Digite um numero'))
  let media = numero1%numero2
  if (media == 0){
      alert(`Essa é uma divisão exata`)
  } else if (media == 1) {
      alert(`Esta é uma divisão inexata e o resto é 1`)
  } else {
      alert(`Esta é uma divisão inexata e o resto é ${media}`)
  }
}
resto()

function quadrado(){
  let numero = parseInt(prompt('Digite um numero'))
  let quadra = numero ** 2
  alert(`O quadrado de ${numero} é ${quadra}`)
}
quadrado()

function ponderada(){
  let number1 = parseInt(prompt('Digite um numero'))
  let number2 = parseInt(prompt('Digite um numero'))
  let number3 = parseInt(prompt('Digite um numero'))
  let number4 = parseInt(prompt('Digite um numero'))
  let mP = ((number1) + (number2*2) + (number3*3) + (number4*4))/10
  alert(`A média ponderada é: ${mP}`)
}
ponderada()

function concurso(){
  let matematica = parseInt(prompt('Digite uma nota'))
  let portugues = parseInt(prompt('Digite uma nota'))
  let conhecimentosGerais = parseInt(prompt('Digite uma nota'))
  let informatica = parseInt(prompt('Digite uma nota'))
  let mPonderada = ((matematica*2) + portugues + conhecimentosGerais + informatica)/5
  alert(`A média ponderada é de: ${mPonderada}`)
}
concurso()

function saldo (){
  let saldoI = parseInt(prompt('Digite seu saldo'))
  let saldoF = saldoI + (saldoI*0.03)
  alert(`seu novo salário é: ${saldoF}`)
}
saldo ()

function area (){
  let b = parseInt(prompt('Informe a base'))
  let h = parseInt(prompt('Informe a altura'))
  let A = (b*h)/2
  alert(`A área do triângulo é: ${A}`)
}
area ()
