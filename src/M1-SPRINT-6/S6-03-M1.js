//Exercício 1 - Pessoa premiada
let ganhador = {
  nome: 'Adamastor',
  nascimento: '16/09/1986',
  cpf: '123.321.789-98',
  estadoCivil: 'Casado'
}
function dados(){
  let name = prompt('Informe seu nome')
  let cpf = prompt('Informe seu CPF')
  if (name[0].toUpperCase() + name.slice(1) == ganhador.nome && cpf == ganhador.cpf){
      return 'É ganhador'
  } else {
      return 'Não é ganhador'
  }
}
console.log(dados())

//Exercício 2 - Quem veio atrás do prêmio?
  let pessoas = []
  function quemVeio(pessoa){
      pessoas.push(pessoa)
      return `${pessoas.length} pessoas vieram atrás do prêmio`
  }
console.log(quemVeio())

