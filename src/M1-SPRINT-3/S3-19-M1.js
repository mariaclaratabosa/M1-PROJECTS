let nome = prompt(`Informe o seu nome`)

let idade = parseInt(prompt(`Informe a sua idade`))
if (idade >=18) {
    alert(`Pode entrar`)
} else {
    alert(`A entrada não está permitida para ${nome} menor de idade`)
}

let estaAcompanhado = prompt(`Está acompanhado? S/N`)
if (estaAcompanhado == 'S' || 's'){
    alert(`Conceder desconto`)
} else {
    alert(`Valor integral`)
}
