const data = [
  {
    id: 1,
    img: "./img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "./img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "./img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "./img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "./img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "./img/moletom.svg",
    nameItem: "Champion Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];

//Criar cards dos produtos
const productsList = document.querySelector('.lista-produtos')
function criarCard(data) {
    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li')
        li.setAttribute('class', 'cards')
        let divImg = document.createElement('div')
        divImg.setAttribute('class', 'div-card-img')
        let img = document.createElement('img')
        img.setAttribute('class', 'card-img')
        img.src = data[i].img
        let divCards = document.createElement('div')
        divCards.setAttribute('class', 'card-itens')
        let divCategoria = document.createElement('div')
        divCategoria.setAttribute('class', 'card-categoria')
        divCategoria.innerHTML = data[i].tag
        let h2 = document.createElement('h2')
        h2.innerHTML = data[i].nameItem
        let descricao = document.createElement('p')
        descricao.setAttribute('class', 'card-descricao')
        descricao.innerHTML = data[i].description
        let preco = document.createElement('p')
        preco.setAttribute('class', 'card-preco')
        preco.textContent = `R$ ${data[i].value.toFixed(2)}`
        let adcBtn = document.createElement('button')
        adcBtn.setAttribute('class', 'card-adc-carrinho')
        adcBtn.innerHTML = data[i].addCart
        //Evento de clique - adiciona os produtos ao carrinho quando clicado no botão
        adcBtn.addEventListener('click', () => {
            addToCart(data[i])
        })

        productsList.appendChild(li)
        divImg.append(img)
        li.append(divImg, divCards)
        divCards.append(divCategoria, h2, descricao, preco, adcBtn)
    }
}
criarCard(data)

//Mostra apenas os cards correspondentes às tags no evento de clique no menu de navegação
const menuItens = document.querySelectorAll('.menu-item')
menuItens.forEach(item => {
    item.addEventListener('click', e => {
        if (e.target.innerHTML == 'Todos') {
            productsList.innerHTML = ''
            criarCard(data)
            return
        }
        const tag = e.target.innerHTML
        const filteredData = data.filter(item =>
            item.tag.includes(tag))
        if (filteredData.length === 0) {
            productsList.innerHTML = '<p> Ainda há itens nesta seção, volte em breve'
            productsList.classList.add('sem-produto')
        } else {
            productsList.innerHTML = ''
            criarCard(filteredData)
        }
    })
})

//Barra de pesquisa, mostra os cards correspondentes à pesquisa
const searchBtn = document.querySelector('.btn-pesquisar')
searchBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const searchInput = document.querySelector('.input-pesquisa')
    const searchValue = searchInput.value.toLowerCase()
    const cardsPesquisa = document.querySelectorAll('.cards')
    cardsPesquisa.forEach(function (card) {
        const cardName = card.querySelector('h2').innerHTML.toLowerCase()
        if (cardName.indexOf(searchValue) !== -1) {
            card.style.display = 'flex'
        } else {
            card.style.display = 'none'
        }
    })
})

//Dark mode
const btn = document.querySelector('.toggleBtn')
const moveBtn = document.querySelector('.bgMove')
const fa = document.querySelector('.fa-solid')
const faMoon = document.querySelector('.fa-moon')

btn.addEventListener('click', function () {
    moveBtn.classList.toggle('active')
    fa.classList.toggle('dark')
    faMoon.classList.toggle('active')
    if (moveBtn.classList == 'active') {
        faMoon.classList.add('moon-active')
    }
    else {
        faMoon.classList.remove('moon-active')
    }
    if (moveBtn.classList.contains('active')) {
        document.body.classList.add('dark')
    }
    else {
        document.body.classList.remove('dark')
    }
})

//Cria globalmente as variáveis que serão utilizadas nas funções a seguir
const cartList = document.querySelector('.carrinho-produtos')
let cart = document.querySelector('.carrinho-main')
let cartCount = 0
let cartCountEl = document.querySelector('.total-itens')
let cartTotal = 0
let cartTotalEl = document.querySelector('.total-preco')
const countEmpty = document.querySelector('.carrinho-rodape')
const cartEmpty = document.querySelector('.carrinho-vazio')

//Inicia a página com a mensagem de carirnho vazio dentro do carrinho e remove o rodapé, até que sejam adicionados itens
countEmpty.classList.add('carrinho-rodape-hidden')
cartEmpty.classList.add('carrinho-vazio')

//Função de adicionar ao carrinho, chamando as outras funções
function addToCart(data) {
    createCartItem(data)
    updateCartCountAndTotal(data.value)
    removeCartItem(cartItemRemove)
}

//Cria os elementos do carrinho e configura o botão de remover
function createCartItem(data) {
    let cartListItem = document.createElement('li')
    cartListItem.setAttribute('class', 'carrinho-item')
    let cartDescription = document.createElement('div')
    cartDescription.setAttribute('class', 'carrinho-descricao')
    let imgDiv = document.createElement('div')
    imgDiv.setAttribute('class', 'carrinho-img-div')
    let cartItemImg = document.createElement('img')
    cartItemImg.setAttribute('class', 'carrinho-item')
    cartItemImg.src = data.img
    let divDetails = document.createElement('div')
    divDetails.setAttribute('class', 'carrinho-detalhes')
    let cartItemName = document.createElement('p')
    cartItemName.setAttribute('class', 'carrinho-item')
    cartItemName.innerHTML = data.nameItem
    let cartItemPrice = document.createElement('p')
    cartItemPrice.setAttribute('class', 'preco')
    cartItemPrice.innerHTML = `R$ ${data.value.toFixed(2)}`
    let cartItemRemove = document.createElement('button')
    cartItemRemove.setAttribute('class', 'carrinho-remover')
    cartItemRemove.innerHTML = 'Remover produto'
    cartItemRemove.addEventListener('click', e => {
        cartListItem.remove()
        cartCount--
        cartCountEl.innerHTML = cartCount

        cartTotal -= data.value
        cartTotalEl.innerHTML = `R$ ${cartTotal.toFixed(2).toString().replace('.', ',')}`
        showEmptyCartMessage(cartCount)
    })

    cartListItem.append(cartDescription)
    imgDiv.appendChild(cartItemImg)
    divDetails.append(cartItemName, cartItemPrice, cartItemRemove)
    cartDescription.append(imgDiv, divDetails)
    cartList.appendChild(cartListItem)
}

//Atualiza a contagem do carrinho quando forem adicionados itens
function updateCartCountAndTotal(itemValue) {
    cartCount++
    cartCountEl.innerHTML = cartCount
    cartTotal += itemValue
    cartTotalEl.textContent = `R$ ${cartTotal.toFixed(2).toString().replace('.', ',')}`
    showEmptyCartMessage(cartCount)
}

//Insere e retira a mensagem de carirnho vazio e insere e retira o rodapé de contagem do carrinho, quando adicionamos e removemos itens
function showEmptyCartMessage(cartCount) {
    if (cartCount == 0) {
        cartEmpty.classList.remove('carrinho-vazio-hidden')
        countEmpty.classList.add('carrinho-rodape-hidden')
    } else {
        cartEmpty.classList.add('carrinho-vazio-hidden')
        countEmpty.classList.remove('carrinho-rodape-hidden')
    }
}