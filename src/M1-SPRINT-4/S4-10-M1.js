// Exercício 1
function cubo10() {
  let str = ''
  for (let i = 1; i <= 10; i++) {
      str = str + (i**3) + ' '
  }
  return str
}
console.log(cubo10())

//Exercício 2
function divisiveisPor(limite, divisor) {
  let str = ''
  for (let i = 1; i <= limite; i++) {
      if (i % divisor == 0) {
          str = str + i + ' '
      }
  }
  return str
}
console.log(divisiveisPor(100, 10))

//Exercício 3
function posicaoLetra(palavra, numero) {
  let posicao = ''
  for (let i = palavra.length - 1; i >= 0; i--) {
      posicao = posicao + palavra[numero]
      return posicao
  }
}
console.log(posicaoLetra('algorítmos', 7))

//Exercício 4
function palavraRecortada(palavra, numero) {
  let recorte = ''
  for (let i = palavra.length - 1; i >= 0; i--) {
      recorte = recorte + palavra.slice(0, numero)
      return recorte
  }
}
console.log(palavraRecortada('Algoritmos', 4))

//Exercício 5
function palavraResto(palavra, numero) {
  let resto = ''
  for (let i = palavra.length - 1; i >= 0; i--) {
      resto = resto + palavra.slice(numero)
      return resto
  }
}
console.log(palavraResto('Algoritmos', 2))

//Exercício 6
function contaVogais(palavra) {
  let totalVogais = 0
  let vogais = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < palavra.length; i++) {
      if (vogais.indexOf(palavra[i]) != -1) {
          totalVogais++
      }
  }
  return totalVogais
}
console.log(contaVogais("abacaxi"))

//Exercício 7
function textoDeTrasParaFrente(texto) {
  let str = ''
  for (let i = texto.length - 1; i >= 0; i--) {
      str = str + `${texto[i]}`
  }
  return str
}
console.log(textoDeTrasParaFrente('abacaxi'))

//Exercício 8
function removeEspacos(texto) {
  let str = ''
  for (let i = 0; i <= texto.length - 1; i++) {
      if (texto[i] === ' ') {

      }
      else {
          str = str + `${texto[i]}`
      }
  }
  return str
}
console.log(removeEspacos('Não restará  espaços em branco'))

//Exercício 9
function textoCriptografado(texto) {
  for (let i = 0; i <= texto.length - 1; i++) {
      if (texto[i] === 'a' || texto[i] === 'A') {
          texto = texto.replace('a', 'x')
          texto = texto.replace('A', 'X')
      }
      if (texto[i] === 'e' || texto[i] === 'E') {
          texto = texto.replace('e', 'y')
          texto = texto.replace('E', 'Y')
      }
      if (texto[i] === 'i' || texto[i] === 'I') {
          texto = texto.replace('i', 'w')
          texto = texto.replace('I', 'W')
      }
      if (texto[i] === 'o' || texto[i] === 'O') {
          texto = texto.replace('o', 'k')
          texto = texto.replace('O', 'K')
      }
      if (texto[i] === 'u' || texto[i] === 'U') {
          texto = texto.replace('u', 'z')
          texto = texto.replace('U', 'Z')
      }
  }
  return texto
}
console.log(textoCriptografado('Uma frase ultra secreta que precisa ser criptografada'))
