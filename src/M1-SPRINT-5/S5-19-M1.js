//Exercício 1
function vowelsCount(lista) {
  let newArray = []
  for (let i = 0; i < lista.length; i++) {
      newArray[i] = containsVowels(lista[i])
  }
  return newArray
}
function containsVowels(value) {
  let vogais = ['a', 'e', 'i', 'o', 'u']
  let totalVogais = 0
  for (let i = 0; i < value.length; i++) {
      if (vogais.indexOf(value[i]) != -1) {
          totalVogais++
      }
  }
  return totalVogais
}
console.log(vowelsCount(['laranja', 'abacaxi', 'acerola', 'morango', 'uva', 'melancia'])) 

//Exercício 2
function stringTripletGroup(string){
  let fatias = []
  for(let i = 0; i < string.length; i+=3){
      let fatiar = string.slice(i, i+3)
      if(fatiar.length < 3){
       fatiar = fatiar +  ' '
      }
      fatias.push(fatiar)
  }
  return fatias
}
console.log(stringTripletGroup('Os três mosqueteiros')) 

//Exercício 3
function dominantPet(lista) {
  let countCat = 0
  let countDog = 0
  for (let i = 0; i < lista.length; i++) {
      if (lista[i].toLowerCase() == 'cat') {
          countCat++
      } else if (lista[i].toLowerCase() == 'dog') {
          countDog++
      }
  }
  if (countCat > countDog) {
      return 'CAT!'
  } else if (countDog > countCat) {
      return 'DOG!'
  } else {
      return 'DRAW!'
  }
}
console.log(dominantPet(['dog', 'cAt', 'Cat', 'doG', 'CAT', 'Dog', 'caT', "DOG"]))

//Exercício 4
function divisibleList(lista, numero){
  let divisivel = []
  for(let i = 0; i < lista.length; i++){
      if (lista[i]%numero == 0){
          divisivel.push(lista[i])
      }
  }
  return divisivel 
}
console.log(divisibleList([14, 25, 32, 50, 35, 30], 5))

//Exercício 5
function trustMeOrNot(bool, numero) {
  return Array(numero).fill(bool)
}
console.log(trustMeOrNot(true, 8))

//Exercício 6
function changeLampStatus(lista) {
  let lampOnOff = []
  for (let i = 0; i < lista.length; i++) {
      lampOnOff.push(!lista[i])
  }
  return lampOnOff
}
console.log(changeLampStatus([false, false, true, false, true, true, true]))

//Exercício 7
function averageGrade(lista) {
  let soma = 0
  let media = 0
  for (let i = 0; i < lista.length; i++) {
      soma = soma + lista[i]
  }
  media = soma / lista.length
  return `A média das notas é: ${media.toFixed(2)}`
}
console.log(averageGrade([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1]))

//Exercício 8
function canvasDeliveriesPercentage(lista){
  let soma = 0
  let media = 0
  let porcentagem = 0
  for(let i = 0; i < lista.length; i++){
      soma = soma + lista[i]
  }
  media = soma/lista.length
  porcentagem = media*10
  return `A porcengatem total de entregas atingida é de: ${porcentagem.toFixed(2)}%`
}
console.log(canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7]))
