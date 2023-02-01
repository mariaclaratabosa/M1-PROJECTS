let produto = {
  nome: 'Notebook',
  valor: 3000.00,
  liquidacao: true,
  distribuidor: 'lojadakenzie.com.br'
}

let body = document.querySelector('body')
let main = document.createElement('main')
body.appendChild(main)

  let element = document.getElementsByClassName("container")[0]
  main.appendChild(element)

  let list = document.createElement('ul')
  element.appendChild(list)

  let listItem = document.createElement('li')
  list.appendChild(listItem)

  let nome = document.createElement('p')
  nome.innerText = produto.nome
  nome.classList.add('nome')

  let elementInformado = document.getElementsByClassName("infomacao")[0];
  elementInformado.innerText = produto.valor.toString().replace('.', ',')
  elementInformado.classList.add('preco')

  let promocao = document.createElement('a')
  promocao.href = '#'
  promocao.innerText = 'Em liquidação'

  let desconto = document.createElement('p')
  desconto.innerText = `Hoje apenas: ${produto.valor * 0.7}`
  desconto.setAttribute('class', 'desconto')
  desconto.classList.add('hidden')

  let distribuidor = document.createElement('p')
  distribuidor.innerText = `Fabricante: ${produto.distribuidor}`
  distribuidor.classList.add('distribuidor')

  listItem.append(nome, elementInformado, promocao, desconto, distribuidor)


function clickDesconto(){
  let produtoDesc = document.querySelector('a')
  produtoDesc.addEventListener('click', function(){
    let desconto = document.querySelector('.desconto')
    if(produto.liquidacao == true){
      desconto.classList.add('hide')
      desconto.classList.remove('show')
    } else {
      desconto.classList.add('show')
      desconto.classList.remove('hide')
    }
    produto.liquidacao = !produto.liquidacao
  })
}
clickDesconto()
