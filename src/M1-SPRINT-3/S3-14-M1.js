//Exercício 1
let qtdCompra = parseFloat(prompt('Quantos reais deseja asbatecer?'))
let valorLitro = 6.8
let qtdLitros = parseFloat(qtdCompra/valorLitro)
alert(`O cliente abasteceu ${qtdLitros.toFixed(2)} litros`) 

//Exercício 2
let valorC1 = parseFloat(prompt('Qual a temperatura em graus Celsius?'))
let valorF1 = (9*valorC1 + 160)/5
alert(`O valor de ${valorC1}°C em Fahrenheit é ${valorF1}°F`) 

//Exercício 3
let valorF2 = parseFloat(prompt('Qual a temperatura em graus Fahrenheit?'))
let valorC2 = ((valorF2-32)*5)/9
alert(`O valor de ${valorF2}°F em Fahrenheit é ${valorC2.toFixed(2)}°C`) 

//Exercício 4
let comprimento = parseFloat(prompt('Qual o comprimento da caixa, em metros?'))
let largura = parseFloat(prompt('Qual a largura da caixa, em metros?'))
let altura = parseFloat(prompt('Qual a altura da caixa, em metros?'))
let volume = comprimento * largura * altura;
alert(`O volume é de: ${volume}m³`) 

//Exercício 5
let valor = parseInt(prompt('Informe um valor:'))
let valorQuadrado = valor**2
alert(`O valor de ${valor} ao quadrado é: ${valorQuadrado}`)

//Exercício 6
let nota1 = parseFloat(prompt(`Informe a nota 1:`))
let nota2 = parseFloat(prompt(`Informe a nota 2:`))
let nota3 = parseFloat(prompt(`Informe a nota 3:`))
let nota4 = parseFloat(prompt(`Informe a nota 4:`))
let nota5 = parseFloat(prompt(`Informe a nota 5:`))
let soma = nota1 + nota2 + nota3 + nota4 + nota5
let media = soma/5
alert(`A soma dos valores informados é: ${soma} e a média das notas é: ${media}`)

//Exercício 7
let valor1 = parseInt(prompt(`Informe o valor 1`))
let valor2 = parseInt(prompt(`Informe o valor 2`))
let resto = valor1%valor2
alert(`O resto da divisão de ${valor1} por ${valor2} é: ${resto}`)

// Exercício 8
let caracteres = prompt(`Informe uma frase ou palavra`)
let qtdCaracteres = caracteres.length
alert(`Esse texto tem ${qtdCaracteres} caracteres`)


//Exercício 9
let texto = prompt(`Digite o seu texto`)
let first = texto[0].toUpperCase()
let last = texto[texto.length-1].toLowerCase()
alert(`A primeira letra desse texto é ${first} e a última é ${last}`)

// Exercício 10
let nome = prompt(`Digite seu nome`).toUpperCase()
let sobrenome = prompt(`Digite seu sobrenome`).toUpperCase()
let idade = parseInt(prompt(`Informe a sua idade`))
let setor = prompt (`Qual o seu setor?`)
alert(`Nome: ${nome} ${sobrenome} - Idade: ${idade} - Setor: ${setor}`)
