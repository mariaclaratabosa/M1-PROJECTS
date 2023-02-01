const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]

//Exercício 1
function retornaTodosElementos(){
    console.log(`${listaDeElementos}`)
}
retornaTodosElementos()

//Exercício 2
function retornaValorEspecifico(int){
    console.log(`O valor contido nesta posição é: ${listaDeElementos[int]}`)
}
retornaValorEspecifico(2)

//Exercício 3
function retornarTipoElemento(inteiro){
    if (typeof listaDeElementos[inteiro] == "string"){
        console.log(`O elemento ${listaDeElementos[inteiro]} é um elemento do tipo texto`)
    } else if (typeof listaDeElementos[inteiro] == "number") {
        console.log(`O elemento ${listaDeElementos[inteiro]} é um elemento do tipo número`)
    }
}
retornarTipoElemento(2)

//Exercício 4
function removeUltimoElementoString(){
    if (typeof listaDeElementos[listaDeElementos.length-1] == "string"){
        listaDeElementos.pop()
        console.log('Elemento deletado com sucesso')
    } else {
        console.log('Falha ao remover o elemento da lista')
    }
}
removeUltimoElementoString()

//Exercício 5
function consultaPosicao(valor){
    if(listaDeElementos.indexOf(valor) <= listaDeElementos.length-1){
        console.log(`O valor procurado está na posição: ${listaDeElementos.indexOf(valor)}`)
    }else{
        console.log('Valor não encontrado')
    }
}
consultaPosicao(5)

//Exercício 6
function removerElementoEspecífico(valor){
    if(listaDeElementos.indexOf(valor) <= listaDeElementos.length-1){
        listaDeElementos.splice(valor, 1)
        console.log(`Elemento ${valor} deletado com sucesso`)
    } else {
        console.log(`Elemento não encontrado`)
    }
}
removerElementoEspecífico(2)

//Exercício 7
function inserirNaPosicaoCorreta(valor){
    if(typeof valor == "number"){
        listaDeElementos.unshift(valor)
    } else if(typeof valor == "string"){
        listaDeElementos.push(valor)
    }
    console.log('Lista atualizada com sucesso')
    console.log(listaDeElementos)
}
inserirNaPosicaoCorreta('Maria')