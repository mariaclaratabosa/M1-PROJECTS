let itens = [
  {
      image: './img/clock.jpg',
      alt: 'Pintura de relógio preto',
      name: 'Relógio Preto',
      price: 'R$ 100.00',
      type: 'frame'
  },
  {
      image: './img/gamepad.jpg',
      alt: 'Pintura de gamepad',
      name: 'Gamepad',
      price: 'R$ 150.00',
      type: 'frame'
  },
  {
      image: './img/personagem.jpg',
      alt: 'Pintura de personagem C3PO',
      name: 'C3PO',
      price: 'R$ 200.00',
      type: 'frame',
  },
  {
      image:'./img/gandalf.jpg',
      alt: 'Pintura de Gandalf',
      name: 'Gandalf',
      price: 'R$ 250.00',
      type: 'frame',
  },
  {
      image:'./img/darthvader.jpg',
      alt: 'Pintura de Darth Vader',
      name: 'Darth Vader',
      price: 'R$ 300.00',
      type: 'frame',
  },
  {
      image:'./img/mario.jpg',
      alt: 'Pintura de Mario',
      name: 'Mario',
      price: 'R$ 350.00',
      type: 'frame',
  },
  {
      image: './img/animewoman.jpg',
      alt: 'Personagem Eva',
      name: 'Eva',
      price: 'R$ 350.00',
      type: 'figure'
  },
  {
      image: './img/dragonballpersonagem.jpg',
      alt: 'Goku',
      name: 'Goku',
      price: 'R$ 300.00',
      type: 'figure'
  },
  {
      image: './img/starwarspersonagem.jpg',
      alt: 'Baby Woda',
      name: 'Baby Woda',
      price: 'R$ 250.00',
      type: 'figure',
  },
  {
      image: './img/sonic.jpg',
      alt: 'Sonic',
      name: 'Sonic',
      price: 'R$ 200.00',
      type: 'figure',
  },
  {
      image: './img/coragem.jpg',
      alt: 'Coragem',
      name: 'Coragem',
      price: 'R$ 150.00',
      type: 'figure',
  },
  {
      image: './img/tomejerry.jpg',
      alt: 'Tom e Jerry',
      name: 'Tom e Jerry',
      price: 'R$ 100.00',
      type: 'figure',
  },
]

let listFrames = []
let listFigures = []

function separateItens(listItens){
  for(let i=0; i<listItens.length; i++){
      if(listItens[i].type == 'frame'){
          listFrames.push(itens[i])
      } else if(listItens[i].type == 'figure'){
          listFigures.push(itens[i])
      }
  }
}
separateItens(itens)

let sectionListFrame = document.querySelector('.productsFrame')
let sectionListFigure = document.querySelector('.productsFigure')

function listFrames_(listFrames){
  let createList = document.createElement('ul')
  for(let i = 0; i < listFrames.length; i++){
      createList.classList.add('listCardsFrames')
      let createListItens = document.createElement('li')
      createListItens.classList.add('cards')
      let img = document.createElement('img')
      img.classList.add('imagem')
      img.src = listFrames[i].image
      img.alt = listFrames[i].alt
      createListItens.appendChild(img)
      let createProductName = document.createElement('span')
      createProductName.classList.add('titulo')
      createProductName.innerText = `${listFrames[i].name}`
      createListItens.appendChild(createProductName)
      let createProductPrice = document.createElement('p')
      createProductPrice.classList.add('preco')
      createProductPrice.innerText = listFrames[i].price
      createListItens.appendChild(createProductPrice) 
      createList.appendChild(createListItens)
  }
  sectionListFrame.appendChild(createList)
}
listFrames_(listFrames)

function listFigures_(listFigures){
  let createList2 = document.createElement('ul')
  for(let i = 0; i < listFigures.length; i++){
      createList2.classList.add('listCardsFigures')
      let createListItens = document.createElement('li')
      createListItens.classList.add('cards')
      let img = document.createElement('img')
      img.classList.add('imagem')
      img.src = listFigures[i].image
      img.alt = listFigures[i].alt
      createListItens.appendChild(img)
      let createProductName = document.createElement('span')
      createProductName.classList.add('titulo')
      createProductName.innerText = `${listFigures[i].name}`
      createListItens.appendChild(createProductName)
      let createProductPrice = document.createElement('p')
      createProductPrice.classList.add('preco')
      createProductPrice.innerText = listFigures[i].price
      createListItens.appendChild(createProductPrice)
      createList2.appendChild(createListItens)
  }
  sectionListFigure.appendChild(createList2)
}
listFigures_(listFigures)