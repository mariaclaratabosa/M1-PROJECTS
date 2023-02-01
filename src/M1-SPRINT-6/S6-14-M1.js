let produtos = [
  {
      name: 'Café expresso',
      price: 'R$ 5,00'
  },
  {
      name: 'Capuccino',
      price: 'R$ 7,00'
  },
  {
      name: 'Café passado',
      price: 'R$ 4,00'
  },
  {
      name: 'Café gelado',
      price: 'R$ 10,00'
  },
  {
      name: 'Café com leite',
      price: 'R$ 6,00'
  },
]

let body = document.querySelector('body')

function productsList(produtos){
  for(let i = 0; i<produtos.length; i++){
      let principal = document.querySelector('main')
      body.appendChild(principal)
      let menu = document.createElement('div')
      menu.setAttribute('class', 'itens')
      principal.appendChild(menu)
      let products = document.createElement('button')
      products.setAttribute('class', 'produto')
      products.innerText = produtos[i].name
      products.addEventListener('click', function() {
          alert(`O preço é: ${produtos[i].price}`);
        }) 
      menu.appendChild(products)
  }
}
productsList(produtos)
