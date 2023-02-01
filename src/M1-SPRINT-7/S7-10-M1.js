let itens = []

function addItens(){
    let itensName = document.getElementById("produto").value
    let itensQuantidade = document.getElementById("numero").value

    let item = { nome: itensName, quantidade: itensQuantidade }

    if(itensName === '' || itensQuantidade == ''){
        alert('Os campos precisam ser preenchidos antes de adicionar o item')
        return
    }

    itens.push(item)
    criarLista()
}

function criarLista(){
    let listaDeItens = document.getElementById('lista-itens')
    listaDeItens.innerHTML = ''
    for(let i = 0; i < itens.length; i++){
        let item = itens[i]
        let listItem = document.createElement('li')
        listItem.innerHTML = ` ${item.quantidade} - ${item.nome}`
        listItem.setAttribute('id', 'item')
        listaDeItens.appendChild(listItem)
        let removeBtn = document.createElement('button')
        removeBtn.setAttribute('onclick', `removeItem(${i})`)
        removeBtn.setAttribute('class', 'remove-item')
        listItem.appendChild(removeBtn)
        let btnImg = document.createElement('img')
        btnImg.setAttribute('class', 'imagemLixeira')
        removeBtn.appendChild(btnImg)
    }
}

function removeItem(index){
    itens.splice(index, 1)
    criarLista()
}