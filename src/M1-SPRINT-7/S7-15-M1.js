const productsCart = [
  {
      id: 1,
      name: "Maçã",
      price: 3.51,
      src: './img/maca.png'
  },
  {
      id: 2,
      name: "Mamão",
      price: 2.52,
      src: './img/mamao.png'
  },
  {
      id: 3,
      name: "Melancia",
      price: 6.53,
      src: './img/melancia.png'
  },
  {
      id: 4,
      name: "Laranja",
      price: 4.54,
      src: './img/laranja.png'
  },
  {
      id: 5,
      name: "Banana",
      price: 10.21,
      src: './img/banana.png'
  }
]

const body = document.querySelector('body')

let main = document.createElement('main')
main.setAttribute('class', 'main')
body.appendChild(main)

let box = document.createElement('div')
box.setAttribute('class', 'container')
main.appendChild(box)

let cardTitulo = document.createElement('div')
cardTitulo.setAttribute('class', 'topTitle')
box.appendChild(cardTitulo)

let carrinhoImg = document.createElement('img')
carrinhoImg.src = './img/carrinhoDeCompras.png'
carrinhoImg.setAttribute('class', 'carrinhoImg')
cardTitulo.appendChild(carrinhoImg)

let pageTitulo = document.createElement('h1')
pageTitulo.innerText = 'Carrinho de Compras'
pageTitulo.setAttribute('class', 'titulo')
cardTitulo.appendChild(pageTitulo)

let barraSuperior = document.createElement('div')
barraSuperior.setAttribute('class', 'cardSuperior')
box.appendChild(barraSuperior)

let item = document.createElement('p')
item.innerText = 'Item'
barraSuperior.appendChild(item)

let valor = document.createElement('p')
valor.innerText = 'Valor'
barraSuperior.appendChild(valor)

let productsList = document.createElement('ul')
productsList.setAttribute('class', 'lista')
box.appendChild(productsList)

for(let i = 0; i<productsCart.length; i++) {
  let productDetails = document.createElement('li')
  productDetails.setAttribute('class', 'itens')
  productsList.appendChild(productDetails)

  let listItens = document.createElement('div')
  listItens.setAttribute('class', 'details')
  productDetails.appendChild(listItens)

  let img = document.createElement('img')
  img.src = productsCart[i].src
  img.setAttribute('class', 'frutas')
  listItens.appendChild(img)

  let name = document.createElement('p')
  name.innerText = productsCart[i].name
  name.setAttribute('class', 'nome')
  listItens.appendChild(name)

  let divPrice = document.createElement('div')
  divPrice.setAttribute('class', 'price')
  productDetails.appendChild(divPrice)

  let price = document.createElement('p')
  price.innerText = `R$ ${productsCart[i].price}`
  price.setAttribute('class', 'preco')
  divPrice.appendChild(price)
}

let soma = 0
function somar(){
  for(let i = 0; i<productsCart.length; i++){
      soma += productsCart[i].price
  }
  return soma
}
somar()

let resultado = soma.toFixed(2)
resultado = resultado.toString().replace('.', ',')

let section = document.createElement('section')
section.setAttribute('class', 'section')
box.appendChild(section)

let container = document.createElement('div')
container.setAttribute('class', 'total')
section.appendChild(container)

let total = document.createElement('p')
total.innerText = 'Total'
container.appendChild(total)

let precoTotal = document.createElement('p')
precoTotal.innerText = `R$ ${resultado}`
container.appendChild(precoTotal)

let finalizar = document.createElement('div')
section.appendChild(finalizar)

let buttonEnd = document.createElement('button')
buttonEnd.innerText = 'Finalizar compra'
buttonEnd.setAttribute('class', 'button')
finalizar.appendChild(buttonEnd)