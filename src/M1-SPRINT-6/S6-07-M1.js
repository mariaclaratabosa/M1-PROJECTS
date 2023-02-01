let pessoa = {
  nome: "clara",
  anoNascimento: 1996,
  nomeDeUsuario: "CLARA_GOMES",
  temCarro: true,
  valeCombustivel: "R$ 0,00",
  distanciaDoTrabalho: "120km",
  endereco: []
}

//Função 1
function normalizarDados(pessoa){
  pessoa.nome = pessoa.nome[0].toUpperCase() + pessoa.nome.slice(1)
  pessoa.nomeDeUsuario = pessoa.nomeDeUsuario.toLowerCase()
  return pessoa
}
console.log(normalizarDados(pessoa))

//Função 2
function criarListaDeUsuarios(pessoa){
  let listaDeUsuarios = []
  if(2023- pessoa.anoNascimento >= 18){
      listaDeUsuarios.push(pessoa)
  }
  return listaDeUsuarios
}
console.log(criarListaDeUsuarios(pessoa))

//Função 3
function calcularVale(pessoa){
  let valorLitro = 6.99
  let distanciaDoTrabalho = (parseInt(pessoa.distanciaDoTrabalho.replace('km', ' ')))
  if (pessoa.temCarro == true){
      pessoa.valeCombustivel = (distanciaDoTrabalho *valorLitro) * 0.7
      if (distanciaDoTrabalho > 100){
          pessoa.valeCombustivel += 15
      }
  }
  return `R$ ${pessoa.valeCombustivel.toFixed(2)}`
}
console.log(calcularVale(pessoa))


let endereco = {
  cidade: 'Curitiba',
  logradouro: 'Rua Dali',
  numero: 10,
  tipo: []
}      

//Função 4
function atualizarEndereco(tipo, estado){
  endereco.tipo = tipo
  endereco.estado = estado
  return endereco
}
console.log(atualizarEndereco('Casa', 'PR'))

//Função 5
function adicionarEnderecoEmPessoa(pessoa, endereco){
  pessoa.endereco = endereco
  return pessoa
}
console.log(adicionarEnderecoEmPessoa(pessoa, endereco))

