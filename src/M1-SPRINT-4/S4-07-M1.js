//Exercício 1
let valor = parseInt(prompt("Digite um valor de 0 a 10"))
while (valor < 0 || valor > 10){
    alert(`O valor ${valor} é inválido`)
    valor = parseInt(prompt('Digite outro valor'))
    if (valor >= 0 && valor <=10){
        alert(`O valor ${valor} é válido`)
    }
}

//Exercício 2
let nome = prompt('Informe o nome de usuário')
let senha = prompt('Informe uma senha')
while (senha = nome){
    alert(`Não é permitida uma senha com o nome do usuário`)
    senha = prompt('Digite outra senha')
    if (senha != nome){
        alert(`O acesso do usuário ${nome} foi liberado`)
    }
}

//Exercício 3
let numero = parseInt(prompt('Informe um número'))
let soma = 0
let media = 0
let divisor = 0
while (numero < 10){
    if (numero > 0 || numero < 10){
        soma = soma + numero
        divisor ++
    }
    numero = parseInt(prompt('Informe um número'))
}
if (numero < 0 || numero > 10){
    soma = soma + numero
    divisor ++
    media = soma/divisor
    alert(`A soma é ${soma} e a média é ${media}`)
}

//Exercício 4
let voto = prompt('Informe o seu voto')
let candidatoA = 0
let candidatoB = 0
let candidatoC = 0
while (voto != 'x') {
if (voto === 'a'){
    alert(`O voto no candidato a foi registrado com sucesso`)
    candidatoA = candidatoA + 1
} else if (voto === 'b'){
    alert(`O voto no candidato b foi registrado com sucesso`)
    candidatoB = candidatoB + 1
} else if (voto === 'c'){
    alert(`O voto no candidato c foi registrado com sucesso`)
    candidatoC = candidatoC + 1
} else {
    alert(`Candidato não encontrado`) 
}
voto = prompt('Informe o seu voto') }
if (voto === 'x'){
    alert(`O candidato a teve ${candidatoA} votos, o candidato b teve ${candidatoB} votos e o candidato c teve ${candidatoC} votos`)
}
