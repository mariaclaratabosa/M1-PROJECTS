//Exercício 1
function string(nome){
  let arr = []
  arr = arr + nome
  return arr
}
console.log(string('Maria'))

//Exercício 2
function number(posicao){
  //Criar o array
  const arr =  ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]
  //Estabelecer a condição
  if (posicao <= arr.length-1){
      console.log(arr[posicao])
  } else {
      console.log('Valor não encontrado')
  }
}
number(3)

//Exercício 3
function numero(inteiro){
  //Criar o array
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //Estabelecer a condição de par ou ímpar
  if (arr[inteiro]%2 == 0){
      console.log("O valor encontrado nessa posição é par")
  } else {
      console.log("O valor encontrado nesta posição é ímpar")
  }
}
numero(2)

//Exercício 4
function lista(list){
  let tmp = list[0].length
  let nomes = ["Pedro", "Rafael", "José"]
  for(let i = 1; i<=nomes.length-1; i++){
      if(tmp >=  nomes[i].length){

      }
      else{
          tmp = nomes[i]
      }
  }
  return tmp 
}
console.log(lista(2))

//Exercício 5
function numeros (lista){
  let soma = 0
  if(lista[lista.length-1] + lista[lista.length-2] %2 == 0){
      soma = lista[lista.length-1] + lista[lista.length-2]
      return 'A soma é um múltiplo de 2'
  } else {
      return 'A soma não é um múltiplo de 2'
  }
}
console.log(numeros([1,4,6,9,11,8]))
