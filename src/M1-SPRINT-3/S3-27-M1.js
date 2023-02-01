// Exercício 1
let numero1 = parseInt(prompt(`Digite um número:`))
let numero2 = parseInt(prompt(`Digite outro número:`))
let diferenca = numero1 - numero2
if (numero1 > numero2) {
    diferenca = String(diferenca)
    alert(`O maior número é ${numero1} e a diferença é ${diferenca}`)
} else {
    diferenca = String(diferenca)
    alert(`O maior número é ${numero2} e a diferença é ${diferenca}`)
} 

//Exercício 2
let valor1 = parseFloat(prompt(`Digite um valor:`))
let valor2 = parseFloat(prompt(`Digite outro valor:`))
if (valor1 == valor2) {
    alert(`Números iguais`)
} else if (valor1 > valor2) {
    alert(`O número ${valor1} é maior que o número ${valor2}`)
} else {
    alert(`O número ${valor2} é maior que o número ${valor1}`)
} 

//Exercício 3
let salario = parseFloat(prompt(`Informe o seu salário`))
let prestacao = parseFloat(prompt(`Qual o valor da prestação?`))
let porcentagem = salario * 0.3
if (prestacao < porcentagem) {
    alert(`Empréstimo concedido`)
} else {
    alert(`Empréstimo não concedido`)
} 

//Exercício 4
let number = parseInt(prompt(`Digite um número:`))
if ((number%3) == 0 && number%5 == 0){
    alert(`Valor inválido`)
} else if ((number%3) == 0 ) {
    alert(`Valor divisível por 3`)
} else if ((number%5) == 0) {
    alert(`Valor divisível por 5`)
} else if (number/2 %2) {
    alert(`É par`)
} else {
    alert(`É ímpar`)
}

//Exercício 5
let dayNumber = parseInt(prompt(`Digite um número de 1 a 7`))
if (dayNumber == 1){
    alert(`Domingo`)
} else if (dayNumber == 2) {
    alert(`Segunda-feira`)
} else if (dayNumber == 3) {
    alert(`Terça-feira`)
} else if (dayNumber == 4) {
    alert(`Quarta-feira`)
} else if (dayNumber == 5) {
    alert(`Quinta-feira`)
} else if (dayNumber == 6) {
    alert(`Sexta-feira`)
} else if (dayNumber == 7) {
    alert(`Sábado`)
} else {
    alert(`Não é um dia da semana`)
}

//Exercício 6
let salarioMensal = parseFloat(prompt(`Qual o seu salário atual?`))
let percentual = parseFloat(prompt(`Qual o percentual de reajuste?`))
let newSalario = salarioMensal + (salarioMensal * percentual/100)
if (percentual <=5){
    alert(`O salário do funcionário corrigido é de: R$ ${newSalario}`)
} else {
    alert(`Percentual inválido`)
}

//Exercício 7
let dolar = parseFloat(prompt(`Qual o valor em dólar?`))
let cotacao = parseFloat(prompt(`Qual a cotação atual?`))
let conversao = dolar * cotacao
alert(`$ ${dolar} é equivalente a R$ ${conversao.toFixed(2)} tendo ${cotacao} como cotação`) 

//Exercício 8
let tipoPulverizacao = parseInt(prompt(`Qual tipo de pulverização você deseja?`))
let acre = parseInt(prompt(`Quantos acres tem o seu terreno?`))
let total = 0
let desconto = 0
if (tipoPulverizacao == 1){
    total = 50 * acre
} else if (tipoPulverizacao == 2){
    total = 100 * acre
} else if (tipoPulverizacao == 3){
    total = 150 * acre
} else if (tipoPulverizacao == 4) {
    total = 250 * acre
} else {
    alert(`Tipo inválido`)
}
if (acre > 1000) {
    total = total * 0.95
}
if (total > 750) {
    desconto = (total - 750) * 0.1
    total = total - desconto
}
alert(`O valor a ser pago é de: R$ ${total}`)

//Exercício 9
let tempo = parseInt(prompt(`Qual o tempo da viagem em horas?`))
let velocidade = parseInt(prompt(`Qual a velocidade do veículo`))
let distancia = tempo * velocidade
let litrosUsados = distancia/12
alert(`Seu veículo percorreu ${distancia} km a ${velocidade} km/h e consumiu ${litrosUsados.toFixed(2)} litros de gasolina`) 

//Exercício 10
let value = parseFloat(prompt(`Qual o valor da fatura?`))
let tax = parseFloat(prompt(`Qual a taxa de juros?`))
let time = parseFloat(prompt(`Qual o tempo de atraso?`))
let installment = value + (value*(tax/100)*time)
if (time == 0 || !Number.isInteger(time)) {
    alert(`Valor inválido, o tempo de atraso deve ser em dias`)
} else {
    alert(`R$ ${installment}`)
}